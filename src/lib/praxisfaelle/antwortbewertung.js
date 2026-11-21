export function bewerteAntwort(aufgabe, ausgewaehlteAntworten) {
  if (!aufgabe || typeof aufgabe !== "object") {
    throw new Error("Ungültige Aufgabe.");
  }

  if (
    aufgabe.typ !== "single-choice" &&
    aufgabe.typ !== "multiple-choice"
  ) {
    throw new Error("Nicht unterstützter Aufgabentyp.");
  }

  if (
    !Number.isFinite(aufgabe.maxPunkte) ||
    aufgabe.maxPunkte <= 0 ||
    typeof aufgabe.sicherheitskritisch !== "boolean"
  ) {
    throw new Error("Ungültige Bewertungsdaten.");
  }

  if (
    !Array.isArray(aufgabe.optionen) ||
    aufgabe.optionen.length < 2 ||
    !Array.isArray(aufgabe.richtigeAntworten) ||
    aufgabe.richtigeAntworten.length === 0
  ) {
    throw new Error("Ungültige Antwortkonfiguration.");
  }

  const optionenIds = aufgabe.optionen.map(option => option?.id);

  if (
    optionenIds.some(id => typeof id !== "string" || !id.trim()) ||
    new Set(optionenIds).size !== optionenIds.length ||
    aufgabe.richtigeAntworten.some(
      id => !optionenIds.includes(id)
    ) ||
    new Set(aufgabe.richtigeAntworten).size !==
      aufgabe.richtigeAntworten.length
  ) {
    throw new Error("Ungültige Antwortkennungen.");
  }

  if (
    aufgabe.typ === "single-choice" &&
    aufgabe.richtigeAntworten.length !== 1
  ) {
    throw new Error("Single-Choice benötigt genau eine Lösung.");
  }

  if (
    aufgabe.typ === "multiple-choice" &&
    aufgabe.richtigeAntworten.length < 2
  ) {
    throw new Error(
      "Multiple-Choice benötigt mindestens zwei Lösungen."
    );
  }

  if (
    !Array.isArray(ausgewaehlteAntworten) ||
    ausgewaehlteAntworten.length === 0 ||
    ausgewaehlteAntworten.some(
      id => typeof id !== "string" || !optionenIds.includes(id)
    ) ||
    new Set(ausgewaehlteAntworten).size !==
      ausgewaehlteAntworten.length
  ) {
    throw new Error("Ungültige Antwortauswahl.");
  }

  if (
    aufgabe.typ === "single-choice" &&
    ausgewaehlteAntworten.length !== 1
  ) {
    throw new Error("Bei Single-Choice ist genau eine Antwort erlaubt.");
  }

  if (aufgabe.kritischeAntworten !== undefined) {
    if (
      !Array.isArray(aufgabe.kritischeAntworten) ||
      aufgabe.kritischeAntworten.some(
        id => typeof id !== "string" || !optionenIds.includes(id)
      ) ||
      new Set(aufgabe.kritischeAntworten).size !==
        aufgabe.kritischeAntworten.length ||
      aufgabe.kritischeAntworten.some(
        id => aufgabe.richtigeAntworten.includes(id)
      )
    ) {
      throw new Error("Ungültige sicherheitskritische Antwortoptionen.");
    }
  }

  const richtigeAntworten = new Set(aufgabe.richtigeAntworten);
  const ausgewaehlt = new Set(ausgewaehlteAntworten);

  const korrekt =
    richtigeAntworten.size === ausgewaehlt.size &&
    [...richtigeAntworten].every(id => ausgewaehlt.has(id));

  return {
    abgeschlossen: true,
    punkte: korrekt ? aufgabe.maxPunkte : 0,
    korrekt,
    sicherheitskritisch:
      aufgabe.kritischeAntworten !== undefined
        ? ausgewaehlteAntworten.some(
            id => aufgabe.kritischeAntworten.includes(id)
          )
        : aufgabe.sicherheitskritisch === true && !korrekt
  };
}
