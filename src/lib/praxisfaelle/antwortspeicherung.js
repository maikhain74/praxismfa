export function speichereErstbewertung(speicher, schluessel, bewertung) {
  if (
    !speicher ||
    typeof speicher.getItem !== "function" ||
    typeof speicher.setItem !== "function"
  ) {
    throw new TypeError("Ungültiger Speicher.");
  }

  if (typeof schluessel !== "string" || !schluessel.trim()) {
    throw new Error("Eine eindeutige Speicherkennung ist erforderlich.");
  }

  const vorhanden = speicher.getItem(schluessel);

  if (vorhanden !== null) {
    return {
      gespeichert: false,
      bewertung: JSON.parse(vorhanden)
    };
  }

  if (
    !bewertung ||
    bewertung.abgeschlossen !== true ||
    !Number.isFinite(bewertung.punkte) ||
    bewertung.punkte < 0 ||
    typeof bewertung.korrekt !== "boolean" ||
    typeof bewertung.sicherheitskritisch !== "boolean"
  ) {
    throw new Error("Ungültige Erstbewertung.");
  }

  const erstbewertung = {
    abgeschlossen: true,
    punkte: bewertung.punkte,
    korrekt: bewertung.korrekt,
    sicherheitskritisch: bewertung.sicherheitskritisch
  };

  speicher.setItem(
    schluessel,
    JSON.stringify(erstbewertung)
  );

  return {
    gespeichert: true,
    bewertung: erstbewertung
  };
}
