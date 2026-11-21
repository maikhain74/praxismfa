export const musterfall = {
  id: "musterfall-01",
  titel: "Technischer Musterfall",
  beschreibung: "Testkonfiguration für die PraxisMFA-Engine.",

  patient: {
    name: "Testperson",
    alter: 50,
    situation: "Neutrale Ausgangssituation für einen Funktionstest."
  },

  phasen: [
    {
      id: "phase-1",
      titel: "Ausgangssituation",
      start: 1,
      ende: 2
    },
    {
      id: "phase-2",
      titel: "Entscheidung",
      start: 3,
      ende: 4
    },
    {
      id: "phase-3",
      titel: "Abschluss",
      start: 5,
      ende: 5
    }
  ],

  aufgaben: [
    {
      id: "aufgabe-1",
      nummer: 1,
      phaseId: "phase-1",
      typ: "single-choice",
      titel: "Testaufgabe 1",
      frage: "Welche Antwort ist richtig?",
      maxPunkte: 10,
      optionen: [
        { id: "a", text: "Antwort A" },
        { id: "b", text: "Antwort B" }
      ],
      richtigeAntworten: ["a"],
      sicherheitskritisch: false
    },
    {
      id: "aufgabe-2",
      nummer: 2,
      phaseId: "phase-1",
      typ: "multiple-choice",
      titel: "Testaufgabe 2",
      frage: "Welche Antworten sind richtig?",
      maxPunkte: 10,
      optionen: [
        { id: "a", text: "Antwort A" },
        { id: "b", text: "Antwort B" },
        { id: "c", text: "Antwort C" }
      ],
      richtigeAntworten: ["a", "c"],
      sicherheitskritisch: false
    },
    {
      id: "aufgabe-3",
      nummer: 3,
      phaseId: "phase-2",
      typ: "single-choice",
      titel: "Testaufgabe 3",
      frage: "Welche Entscheidung ist richtig?",
      maxPunkte: 10,
      optionen: [
        { id: "a", text: "Entscheidung A (fachlich falsch)" },
        { id: "b", text: "Entscheidung B (richtig)" },
        { id: "c", text: "Entscheidung C (sicherheitskritisch)" }
      ],
      richtigeAntworten: ["b"],
      sicherheitskritisch: true,
      kritischeAntworten: ["c"],
      erklaerung: "Entscheidung B ist die richtige Antwort. Entscheidung A ist fachlich falsch, aber nicht sicherheitskritisch. Entscheidung C stellt eine sicherheitskritische Fehlentscheidung dar.",
      antwortErklaerungen: {
        a: "Entscheidung A ist im technischen Musterfall fachlich falsch, wird aber nicht als sicherheitskritischer Fehler bewertet.",
        b: "Entscheidung B ist die richtige Lösung. Für diese Antwort werden 10 Punkte vergeben.",
        c: "Entscheidung C ist falsch und wurde im technischen Musterfall ausdrücklich als sicherheitskritisch gekennzeichnet."
      }
    },
    {
      id: "aufgabe-4",
      nummer: 4,
      phaseId: "phase-2",
      typ: "multiple-choice",
      titel: "Testaufgabe 4",
      frage: "Welche Aussagen treffen zu?",
      maxPunkte: 10,
      optionen: [
        { id: "a", text: "Aussage A" },
        { id: "b", text: "Aussage B" },
        { id: "c", text: "Aussage C" }
      ],
      richtigeAntworten: ["a", "b"],
      sicherheitskritisch: false
    },
    {
      id: "aufgabe-5",
      nummer: 5,
      phaseId: "phase-3",
      typ: "single-choice",
      titel: "Testaufgabe 5",
      frage: "Welche Abschlussantwort ist richtig?",
      maxPunkte: 10,
      optionen: [
        { id: "a", text: "Abschluss A" },
        { id: "b", text: "Abschluss B" }
      ],
      richtigeAntworten: ["a"],
      sicherheitskritisch: false
    }
  ]
};
