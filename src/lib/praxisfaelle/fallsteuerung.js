import { bewerteAntwort } from "./antwortbewertung.js";
import { speichereErstbewertung } from "./antwortspeicherung.js";
import { berechneGesamtergebnis } from "./bewertung.js";
import {
  speichereVersuch,
  leseVersuchshistorie
} from "./versuchshistorie.js";
import {
  ermittleAktuelleAufgabe,
  ermittlePhase
} from "./aufgabensteuerung.js";

function pruefeFall(fall) {
  if (
    !fall ||
    typeof fall.id !== "string" ||
    !fall.id.trim() ||
    !Array.isArray(fall.aufgaben) ||
    fall.aufgaben.length === 0
  ) {
    throw new Error("Ungültige Fallkonfiguration.");
  }
}

function aufgabenschluessel(fallId, aufgabeId, speicher) {
  const versuchId = speicher.getItem(
    `praxismfa:fall:${fallId}:aktueller-versuch:v1`
  );

  if (versuchId) {
    return `praxismfa:fall:${fallId}:versuch:${versuchId}:aufgabe:${aufgabeId}:v1`;
  }

  return `praxismfa:fall:${fallId}:aufgabe:${aufgabeId}:v1`;
}

export function beantworteAufgabe(
  speicher,
  fall,
  aufgabeId,
  ausgewaehlteAntworten
) {
  pruefeFall(fall);

  const aufgabe = fall.aufgaben.find(
    eintrag => eintrag.id === aufgabeId
  );

  if (!aufgabe) {
    throw new Error("Aufgabe nicht gefunden.");
  }

  if (
    !speicher ||
    typeof speicher.getItem !== "function" ||
    typeof speicher.setItem !== "function"
  ) {
    throw new TypeError("Ungültiger Speicher.");
  }

  const schluessel = aufgabenschluessel(fall.id, aufgabe.id, speicher);

  const vorhanden = speicher.getItem(schluessel);

  if (vorhanden !== null) {
    return {
      gespeichert: false,
      bewertung: JSON.parse(vorhanden)
    };
  }

  const bewertung = bewerteAntwort(
    aufgabe,
    ausgewaehlteAntworten
  );

  return speichereErstbewertung(
    speicher,
    schluessel,
    bewertung
  );
}

export function leseFallbewertungen(speicher, fall) {
  pruefeFall(fall);

  if (!speicher || typeof speicher.getItem !== "function") {
    throw new TypeError("Ungültiger Speicher.");
  }

  return fall.aufgaben.map(aufgabe => {
    const daten = speicher.getItem(
      aufgabenschluessel(fall.id, aufgabe.id, speicher)
    );

    return daten === null ? null : JSON.parse(daten);
  });
}

export function ermittleFallergebnis(speicher, fall) {
  const bewertungen = leseFallbewertungen(speicher, fall);

  if (bewertungen.some(
    bewertung => bewertung?.abgeschlossen !== true
  )) {
    return {
      abgeschlossen: false,
      ergebnis: null
    };
  }

  return {
    abgeschlossen: true,
    ergebnis: berechneGesamtergebnis(
      fall.aufgaben,
      bewertungen
    )
  };
}

export function ermittleFallfortschritt(speicher, fall) {
  const bewertungen = leseFallbewertungen(speicher, fall);

  const fortschritt = ermittleAktuelleAufgabe(
    fall.aufgaben,
    bewertungen
  );

  const phase = ermittlePhase(
    fall.phasen,
    fortschritt.aufgabenNummer
  );

  if (!phase) {
    throw new Error(
      "Für die aktuelle Aufgabe wurde keine gültige Phase gefunden."
    );
  }

  const aktuelleAufgabe = fall.aufgaben[
    fortschritt.aufgabenNummer - 1
  ];

  return {
    ...fortschritt,
    aufgabeId: aktuelleAufgabe.id,
    aufgabeTitel: aktuelleAufgabe.titel,
    phaseId: phase.id,
    phaseTitel: phase.titel
  };
}


export function archiviereAbgeschlossenenVersuch(speicher, fall) {
  pruefeFall(fall);

  if (
    !speicher ||
    typeof speicher.getItem !== "function" ||
    typeof speicher.setItem !== "function"
  ) {
    throw new TypeError("Ungültiger Speicher.");
  }

  const status = ermittleFallergebnis(speicher, fall);

  if (!status.abgeschlossen) {
    return {
      archiviert: false,
      grund: "nicht-abgeschlossen"
    };
  }

  const kennungsschluessel =
    `praxismfa:fall:${fall.id}:aktueller-versuch:v1`;

  const versuchId =
    speicher.getItem(kennungsschluessel) || "erster-versuch";

  const abschlussschluessel =
    `praxismfa:fall:${fall.id}:abschluss:${versuchId}:v1`;

  if (speicher.getItem(abschlussschluessel) === "gespeichert") {
    return {
      archiviert: false,
      grund: "bereits-gespeichert"
    };
  }

  const inHistorie = leseVersuchshistorie(
    speicher,
    fall.id
  ).some(eintrag => eintrag.versuchId === versuchId);

  if (!inHistorie) {
    const gespeichert = speichereVersuch(
      speicher,
      fall.id,
      status.ergebnis,
      versuchId
    );

    if (!gespeichert) {
      throw new Error(
        "Das Versuchsergebnis konnte nicht gesichert werden."
      );
    }
  }

  speicher.setItem(abschlussschluessel, "gespeichert");

  return {
    archiviert: !inHistorie,
    grund: inHistorie ? "bereits-in-historie" : "gespeichert"
  };
}

export function starteNeuenVersuch(speicher, fall) {
  pruefeFall(fall);

  if (
    !speicher ||
    typeof speicher.getItem !== "function" ||
    typeof speicher.setItem !== "function"
  ) {
    throw new TypeError("Ungültiger Speicher.");
  }

  const status = ermittleFallergebnis(speicher, fall);

  if (!status.abgeschlossen) {
    throw new Error(
      "Ein neuer Versuch ist erst nach Abschluss möglich."
    );
  }

  const kennungsschluessel =
    `praxismfa:fall:${fall.id}:aktueller-versuch:v1`;

  archiviereAbgeschlossenenVersuch(speicher, fall);

  const neueKennung =
    `versuch-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  speicher.setItem(kennungsschluessel, neueKennung);

  return {
    gestartet: true,
    gespeicherteVersuche:
      leseVersuchshistorie(speicher, fall.id).length
  };
}
