import { defineMiddleware } from "astro:middleware";
import { istPremiumLektion } from "./lib/premium/katalog.js";
import { createSupabaseServerClient } from "./lib/supabase/server.js";

export const onRequest = defineMiddleware(async (context, next) => {
  if (!istPremiumLektion(context.url.pathname)) {
    return next();
  }

  const supabase = createSupabaseServerClient(context);

  let user = null;

  try {
    const { data, error } = await supabase.auth.getUser();

    if (!error) {
      user = data.user;
    }
  } catch (error) {
    console.error("Fehler bei der Authentifizierung:", error);
  }

  if (!user) {
    context.locals.premiumAccess = false;
    context.locals.userRole = "guest";
    return context.redirect("/anmelden/", 302);
  }

  const { data: roleData, error: roleError } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (roleError) {
    console.error("Fehler bei der Rollenprüfung:", roleError.message);
    return new Response("Zugriffsprüfung derzeit nicht möglich.", {
      status: 503,
    });
  }
  const role = roleData?.role || "user";

  context.locals.userRole = role;

  // Administratoren erhalten dauerhaft Vollzugriff.
  if (role === "admin") {
    context.locals.premiumAccess = true;
    return next();
  }

  // Gültige Abonnements serverseitig prüfen.
  const now = new Date().toISOString();

  const { data: subscriptions, error: subscriptionError } = await supabase
    .from("subscriptions")
    .select("id")
    .eq("user_id", user.id)
    .eq("status", "active")
    .gt("current_period_end", now)
    .limit(1);

  if (subscriptionError) {
    console.error(
      "Fehler bei der Abonnementprüfung:",
      subscriptionError.message
    );

    return new Response("Zugriffsprüfung derzeit nicht möglich.", {
      status: 503,
    });
  }

  context.locals.premiumAccess = (subscriptions?.length || 0) > 0;

  if (!context.locals.premiumAccess) {
    return context.redirect("/premium/?hinweis=zugriff", 302);
  }

  return next();
});
