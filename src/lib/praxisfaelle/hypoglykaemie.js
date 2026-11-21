export const hypoglykaemie = {
  id: "hypoglykaemie-02",

  titel: "Wiederkehrende Hypoglykämie",

  beschreibung:
    "Ein interaktiver Praxisfall zur sicheren Versorgung einer Patientin mit wiederkehrenden Unterzuckerungen unter Glimepirid.",

  patient: {
    name: "Frau Berger",
    alter: 67,
    situation:
      "Frau Berger, 67 Jahre, kommt zur geplanten Diabeteskontrolle in die Hausarztpraxis. Sie hat Diabetes mellitus Typ 2 und berichtet, morgens ihre Medikamente eingenommen, aber kaum gefrühstückt zu haben. Bereits bei der Anmeldung fallen Zittern, Schwitzen und Blässe auf."
  },

  phasen: [
    {
      id: "phase-1",
      titel: "Ersteinschätzung",
      start: 1,
      ende: 5
    },
    {
      id: "phase-2",
      titel: "Behandlung und Verlauf",
      start: 6,
      ende: 10
    },
    {
      id: "phase-3",
      titel: "Patientensicherheit und Übergabe",
      start: 11,
      ende: 15
    }
  ],

  aufgaben: [
{
    "id": "aufgabe-1",
    "nummer": 1,
    "phaseId": "phase-1",
    "typ": "multiple-choice",
    "titel": "Ersteinschätzung und Sofortmaßnahmen",
    "uhrzeit": "09:10 Uhr, Hausarztpraxis",
    "situation": "Frau Berger, 67 Jahre, erscheint zur geplanten Diabeteskontrolle. Sie wirkt blass und angespannt. Während der Anmeldung bemerkt die MFA, dass ihre Hände zittern und sie an der Stirn schwitzt.\n\nAuf Nachfrage berichtet Frau Berger: „Ich habe heute Morgen meine Tabletten genommen, aber kaum etwas gegessen.“\n\nSie ist wach, antwortet verständlich und kann selbstständig sitzen.",
    "frage": "Welche Maßnahmen sind in dieser Situation richtig?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Frau Berger unmittelbar ansprechen, ihren Zustand einschätzen und bei ihr bleiben."
        },
        {
            "id": "b",
            "text": "Ärztliche Unterstützung organisieren und eine zeitnahe Blutzuckermessung veranlassen."
        },
        {
            "id": "c",
            "text": "Die Patientin zunächst allein im Wartezimmer sitzen lassen, da sie noch ansprechbar ist."
        },
        {
            "id": "d",
            "text": "Bewusstseinslage und sichere Schluckfähigkeit beurteilen."
        },
        {
            "id": "e",
            "text": "Die geplante Routineuntersuchung ohne weitere Abklärung fortsetzen."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "d"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "c"
    ],
    "erklaerung": "Die Symptome können auf eine Hypoglykämie hinweisen. Die MFA muss den Zustand unmittelbar einschätzen, bei der Patientin bleiben, ärztliche Unterstützung organisieren und eine zeitnahe Blutzuckermessung veranlassen. Auch Bewusstseinslage und Schluckfähigkeit sind zu beurteilen."
},
{
    "id": "aufgabe-2",
    "nummer": 2,
    "phaseId": "phase-1",
    "typ": "single-choice",
    "titel": "Sichere Schluckfähigkeit beurteilen",
    "uhrzeit": "09:12 Uhr, Hausarztpraxis",
    "situation": "Frau Berger sitzt inzwischen in einem Behandlungsraum. Eine Kollegin hat die Ärztin informiert.\n\nDie Patientin ist wach, kann ihren Namen und den heutigen Termin nennen. Sie wirkt weiterhin zittrig und kaltschweißig.\n\nAuf die Frage, ob sie etwas trinken könne, antwortet sie: „Ja, natürlich.“\n\nDie MFA muss nun beurteilen, ob eine orale Behandlung sicher möglich ist.",
    "frage": "Welche Einschätzung ist fachlich richtig?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Die Patientin sagt, dass sie trinken kann. Damit ist ihre Schluckfähigkeit ausreichend geprüft."
        },
        {
            "id": "b",
            "text": "Die MFA beurteilt Bewusstseinslage, Kooperationsfähigkeit und Hinweise auf Schluckstörungen. Nur bei sicherer Schluckfähigkeit kommt eine orale Gabe infrage."
        },
        {
            "id": "c",
            "text": "Bei jeder vermuteten Hypoglykämie ist die orale Gabe von Traubenzucker grundsätzlich verboten."
        },
        {
            "id": "d",
            "text": "Die Patientin erhält vorsorglich sofort ein Getränk, unabhängig davon, ob sie zuverlässig schlucken kann."
        }
    ],
    "richtigeAntworten": [
        "b"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "d"
    ],
    "erklaerung": "Die Aussage „Ich kann trinken“ reicht allein nicht aus. Entscheidend ist, ob die Patientin ausreichend wach, kooperativ und tatsächlich sicher schluckfähig ist. Bei Unsicherheit darf nichts oral verabreicht werden."
},
{
    "id": "aufgabe-3",
    "nummer": 3,
    "phaseId": "phase-1",
    "typ": "multiple-choice",
    "titel": "Medikamentenanamnese und Risikofaktoren",
    "uhrzeit": "09:13 Uhr, Hausarztpraxis",
    "situation": "Frau Berger ist weiterhin wach und ansprechbar. Die Ärztin ist informiert, die Blutzuckermessung wird vorbereitet.\n\nFrau Berger berichtet: „Ich nehme morgens eine Tablette Glimepirid. Heute habe ich sie wie immer genommen. Zum Frühstück gab es aber nur ein paar Schlucke Kaffee.“\n\nDie MFA möchte die für die akute Versorgung wichtigen Informationen erfassen, ohne die Behandlung zu verzögern.",
    "frage": "Welche Angaben sind jetzt besonders wichtig für die Medikamentenanamnese und Risikoeinschätzung?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Die genaue Glimepirid-Dosis und den Zeitpunkt der letzten Einnahme erfragen."
        },
        {
            "id": "b",
            "text": "Erfragen, wann und wie viel die Patientin zuletzt gegessen hat."
        },
        {
            "id": "c",
            "text": "Nach weiteren Diabetesmedikamenten, insbesondere Insulin, und möglichen Einnahmefehlern fragen."
        },
        {
            "id": "d",
            "text": "Zunächst sämtliche Medikamente für die kommenden Wochen eigenständig absetzen."
        },
        {
            "id": "e",
            "text": "Nach früheren Unterzuckerungen und auffälligen Beschwerden in den vergangenen Tagen fragen."
        },
        {
            "id": "f",
            "text": "Die Medikamentenanamnese vollständig zurückstellen, weil Arzneimittel für die aktuelle Situation keine Rolle spielen."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "c",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "d"
    ],
    "erklaerung": "Glimepirid kann bei geringer Nahrungsaufnahme eine Hypoglykämie begünstigen. Dosierung, Einnahmezeitpunkt, weitere Diabetesmedikamente, Nahrungsaufnahme und frühere Unterzuckerungen sind wichtige Informationen. Die MFA darf Medikamente nicht eigenmächtig absetzen."
},
{
    "id": "aufgabe-4",
    "nummer": 4,
    "phaseId": "phase-1",
    "typ": "single-choice",
    "titel": "Blutzuckerwert von 52 mg/dl beurteilen",
    "uhrzeit": "09:14 Uhr, Hausarztpraxis",
    "situation": "Die MFA hat bei Frau Berger eine kapilläre Blutzuckermessung durchgeführt. Die Patientin ist weiterhin wach und ansprechbar, schwitzt jedoch deutlich und klagt über Zittern und Schwäche.\n\nDie Ärztin ist informiert und steht für die weitere Behandlung zur Verfügung.",
    "frage": "Wie muss die MFA diesen Messwert im Zusammenhang mit den Beschwerden beurteilen?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "52 mg/dl ist bei einer älteren Patientin mit Diabetes ein akzeptabler Wert. Eine weitere Behandlung ist nicht erforderlich."
        },
        {
            "id": "b",
            "text": "Der Wert liegt unter 54 mg/dl und entspricht einer klinisch bedeutsamen Hypoglykämie. Zusammen mit den Symptomen erfordert er unverzügliches Handeln."
        },
        {
            "id": "c",
            "text": "Eine Hypoglykämie liegt erst bei einem Blutzuckerwert unter 40 mg/dl vor. Deshalb reicht es aus, in einer Stunde erneut zu messen."
        },
        {
            "id": "d",
            "text": "Die MFA sollte den Messwert ignorieren und vorsorglich Insulin verabreichen, um den Stoffwechsel zu stabilisieren."
        }
    ],
    "richtigeAntworten": [
        "b"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "a",
        "c",
        "d"
    ],
    "erklaerung": "Ein Blutzuckerwert von 52 mg/dl liegt unter 54 mg/dl und entspricht einer klinisch bedeutsamen Hypoglykämie (Level 2). Zusammen mit Zittern, Schwitzen und Schwäche besteht unmittelbarer Handlungsbedarf. Der klinische Zustand muss zusätzlich beurteilt werden.",
    "zusatzinformationen": "Kapillärer Blutzucker, 09:14 Uhr: 52 mg/dl (≈ 2,9 mmol/l)."
},
{
    "id": "aufgabe-5",
    "nummer": 5,
    "phaseId": "phase-1",
    "typ": "multiple-choice",
    "titel": "Ärztliche Unterstützung und sichere Erstversorgung",
    "uhrzeit": "09:15 Uhr, Hausarztpraxis",
    "situation": "Bei Frau Berger wurde ein Blutzuckerwert von 52 mg/dl gemessen.\n\nSie ist weiterhin wach, orientiert, kooperativ und kann sicher schlucken. Allerdings schwitzt sie stark, ihre Hände zittern und sie fühlt sich zunehmend schwach.\n\nDie Ärztin ist informiert und hat angeordnet, die Hypoglykämie unverzüglich nach dem Praxisnotfallstandard zu behandeln.\n\nEine Kollegin steht zur Unterstützung bereit.",
    "frage": "Welche Maßnahmen gehören jetzt zu einer sicheren Erstversorgung?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Frau Berger betreuen, vor Stürzen schützen und während der Akutversorgung nicht allein lassen."
        },
        {
            "id": "b",
            "text": "Die angeordnete Behandlung nach dem Praxisnotfallstandard vorbereiten und bei sicherer Schluckfähigkeit schnell verfügbare Kohlenhydrate geben."
        },
        {
            "id": "c",
            "text": "Die Kollegin bitten, die erforderliche Verlaufskontrolle einschließlich einer erneuten Blutzuckermessung nach etwa 15 Minuten zu organisieren."
        },
        {
            "id": "d",
            "text": "Frau Berger sofort nach Hause schicken, da sie noch selbstständig sprechen und sitzen kann."
        },
        {
            "id": "e",
            "text": "Den gemessenen Blutzuckerwert mit Einheit und Uhrzeit sowie die eingeleiteten Maßnahmen dokumentieren."
        },
        {
            "id": "f",
            "text": "Ohne ärztliche Anordnung zusätzlich Insulin verabreichen, damit sich der Blutzucker schneller normalisiert."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "c",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "d",
        "f"
    ],
    "erklaerung": "Zur sicheren Erstversorgung gehören kontinuierliche Betreuung, Sturzprophylaxe, die angeordnete Behandlung mit schnell verfügbaren Kohlenhydraten bei sicherer Schluckfähigkeit, eine zeitnahe Verlaufskontrolle und die Dokumentation. Nach der ersten Kohlenhydratgabe muss der Blutzucker nach etwa 15 Minuten erneut kontrolliert werden. Besteht weiterhin eine Hypoglykämie, sind entsprechend dem aktuellen Zustand, dem Praxisnotfallstandard und der ärztlichen Anordnung weitere Behandlungsmaßnahmen erforderlich. Die Überwachung darf nicht allein aufgrund der ersten Kohlenhydratgabe beendet werden. Eine voreilige Entlassung oder zusätzliche Insulingabe wäre gefährlich."
},
{
    "id": "aufgabe-6",
    "nummer": 6,
    "phaseId": "phase-2",
    "typ": "single-choice",
    "titel": "Geeignete Behandlung bei sicherer Schluckfähigkeit",
    "uhrzeit": "09:16 Uhr, Hausarztpraxis",
    "situation": "Frau Berger hat weiterhin einen Blutzuckerwert von 52 mg/dl. Sie ist wach, orientiert, kooperativ und kann sicher schlucken.\n\nDie Ärztin hat die Behandlung mit 15 bis 20 g schnell verfügbaren Kohlenhydraten nach dem Praxisnotfallstandard angeordnet.\n\nAuf dem Behandlungstisch stehen Traubenzucker, ein zuckerhaltiges Getränk, ein Zero-Getränk und ein Schokoriegel.\n\nDie MFA soll die angeordnete Maßnahme jetzt durchführen.",
    "frage": "Welche Vorgehensweise ist in dieser Situation am besten geeignet?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Die angeordnete Menge schnell verfügbarer Kohlenhydrate, beispielsweise Glukose, geben, die Patientin betreuen und den Blutzucker nach etwa 15 Minuten erneut kontrollieren."
        },
        {
            "id": "b",
            "text": "Ein Zero-Getränk geben, da es für Menschen mit Diabetes grundsätzlich besser geeignet ist."
        },
        {
            "id": "c",
            "text": "Einen Schokoriegel als bevorzugte Akutbehandlung geben, da sein Fettgehalt die Zuckeraufnahme besonders beschleunigt."
        },
        {
            "id": "d",
            "text": "Die Kohlenhydratgabe zunächst aufschieben und abwarten, ob der Blutzucker ohne Behandlung wieder steigt."
        }
    ],
    "richtigeAntworten": [
        "a"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "d"
    ],
    "erklaerung": "Bei wacher, kooperativer und sicher schluckfähiger Patientin werden die ärztlich angeordneten schnell verfügbaren Kohlenhydrate gegeben. Anschließend erfolgen Betreuung und zeitnahe Blutzuckerkontrolle. Zero-Getränke enthalten keine geeignete Zuckermenge. Fett kann die Aufnahme von Kohlenhydraten verzögern. Eine notwendige Behandlung darf nicht aufgeschoben werden."
},
{
    "id": "aufgabe-7",
    "nummer": 7,
    "phaseId": "phase-2",
    "typ": "multiple-choice",
    "titel": "Behandlungserfolg kontrollieren und dokumentieren",
    "uhrzeit": "09:31 Uhr, Hausarztpraxis",
    "situation": "Frau Berger hat um 09:16 Uhr entsprechend der ärztlichen Anordnung 20 g schnell verfügbare Kohlenhydrate erhalten.\n\nNach 15 Minuten berichtet sie, dass das Zittern deutlich nachgelassen habe. Sie wirkt wacher und schwitzt kaum noch.\n\nDie MFA führt die geplante Kontrollmessung durch.\n\nDie Ärztin wird über die Besserung informiert. Frau Berger nimmt weiterhin Glimepirid ein, dessen Wirkung noch anhalten kann.",
    "frage": "Welche Maßnahmen sind trotz der aktuellen Besserung erforderlich?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Den Kontrollwert von 108 mg/dl mit Einheit und Uhrzeit sowie die klinische Besserung dokumentieren."
        },
        {
            "id": "b",
            "text": "Die Patientin ohne weitere ärztliche Beurteilung entlassen, weil der Blutzucker jetzt normal ist."
        },
        {
            "id": "c",
            "text": "Die weitere Überwachung und gegebenenfalls erneute Blutzuckerkontrollen mit der Ärztin abstimmen."
        },
        {
            "id": "d",
            "text": "Die Patientin über das mögliche Risiko einer erneuten Unterzuckerung informieren, entsprechend der ärztlichen Vorgabe."
        },
        {
            "id": "e",
            "text": "Die verabreichten Kohlenhydrate, den Behandlungszeitpunkt und den bisherigen Verlauf nachvollziehbar festhalten."
        },
        {
            "id": "f",
            "text": "Die nächste Glimepirid-Dosis eigenständig erhöhen, um weitere Blutzuckerschwankungen zu verhindern."
        }
    ],
    "richtigeAntworten": [
        "a",
        "c",
        "d",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "b",
        "f"
    ],
    "erklaerung": "Der Blutzucker ist auf 108 mg/dl angestiegen und die Beschwerden haben nachgelassen. Dennoch kann die Wirkung von Glimepirid anhalten und erneut eine Hypoglykämie verursachen. Deshalb sind Dokumentation, ärztlich abgestimmte Überwachung und Information über das Rückfallrisiko erforderlich. Eine eigenmächtige Dosisänderung oder Entlassung ist nicht zulässig.",
    "zusatzinformationen": "Blutzuckerverlauf: 09:14 Uhr, 52 mg/dl. 09:31 Uhr, 108 mg/dl."
},
{
    "id": "aufgabe-8",
    "nummer": 8,
    "phaseId": "phase-2",
    "typ": "single-choice",
    "titel": "Entlassungswunsch und Fahrtüchtigkeit",
    "uhrzeit": "09:35 Uhr, Hausarztpraxis",
    "situation": "Frau Berger fühlt sich inzwischen deutlich besser. Das Zittern hat aufgehört, sie ist orientiert und kann wieder normal sprechen.\n\nFrau Berger sagt: „Mir geht es wieder gut. Ich würde jetzt gerne nach Hause fahren. Mein Auto steht direkt vor der Praxis.“\n\nDie Ärztin hat noch keine Entscheidung über die Entlassung getroffen.",
    "frage": "Wie sollte die MFA auf den Wunsch der Patientin reagieren?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Die Patientin kann sofort selbst nach Hause fahren, da der Blutzuckerwert wieder im Normbereich liegt."
        },
        {
            "id": "b",
            "text": "Die Patientin über das mögliche Risiko einer erneuten Hypoglykämie informieren, sie weiter betreuen und unverzüglich die ärztliche Entscheidung über Überwachung, weitere Versorgung und Fahrtüchtigkeit einholen."
        },
        {
            "id": "c",
            "text": "Die Patientin darf gehen, wenn sie schriftlich bestätigt, dass sie sich wieder gesund fühlt. Eine ärztliche Beurteilung ist dann nicht notwendig."
        },
        {
            "id": "d",
            "text": "Frau Berger empfehlen, sich von einem Angehörigen nach Hause fahren zu lassen, ohne zuvor die ärztliche Beurteilung abzuwarten."
        }
    ],
    "richtigeAntworten": [
        "b"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "a",
        "c"
    ],
    "erklaerung": "Ein normalisierter Blutzuckerwert bedeutet unter Glimepirid nicht automatisch Entwarnung. Die MFA informiert über das Rückfallrisiko, betreut die Patientin weiter und holt die ärztliche Beurteilung ein. Die Patientin ist nicht automatisch rechtlich verpflichtet, in der Praxis zu bleiben. Ihre Selbstbestimmung ist zu respektieren.",
    "zusatzinformationen": "Aktueller Blutzucker: 108 mg/dl. Medikament: Glimepirid, heute Morgen eingenommen."
},
{
    "id": "aufgabe-9",
    "nummer": 9,
    "phaseId": "phase-2",
    "typ": "multiple-choice",
    "titel": "Erneute Hypoglykämie erkennen und handeln",
    "uhrzeit": "09:55 Uhr, Hausarztpraxis",
    "situation": "Frau Berger ist nach der ersten Behandlung zur weiteren Überwachung in der Praxis geblieben.\n\nPlötzlich berichtet sie erneut über Zittern und Schwäche. Ihre Stirn ist schweißnass, und sie hat Schwierigkeiten, sich auf das Gespräch zu konzentrieren.\n\nSie ist noch ansprechbar, wirkt aber zunehmend verlangsamt. Ob sie weiterhin sicher schlucken kann, ist nicht geklärt.\n\nDie MFA misst erneut den Blutzucker.\n\nDie Ärztin befindet sich im benachbarten Untersuchungsraum.",
    "frage": "Welche Maßnahmen sind jetzt richtig?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Die Ärztin unverzüglich über die erneute Hypoglykämie und die veränderte Bewusstseinslage informieren."
        },
        {
            "id": "b",
            "text": "Bewusstseinslage, Atmung und sichere Schluckfähigkeit erneut beurteilen und die Patientin nicht allein lassen."
        },
        {
            "id": "c",
            "text": "Der Patientin sofort Saft einflößen, obwohl ihre sichere Schluckfähigkeit noch nicht geklärt ist."
        },
        {
            "id": "d",
            "text": "Die weitere Akutbehandlung entsprechend dem aktuellen Zustand, der ärztlichen Anordnung und dem Praxisnotfallstandard unterstützen."
        },
        {
            "id": "e",
            "text": "Den erneuten Blutzuckerwert, die Symptome und die Uhrzeit dokumentieren und den Verlauf für die Übergabe bereithalten."
        },
        {
            "id": "f",
            "text": "Die erneuten Beschwerden zunächst 30 Minuten beobachten, da der Blutzucker zwischenzeitlich normal war."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "d",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "c",
        "f"
    ],
    "erklaerung": "Die erneute Hypoglykämie und zunehmende Verlangsamung erfordern unverzügliche ärztliche Unterstützung und erneute Beurteilung von Bewusstsein, Atmung und Schluckfähigkeit. Ohne gesicherte Schluckfähigkeit darf nichts oral verabreicht werden. Eine weitere Verschlechterung kann sofortige Notfallmaßnahmen erforderlich machen.",
    "zusatzinformationen": "Blutzuckerverlauf:\n09:14 Uhr: 52 mg/dl\n09:31 Uhr: 108 mg/dl\n09:55 Uhr: 58 mg/dl"
},
{
    "id": "aufgabe-10",
    "nummer": 10,
    "phaseId": "phase-2",
    "typ": "single-choice",
    "titel": "Glimepirid und wiederkehrende Hypoglykämien",
    "uhrzeit": "09:58 Uhr, Hausarztpraxis",
    "situation": "Frau Berger wird wegen der erneuten Hypoglykämie weiterhin ärztlich versorgt und engmaschig überwacht. Ihre sichere Schluckfähigkeit wird erneut beurteilt.\n\nDie Ärztin überprüft die Medikamentenanamnese. Frau Berger hat morgens Glimepirid eingenommen, obwohl sie kaum gefrühstückt hatte.\n\nEine Auszubildende fragt: „Warum ist der Blutzucker wieder gefallen, obwohl wir die Unterzuckerung doch schon behandelt haben?“\n\nDie Ärztin bittet dich, den Zusammenhang zwischen Glimepirid und wiederkehrenden Hypoglykämien zu erklären.",
    "frage": "Welche Erklärung ist medizinisch richtig?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Glimepirid verhindert die Insulinausschüttung. Deshalb kann nach der Behandlung ein plötzlicher Insulinmangel entstehen, der den Blutzucker senkt."
        },
        {
            "id": "b",
            "text": "Glimepirid fördert die Insulinfreisetzung aus den Betazellen der Bauchspeicheldrüse. Seine blutzuckersenkende Wirkung kann länger anhalten als die Wirkung einer einmaligen Kohlenhydratgabe. Deshalb sind erneute Hypoglykämien möglich."
        },
        {
            "id": "c",
            "text": "Nach einer erfolgreichen Kohlenhydratgabe ist die Wirkung von Glimepirid automatisch aufgehoben. Eine erneute Hypoglykämie muss deshalb eine andere Ursache haben."
        },
        {
            "id": "d",
            "text": "Glimepirid erhöht den Blutzucker. Die erneute Unterzuckerung entsteht ausschließlich dadurch, dass die Patientin zu wenig Wasser getrunken hat."
        }
    ],
    "richtigeAntworten": [
        "b"
    ],
    "sicherheitskritisch": false,
    "kritischeAntworten": [],
    "erklaerung": "Glimepirid gehört zu den Sulfonylharnstoffen und fördert die Insulinfreisetzung aus den Betazellen der Bauchspeicheldrüse. Die blutzuckersenkende Wirkung kann länger anhalten als die Wirkung einer einmaligen Kohlenhydratgabe. Wenn eine Patientin nach der Einnahme nur wenig isst, steigt das Risiko einer Hypoglykämie zusätzlich. Deshalb können trotz zunächst erfolgreicher Behandlung erneut Unterzuckerungen auftreten. Eine weitere ärztliche Beurteilung und gegebenenfalls längere medizinische Überwachung sind erforderlich."
},
{
    "id": "aufgabe-11",
    "nummer": 11,
    "phaseId": "phase-3",
    "typ": "multiple-choice",
    "titel": "Sichere Verlegung ins Krankenhaus",
    "uhrzeit": "10:02 Uhr, Hausarztpraxis",
    "situation": "Frau Berger hat innerhalb von 45 Minuten zwei symptomatische Hypoglykämien entwickelt.\n\nDie Ärztin hat die erneute Akutbehandlung eingeleitet. Frau Berger ist derzeit ansprechbar und wird kontinuierlich betreut. Eine weitere Blutzuckerkontrolle steht noch aus.\n\nDie Ärztin erklärt, dass die Wirkung des morgens eingenommenen Glimepirids weiterhin anhalten kann.\n\nSie entscheidet aufgrund der wiederkehrenden Hypoglykämie und der zwischenzeitlichen Bewusstseinsveränderung, eine weitere Überwachung im Krankenhaus zu veranlassen.\n\nDie MFA soll die sichere Weiterbehandlung und Verlegung organisatorisch unterstützen.",
    "frage": "Welche Maßnahmen gehören jetzt zu den Aufgaben der MFA?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Die Patientin bis zur Übergabe weiter betreuen und ihren Bewusstseinszustand sowie die Atmung beobachten."
        },
        {
            "id": "b",
            "text": "Den von der Ärztin festgelegten Transportweg organisieren und bei einer Verschlechterung unverzüglich ärztliche Hilfe beziehungsweise den Rettungsdienst hinzuziehen."
        },
        {
            "id": "c",
            "text": "Die Patientin mit ihrem eigenen Auto ins Krankenhaus fahren lassen, da sie momentan wieder ansprechbar ist."
        },
        {
            "id": "d",
            "text": "Die bisherigen Blutzuckerwerte, Behandlungsmaßnahmen, Uhrzeiten und relevanten Medikamentenangaben für die Übergabe zusammenstellen."
        },
        {
            "id": "e",
            "text": "Angeordnete weitere Blutzuckerkontrollen durchführen und Veränderungen unmittelbar weitergeben."
        },
        {
            "id": "f",
            "text": "Die ärztlich veranlasste Verlegung eigenmächtig absagen, sobald die nächste Blutzuckermessung einen normalen Wert ergibt."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "d",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "c",
        "f"
    ],
    "erklaerung": "Die Ärztin hat die Krankenhausverlegung entschieden. Die MFA unterstützt die Organisation, überwacht die Patientin, führt angeordnete Kontrollen durch und bereitet die Übergabe vor. Eine eigenmächtige Absage der Verlegung oder eine selbstständige Autofahrt trotz Rückfallrisiko gefährdet die Patientensicherheit."
},
{
    "id": "aufgabe-12",
    "nummer": 12,
    "phaseId": "phase-3",
    "typ": "multiple-choice",
    "titel": "Überwachung bis zum Eintreffen des Rettungsdienstes",
    "uhrzeit": "10:07 Uhr, Hausarztpraxis",
    "situation": "Die Ärztin hat aufgrund der wiederkehrenden Hypoglykämie einen Rettungswagentransport zur weiteren Überwachung im Krankenhaus veranlasst.\n\nFrau Berger befindet sich im Behandlungsraum. Sie ist ansprechbar, wirkt jedoch erschöpft und berichtet weiterhin über Schwäche.\n\nDie erneute Akutbehandlung wurde ärztlich durchgeführt beziehungsweise angeordnet. Eine weitere Blutzuckerkontrolle ist geplant.\n\nDer Rettungsdienst wird in wenigen Minuten erwartet. Die Ärztin ist weiterhin in der Praxis erreichbar.\n\nEine Kollegin fragt dich: „Was müssen wir bis zum Eintreffen des Rettungsdienstes besonders beachten?“",
    "frage": "Welche Maßnahmen sind während der Wartezeit richtig?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Frau Berger weiter betreuen, nicht allein lassen und Veränderungen ihrer Ansprechbarkeit und Atmung beobachten."
        },
        {
            "id": "b",
            "text": "Die angeordneten Blutzuckerkontrollen durchführen und auffällige Werte oder klinische Veränderungen sofort der Ärztin mitteilen."
        },
        {
            "id": "c",
            "text": "Die Patientin zur Ablenkung allein auf dem Flur auf und ab gehen lassen, damit ihr Kreislauf wieder in Schwung kommt."
        },
        {
            "id": "d",
            "text": "Bei einer Verschlechterung sofort Hilfe hinzuziehen, die Ärztin informieren und entsprechend dem Zustand notwendige Notfallmaßnahmen einleiten."
        },
        {
            "id": "e",
            "text": "Die Patientin sicher und möglichst bequem lagern, Sturzgefahren vermeiden und die weitere Versorgung vorbereiten."
        },
        {
            "id": "f",
            "text": "Der Patientin unabhängig von ihrem Bewusstseinszustand vorsorglich ein zuckerhaltiges Getränk einflößen."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "d",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "c",
        "f"
    ],
    "erklaerung": "Bis zur Übergabe bleiben Betreuung, Beobachtung von Bewusstsein und Atmung, angeordnete Blutzuckerkontrollen und Sturzprophylaxe notwendig. Bei Verschlechterung muss sofort reagiert werden. Eine orale Gabe ohne sichere Schluckfähigkeit birgt Aspirationsgefahr."
},
{
    "id": "aufgabe-13",
    "nummer": 13,
    "phaseId": "phase-3",
    "typ": "single-choice",
    "titel": "Akute Bewusstseinsverschlechterung",
    "uhrzeit": "10:09 Uhr, Hausarztpraxis",
    "situation": "Frau Berger wartet weiterhin auf den Rettungsdienst. Eine MFA befindet sich bei ihr.\n\nPlötzlich reagiert Frau Berger kaum noch auf Ansprache. Sie öffnet kurz die Augen, kann aber keine verständlichen Antworten geben.\n\nIhre Atmung ist vorhanden und zunächst regelmäßig. Die sichere Schluckfähigkeit ist nicht mehr gegeben.\n\nDie Ärztin befindet sich im benachbarten Behandlungsraum.\n\nAkute Verschlechterung des Bewusstseinszustands.\n\nEine Kollegin fragt: „Was machen wir jetzt zuerst?“",
    "frage": "Welche Maßnahme hat jetzt oberste Priorität?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Frau Berger sofort Traubenzucker in den Mund legen, damit der Blutzucker schnell wieder steigt."
        },
        {
            "id": "b",
            "text": "Sofort Hilfe und die Ärztin hinzurufen, den Rettungsdienst über die akute Verschlechterung informieren lassen, Ansprechbarkeit und Atmung überprüfen und die Patientin entsprechend ihrem Zustand sichern. Keine orale Gabe."
        },
        {
            "id": "c",
            "text": "Zunächst die vollständige Dokumentation abschließen, damit der Rettungsdienst später alle Angaben erhält."
        },
        {
            "id": "d",
            "text": "Frau Berger aufrichten und ihr Wasser einflößen, um die Bewusstseinslage zu verbessern."
        }
    ],
    "richtigeAntworten": [
        "b"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "a",
        "c",
        "d"
    ],
    "erklaerung": "Die akute Bewusstseinsverschlechterung erfordert sofortige Hilfe, erneute Kontrolle von Ansprechbarkeit und Atmung und eine zustandsgerechte Sicherung der Patientin. Ohne sichere Schluckfähigkeit darf nichts oral gegeben werden. Die ärztliche Akutbehandlung erfolgt durch entsprechend befugtes und qualifiziertes Personal."
},
{
    "id": "aufgabe-14",
    "nummer": 14,
    "phaseId": "phase-3",
    "typ": "multiple-choice",
    "titel": "Strukturierte Übergabe an den Rettungsdienst",
    "uhrzeit": "10:13 Uhr, Hausarztpraxis",
    "situation": "Der Rettungsdienst trifft ein. Frau Berger wurde nach ihrer akuten Bewusstseinsverschlechterung unmittelbar durch die Ärztin versorgt.\n\nSie ist inzwischen wieder ansprechbar, wirkt aber weiterhin erschöpft. Die Ärztin übernimmt die medizinische Übergabe. Du sollst den bisherigen Verlauf strukturiert ergänzen.\n\nWeitere ärztliche Maßnahmen und aktuelle Messwerte müssen anhand der tatsächlichen Behandlungsdokumentation ergänzt werden.\n\nBekannt ist außerdem, dass Frau Berger an Diabetes mellitus Typ 2 erkrankt ist, morgens Glimepirid eingenommen und kaum gefrühstückt hat.",
    "frage": "Welche Informationen gehören in eine strukturierte Übergabe an den Rettungsdienst?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Patientenidentität, bekannte Grunderkrankungen und Anlass der Notfallversorgung."
        },
        {
            "id": "b",
            "text": "Die Blutzuckerwerte mit Uhrzeiten, die wiederkehrenden Symptome und die zwischenzeitliche Bewusstseinsverschlechterung."
        },
        {
            "id": "c",
            "text": "Die Medikamentenanamnese, insbesondere Glimepirid, den Einnahmezeitpunkt und die geringe Nahrungsaufnahme, soweit bekannt."
        },
        {
            "id": "d",
            "text": "Nur den letzten normalen Blutzuckerwert nennen, da die vorherigen Werte für den Rettungsdienst nicht mehr relevant sind."
        },
        {
            "id": "e",
            "text": "Die durchgeführten Behandlungen, deren Wirkung, den aktuellen Zustand sowie noch ausstehende oder unbekannte Informationen."
        },
        {
            "id": "f",
            "text": "Nicht dokumentierte Medikamentendosen und Behandlungen schätzen, damit die Übergabe möglichst vollständig wirkt."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "c",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "f"
    ],
    "erklaerung": "Eine strukturierte Übergabe nach ISBAR umfasst Identifikation, Situation, Hintergrund, Einschätzung und weiteres Vorgehen. Der gesamte Verlauf, die Medikamentenanamnese und tatsächlich dokumentierte Maßnahmen sind wichtig. Unbekannte Dosen und Behandlungen dürfen niemals erfunden werden.",
    "zusatzinformationen": "Bisher dokumentierter Verlauf:\n09:14 Uhr: 52 mg/dl, Zittern und Schwitzen\n09:16 Uhr: 20 g schnell verfügbare Kohlenhydrate\n09:31 Uhr: 108 mg/dl, klinische Besserung\n09:55 Uhr: 58 mg/dl, erneute Symptome\n10:09 Uhr: Akute Bewusstseinsverschlechterung"
},
{
    "id": "aufgabe-15",
    "nummer": 15,
    "phaseId": "phase-3",
    "typ": "multiple-choice",
    "titel": "Digitale Notfalldokumentation",
    "uhrzeit": "10:25 Uhr, Hausarztpraxis",
    "situation": "Frau Berger wurde durch den Rettungsdienst zur weiteren Überwachung ins Krankenhaus gebracht.\n\nDie ärztliche Übergabe ist erfolgt. Der Rettungsdienst hat die Patientin übernommen.\n\nDu erhältst den Auftrag, die Notfalldokumentation im digitalen Praxisverwaltungssystem zu vervollständigen.\n\nDie ärztliche Notfallbehandlung und weitere Kontrollwerte müssen anhand der tatsächlichen Aufzeichnungen ergänzt werden.",
    "frage": "Welche Angaben und Vorgehensweisen gehören zu einer fachgerechten Notfalldokumentation?",
    "maxPunkte": 10,
    "optionen": [
        {
            "id": "a",
            "text": "Alle dokumentierten Blutzuckerwerte mit Einheit, Messzeitpunkt und zugehörigen Symptomen nachvollziehbar erfassen."
        },
        {
            "id": "b",
            "text": "Die verabreichten Kohlenhydrate sowie weitere tatsächlich durchgeführte und belegte Behandlungsmaßnahmen einschließlich Zeitpunkten festhalten."
        },
        {
            "id": "c",
            "text": "Die Bewusstseinsverschlechterung, Alarmierung, ärztliche Maßnahmen und Übergabe an den Rettungsdienst dokumentieren, soweit die Angaben verlässlich vorliegen."
        },
        {
            "id": "d",
            "text": "Fehlende Angaben durch plausible Schätzungen ersetzen, damit die Dokumentation vollständig aussieht."
        },
        {
            "id": "e",
            "text": "Die Dokumentation zeitnah, sachlich und nachvollziehbar abschließen. Nachträgliche Ergänzungen müssen als solche erkennbar bleiben."
        },
        {
            "id": "f",
            "text": "Den ersten niedrigen Blutzuckerwert nachträglich löschen, da zwischenzeitlich wieder ein normaler Wert gemessen wurde."
        }
    ],
    "richtigeAntworten": [
        "a",
        "b",
        "c",
        "e"
    ],
    "sicherheitskritisch": true,
    "kritischeAntworten": [
        "d",
        "f"
    ],
    "erklaerung": "Die Notfalldokumentation muss zeitnah, sachlich, vollständig soweit belegbar und zeitlich nachvollziehbar erfolgen. Messwerte, Symptome, Behandlungen und Übergabe sind zu dokumentieren. Nach § 630f BGB müssen Änderungen den ursprünglichen Inhalt und den Änderungszeitpunkt erkennen lassen. Schätzungen als Tatsachen und das Löschen relevanter Einträge sind unzulässig.",
    "zusatzinformationen": "Bekannter Verlauf:\n09:14 Uhr: Blutzucker 52 mg/dl, Zittern, Schwitzen\n09:16 Uhr: 20 g schnell verfügbare Kohlenhydrate\n09:31 Uhr: Blutzucker 108 mg/dl, Besserung\n09:55 Uhr: Blutzucker 58 mg/dl, erneute Beschwerden\n10:09 Uhr: Akute Bewusstseinsverschlechterung\n10:13 Uhr: Rettungsdienst eingetroffen\n10:25 Uhr: Patientin ins Krankenhaus übernommen"
}
  ]
};
