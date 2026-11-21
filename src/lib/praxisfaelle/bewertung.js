export function berechneGesamtergebnis(aufgaben, bewertungen) {
  if (!Array.isArray(aufgaben) || !Array.isArray(bewertungen)) {
    throw new TypeError("Aufgaben und Bewertungen müssen Arrays sein.");
  }

  if (aufgaben.length !== bewertungen.length) {
    throw new Error("Anzahl der Aufgaben und Bewertungen stimmt nicht überein.");
  }

  let maximalpunkte = 0;
  let erreichtePunkte = 0;
  const sicherheitskritischeAufgaben = [];

  aufgaben.forEach((aufgabe, index) => {
    const bewertung = bewertungen[index];

    if (
      !aufgabe ||
      !Number.isFinite(aufgabe.maxPunkte) ||
      aufgabe.maxPunkte < 0
    ) {
      throw new Error(`Ungültige Maximalpunktzahl bei Aufgabe ${index + 1}.`);
    }

    if (
      !bewertung ||
      bewertung.abgeschlossen !== true ||
      !Number.isFinite(bewertung.punkte) ||
      bewertung.punkte < 0 ||
      bewertung.punkte > aufgabe.maxPunkte
    ) {
      throw new Error(`Ungültige Bewertung bei Aufgabe ${index + 1}.`);
    }

    maximalpunkte += aufgabe.maxPunkte;
    erreichtePunkte += bewertung.punkte;

    if (bewertung.sicherheitskritisch === true) {
      sicherheitskritischeAufgaben.push(index + 1);
    }
  });

  return {
    aufgabenAnzahl: aufgaben.length,
    maximalpunkte,
    erreichtePunkte,
    prozent: maximalpunkte > 0
      ? Math.round((erreichtePunkte / maximalpunkte) * 100)
      : 0,
    sicherheitskritischeAufgaben,
    sicherheitskritischeFehler: sicherheitskritischeAufgaben.length
  };
}
