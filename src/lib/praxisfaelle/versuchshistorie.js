export function leseVersuchshistorie(speicher, fallId) {
  pruefeSpeicher(speicher);
  pruefeFallId(fallId);

  try {
    const daten = JSON.parse(
      speicher.getItem(speicherschluessel(fallId)) || "[]"
    );

    if (!Array.isArray(daten)) return [];

    return daten.filter(eintrag =>
      eintrag &&
      typeof eintrag.datum === "string" &&
      !Number.isNaN(Date.parse(eintrag.datum)) &&
      Number.isFinite(eintrag.punkte) &&
      Number.isFinite(eintrag.maximalpunkte) &&
      eintrag.maximalpunkte > 0 &&
      eintrag.punkte >= 0 &&
      eintrag.punkte <= eintrag.maximalpunkte &&
      Number.isInteger(eintrag.sicherheitskritischeFehler) &&
      eintrag.sicherheitskritischeFehler >= 0 &&
      (
        eintrag.versuchId === undefined ||
        (
          typeof eintrag.versuchId === "string" &&
          eintrag.versuchId.trim().length > 0
        )
      )
    ).slice(-5);
  } catch {
    return [];
  }
}

export function speichereVersuch(
  speicher,
  fallId,
  ergebnis,
  versuchId
) {
  pruefeSpeicher(speicher);
  pruefeFallId(fallId);

  if (typeof versuchId !== "string" || !versuchId.trim()) {
    throw new Error("Eine eindeutige Versuchskennung ist erforderlich.");
  }

  if (
    !ergebnis ||
    !Number.isFinite(ergebnis.erreichtePunkte) ||
    !Number.isFinite(ergebnis.maximalpunkte) ||
    ergebnis.maximalpunkte <= 0 ||
    ergebnis.erreichtePunkte < 0 ||
    ergebnis.erreichtePunkte > ergebnis.maximalpunkte ||
    !Number.isInteger(ergebnis.sicherheitskritischeFehler) ||
    ergebnis.sicherheitskritischeFehler < 0
  ) {
    throw new Error("Ungültiges Versuchsergebnis.");
  }

  const historie = leseVersuchshistorie(speicher, fallId);

  if (historie.some(eintrag => eintrag.versuchId === versuchId)) {
    return false;
  }

  historie.push({
    versuchId,
    datum: new Date().toISOString(),
    punkte: ergebnis.erreichtePunkte,
    maximalpunkte: ergebnis.maximalpunkte,
    sicherheitskritischeFehler:
      ergebnis.sicherheitskritischeFehler
  });

  speicher.setItem(
    speicherschluessel(fallId),
    JSON.stringify(historie.slice(-5))
  );

  return true;
}

function speicherschluessel(fallId) {
  return `praxismfa:fall:${fallId}:historie:v1`;
}

function pruefeFallId(fallId) {
  if (typeof fallId !== "string" || !fallId.trim()) {
    throw new Error("Eine gültige Fallkennung ist erforderlich.");
  }
}

function pruefeSpeicher(speicher) {
  if (
    !speicher ||
    typeof speicher.getItem !== "function" ||
    typeof speicher.setItem !== "function"
  ) {
    throw new TypeError("Ungültiger Speicher.");
  }
}
