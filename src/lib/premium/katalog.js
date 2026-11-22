// PraxisMFA: Zentraler Premiumkatalog
// Enthält die 16 bestätigten Premiumlektionen.
// Diese Datei regelt noch keine Zugriffsberechtigung.

export const premiumLektionen = [
  {
    lernwelt: "Hygiene & Infektionsschutz",
    nummer: 16,
    titel: "Meldepflichtige Infektionskrankheiten und Umgang in der Praxis",
    url: "/lernen/hygiene-infektionsschutz/meldepflichtige-infektionskrankheiten-und-umgang-in-der-praxis/"
  },
  {
    lernwelt: "Hygiene & Infektionsschutz",
    nummer: 17,
    titel: "Impfungen und Immunisierung als Infektionsschutz",
    url: "/lernen/hygiene-infektionsschutz/impfungen-und-immunisierung-als-infektionsschutz/"
  },
  {
    lernwelt: "Hygiene & Infektionsschutz",
    nummer: 18,
    titel: "Praxissituationen für MFA: Hygiene & Infektionsschutz",
    url: "/lernen/hygiene-infektionsschutz/praxissituationen-hygiene-infektionsschutz/"
  },
  {
    lernwelt: "Vitalzeichen & Diagnostik",
    nummer: 12,
    titel: "Praxissituationen für MFA: Vitalzeichen & Diagnostik",
    url: "/lernen/vitalzeichen-diagnostik/praxissituationen-vitalzeichen-diagnostik/"
  },
  {
    lernwelt: "Notfälle",
    nummer: 3,
    titel: "Notfallmanagement und Aufgabenverteilung im Praxisteam",
    url: "/lernen/notfaelle/notfallmanagement-und-aufgabenverteilung-im-praxisteam/"
  },
  {
    lernwelt: "Notfälle",
    nummer: 18,
    titel: "Notfallausstattung und Notfallmedikamente",
    url: "/lernen/notfaelle/notfallausstattung-und-notfallmedikamente/"
  },
  {
    lernwelt: "Notfälle",
    nummer: 19,
    titel: "Notfalldokumentation und Nachbereitung",
    url: "/lernen/notfaelle/notfalldokumentation-und-nachbereitung/"
  },
  {
    lernwelt: "Notfälle",
    nummer: 20,
    titel: "Praxissituationen und Prüfungsfälle zu Notfällen",
    url: "/lernen/notfaelle/praxissituationen-und-pruefungsfaelle-zu-notfaellen/"
  },
  {
    lernwelt: "Wunden & chirurgische Eingriffe",
    nummer: 17,
    titel: "Instrumente und OP-Arbeitsplatz vorbereiten",
    url: "/lernen/wunden-chirurgische-eingriffe/instrumente-und-op-arbeitsplatz-vorbereiten/"
  },
  {
    lernwelt: "Wunden & chirurgische Eingriffe",
    nummer: 18,
    titel: "Assistenz bei ambulanten chirurgischen Eingriffen",
    url: "/lernen/wunden-chirurgische-eingriffe/assistenz-bei-ambulanten-chirurgischen-eingriffen/"
  },
  {
    lernwelt: "Wunden & chirurgische Eingriffe",
    nummer: 19,
    titel: "Wunddokumentation und Qualitätssicherung",
    url: "/lernen/wunden-chirurgische-eingriffe/wunddokumentation-und-qualitaetssicherung/"
  },
  {
    lernwelt: "Wunden & chirurgische Eingriffe",
    nummer: 20,
    titel: "Praxisfälle und Prüfungstraining zur Wundversorgung",
    url: "/lernen/wunden-chirurgische-eingriffe/praxissituationen-und-pruefungsfaelle/"
  },
  {
    lernwelt: "Praxisorganisation, Recht & Abrechnung",
    nummer: 5,
    titel: "Praxismanagement: Komplexe Organisationsfälle",
    url: "/lernen/praxisorganisation-recht-abrechnung/praxismanagement-komplexe-organisationsfaelle/"
  },
  {
    lernwelt: "Praxisorganisation, Recht & Abrechnung",
    nummer: 10,
    titel: "Rechtliche Konfliktfälle in der Arztpraxis",
    url: "/lernen/praxisorganisation-recht-abrechnung/rechtliche-konfliktfaelle-in-der-arztpraxis/"
  },
  {
    lernwelt: "Praxisorganisation, Recht & Abrechnung",
    nummer: 18,
    titel: "Wirtschaftliche Entscheidungen in der Arztpraxis",
    url: "/lernen/praxisorganisation-recht-abrechnung/wirtschaftliche-entscheidungen-in-der-arztpraxis/"
  },
  {
    lernwelt: "Praxisorganisation, Recht & Abrechnung",
    nummer: 23,
    titel: "Komplexe Abrechnungsfälle mit EBM und GOÄ",
    url: "/lernen/praxisorganisation-recht-abrechnung/komplexe-abrechnungsfaelle-mit-ebm-und-goae/"
  }
];

export const premiumAnzahl = premiumLektionen.length;

export function istPremiumLektion(url) {
  const normalisiert = "/" + String(url || "")
    .split("?")[0]
    .split("#")[0]
    .replace(/^\/+|\/+$/g, "") + "/";

  return premiumLektionen.some(
    (lektion) => lektion.url === normalisiert
  );
}
