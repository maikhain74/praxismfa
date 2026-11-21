export function ermittleAktuelleAufgabe(aufgaben, bewertungen) {
  if (
    !Array.isArray(aufgaben) ||
    !Array.isArray(bewertungen) ||
    aufgaben.length === 0 ||
    aufgaben.length !== bewertungen.length
  ) {
    throw new Error("Ungültige Aufgaben- oder Bewertungsdaten.");
  }

  const ersteOffeneAufgabe = bewertungen.findIndex(
    bewertung => bewertung?.abgeschlossen !== true
  );

  const abgeschlossen = ersteOffeneAufgabe === -1;

  const aufgabenNummer = abgeschlossen
    ? aufgaben.length
    : ersteOffeneAufgabe + 1;

  return {
    aufgabenNummer,
    aufgabenAnzahl: aufgaben.length,
    abgeschlossen,
    fortschrittProzent: abgeschlossen
      ? 100
      : Math.round(
          ((aufgabenNummer - 1) / aufgaben.length) * 100
        )
  };
}

export function ermittlePhase(phasen, aufgabenNummer) {
  if (
    !Array.isArray(phasen) ||
    !Number.isInteger(aufgabenNummer) ||
    aufgabenNummer < 1
  ) {
    throw new Error("Ungültige Phasen- oder Aufgabendaten.");
  }

  return phasen.find(
    phase =>
      Number.isInteger(phase.start) &&
      Number.isInteger(phase.ende) &&
      aufgabenNummer >= phase.start &&
      aufgabenNummer <= phase.ende
  ) || null;
}
