export function pruefeFallkonfiguration(fall) {
  const fehler = [];

  if (!fall || typeof fall !== "object" || Array.isArray(fall)) {
    return { gueltig: false, fehler: ["Ungültige Fallkonfiguration."] };
  }

  if (typeof fall.id !== "string" || !fall.id.trim()) {
    fehler.push("Die Fallkennung fehlt.");
  }

  if (typeof fall.titel !== "string" || !fall.titel.trim()) {
    fehler.push("Der Falltitel fehlt.");
  }

  if (!fall.patient || typeof fall.patient !== "object" ||
      typeof fall.patient.situation !== "string" ||
      !fall.patient.situation.trim()) {
    fehler.push("Die Patientensituation fehlt.");
  }

  if (!Array.isArray(fall.aufgaben) || fall.aufgaben.length === 0) {
    fehler.push("Es sind keine Aufgaben vorhanden.");
  }

  if (!Array.isArray(fall.phasen) || fall.phasen.length === 0) {
    fehler.push("Es sind keine Phasen vorhanden.");
  }

  if (fehler.length > 0) {
    return { gueltig: false, fehler };
  }

  const aufgabenIds = new Set();
  const phasenIds = new Set();
  const erlaubteTypen = new Set(["single-choice", "multiple-choice"]);

  fall.phasen.forEach((phase, index) => {
    const nummer = index + 1;

    if (!phase || typeof phase !== "object") {
      fehler.push(`Phase ${nummer}: Ungültige Phasendaten.`);
      return;
    }

    if (typeof phase.id !== "string" || !phase.id.trim()) {
      fehler.push(`Phase ${nummer}: Kennung fehlt.`);
    } else if (phasenIds.has(phase.id)) {
      fehler.push(`Phase ${nummer}: Doppelte Phasenkennung.`);
    } else {
      phasenIds.add(phase.id);
    }

    if (typeof phase.titel !== "string" || !phase.titel.trim()) {
      fehler.push(`Phase ${nummer}: Titel fehlt.`);
    }

    if (!Number.isInteger(phase.start) ||
        !Number.isInteger(phase.ende) ||
        phase.start < 1 ||
        phase.ende < phase.start ||
        phase.ende > fall.aufgaben.length) {
      fehler.push(`Phase ${nummer}: Ungültiger Aufgabenbereich.`);
    }
  });

  let naechsterPhasenbeginn = 1;

  for (const phase of fall.phasen) {
    if (
      !phase ||
      !Number.isInteger(phase.start) ||
      !Number.isInteger(phase.ende)
    ) {
      continue;
    }

    if (phase.start !== naechsterPhasenbeginn) {
      fehler.push(
        "Phasen müssen lückenlos und in aufsteigender Reihenfolge angeordnet sein."
      );
      break;
    }

    naechsterPhasenbeginn = phase.ende + 1;
  }

  if (naechsterPhasenbeginn !== fall.aufgaben.length + 1) {
    fehler.push(
      "Die Phasen müssen sämtliche Aufgaben bis zur letzten Aufgabe abdecken."
    );
  }

  fall.aufgaben.forEach((aufgabe, index) => {
    const nummer = index + 1;

    if (!aufgabe || typeof aufgabe !== "object") {
      fehler.push(`Aufgabe ${nummer}: Ungültige Aufgabendaten.`);
      return;
    }

    if (typeof aufgabe.id !== "string" || !aufgabe.id.trim()) {
      fehler.push(`Aufgabe ${nummer}: Kennung fehlt.`);
    } else if (aufgabenIds.has(aufgabe.id)) {
      fehler.push(`Aufgabe ${nummer}: Doppelte Aufgabenkennung.`);
    } else {
      aufgabenIds.add(aufgabe.id);
    }

    if (aufgabe.nummer !== nummer) {
      fehler.push(`Aufgabe ${nummer}: Falsche Aufgabennummer.`);
    }

    if (!erlaubteTypen.has(aufgabe.typ)) {
      fehler.push(`Aufgabe ${nummer}: Unbekannter Aufgabentyp.`);
    }

    if (typeof aufgabe.titel !== "string" || !aufgabe.titel.trim() ||
        typeof aufgabe.frage !== "string" || !aufgabe.frage.trim()) {
      fehler.push(`Aufgabe ${nummer}: Titel oder Frage fehlt.`);
    }

    if (!Number.isFinite(aufgabe.maxPunkte) ||
        aufgabe.maxPunkte <= 0) {
      fehler.push(`Aufgabe ${nummer}: Ungültige Punktzahl.`);
    }

    if (typeof aufgabe.sicherheitskritisch !== "boolean") {
      fehler.push(`Aufgabe ${nummer}: Sicherheitskennzeichnung fehlt.`);
    }

    const phase = fall.phasen.find(
      eintrag =>
        eintrag &&
        eintrag.id === aufgabe.phaseId &&
        Number.isInteger(eintrag.start) &&
        Number.isInteger(eintrag.ende) &&
        nummer >= eintrag.start &&
        nummer <= eintrag.ende
    );

    if (!phase) {
      fehler.push(`Aufgabe ${nummer}: Keine passende Phase.`);
    }

    if (!Array.isArray(aufgabe.optionen) ||
        aufgabe.optionen.length < 2) {
      fehler.push(`Aufgabe ${nummer}: Mindestens zwei Optionen erforderlich.`);
      return;
    }

    const optionenIds = new Set();

    aufgabe.optionen.forEach((option, optionIndex) => {
      if (!option ||
          typeof option.id !== "string" ||
          !option.id.trim() ||
          typeof option.text !== "string" ||
          !option.text.trim()) {
        fehler.push(
          `Aufgabe ${nummer}: Ungültige Antwortoption ${optionIndex + 1}.`
        );
        return;
      }

      if (optionenIds.has(option.id)) {
        fehler.push(`Aufgabe ${nummer}: Doppelte Antwortkennung.`);
      }

      optionenIds.add(option.id);
    });

    if (!Array.isArray(aufgabe.richtigeAntworten) ||
        aufgabe.richtigeAntworten.length === 0) {
      fehler.push(`Aufgabe ${nummer}: Richtige Antwort fehlt.`);
      return;
    }

    if (new Set(aufgabe.richtigeAntworten).size !==
        aufgabe.richtigeAntworten.length) {
      fehler.push(`Aufgabe ${nummer}: Doppelte richtige Antwort.`);
    }

    if (aufgabe.richtigeAntworten.some(
      antwort => !optionenIds.has(antwort)
    )) {
      fehler.push(`Aufgabe ${nummer}: Lösung verweist auf unbekannte Option.`);
    }

    if (aufgabe.typ === "single-choice" &&
        aufgabe.richtigeAntworten.length !== 1) {
      fehler.push(`Aufgabe ${nummer}: Single-Choice benötigt eine Lösung.`);
    }

    if (
      aufgabe.typ === "multiple-choice" &&
      aufgabe.richtigeAntworten.length < 2
    ) {
      fehler.push(
        `Aufgabe ${nummer}: Multiple-Choice benötigt mindestens zwei richtige Antworten.`
      );
    }

    if (aufgabe.kritischeAntworten !== undefined) {
      if (!Array.isArray(aufgabe.kritischeAntworten)) {
        fehler.push(
          `Aufgabe ${nummer}: Kritische Antworten müssen ein Array sein.`
        );
      } else {
        const kritischeIds = new Set();

        for (const antwort of aufgabe.kritischeAntworten) {
          if (typeof antwort !== "string" ||
              !optionenIds.has(antwort)) {
            fehler.push(
              `Aufgabe ${nummer}: Unbekannte kritische Antwortoption.`
            );
            continue;
          }

          if (kritischeIds.has(antwort)) {
            fehler.push(
              `Aufgabe ${nummer}: Doppelte kritische Antwortkennung.`
            );
          }

          kritischeIds.add(antwort);

          if (aufgabe.richtigeAntworten.includes(antwort)) {
            fehler.push(
              `Aufgabe ${nummer}: Richtige Antwort darf nicht als kritisch markiert sein.`
            );
          }
        }
      }
    }
  });

  for (let nummer = 1; nummer <= fall.aufgaben.length; nummer++) {
    const passendePhasen = fall.phasen.filter(
      phase =>
        phase &&
        Number.isInteger(phase.start) &&
        Number.isInteger(phase.ende) &&
        nummer >= phase.start &&
        nummer <= phase.ende
    );

    if (passendePhasen.length !== 1) {
      fehler.push(
        `Aufgabe ${nummer}: Muss genau einer Phase zugeordnet sein.`
      );
    }
  }

  return {
    gueltig: fehler.length === 0,
    fehler
  };
}
