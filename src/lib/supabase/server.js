import { createServerClient } from "@supabase/ssr";

export function createSupabaseServerClient(context) {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase-Serverkonfiguration fehlt.");
  }

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        const cookieHeader = context.request.headers.get("cookie") || "";

        return cookieHeader
          .split(";")
          .map((part) => part.trim())
          .filter(Boolean)
          .map((part) => {
            const separator = part.indexOf("=");

            if (separator === -1) return null;

            return {
              name: part.slice(0, separator).trim(),
              value: part.slice(separator + 1),
            };
          })
          .filter(Boolean);
      },

      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          context.cookies.set(name, value, {
            ...options,
            path: options?.path || "/",
          });
        });
      },
    },
  });
}
