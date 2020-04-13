export default {
  resultsPage: {
    headerTitle: 'COVID-19: Was Sie wissen müssen',
    noResultsMessage: 'Keine Ergebnisse gefunden.',
    changeAudienceTitle: 'Treffen die Informationen nicht auf Sie zu?',
    changeAudience: 'Chatbot erneut starten',
    audiencePrefix: 'Die folgenden Informationen gelten für:',
    lastModified: 'Aktualisiert {{date}}',
    feedbackLabel: 'War das nützlich?'
  },
  share: {
    viewResults: 'Informationspaket anzeigen',
    twitterButton: 'Auf Twitter teilen',
    facebookButton: 'Auf Facebook teilen',
    twitterShareText:
      'Neueste COVID-19-Informationen der deutschen Regierung %23coronavirus {{url}}',
    CTA: 'Verbreiten Sie die Information, nicht den Virus'
  },
  welcomePage: {
    title: 'COVID-19: Was Sie wissen müssen',
    description:
      'Hier erhalten Sie für Sie persönlich relevante Informationen aus öffentlichen, vertrauenswürdigen Quellen über die Atemwegserkrankung COVID-19.',
    button: 'START',
    previousRunLink: 'Neueste Informationen für Ihre letzte Sitzung anzeigen',
    previousRunExpired:
      'Die Antworten aus der letzten Sitzung sind abgelaufen. Bitte starten Sie einen neuen Chat, um aktuelle Informationen zu erhalten.'
  },
  rasaChatWidget: {
    subtitle: 'COVID-19'
  },
  classes: {
    common: 'Allgemeine Informationen',
    de: 'Personen jeder deutschen Region',
    'travel-plans': 'Personen mit bevorstehender Reise',
    'elevated-medical-risk': 'Personen die einer Risikogruppe zugehören',
    'elevated-covid-risk': 'Personen mit einem erhöhten Infektionsrisiko'
  },
  footer: {
    bottomText:
      '© 2020 Dialogue. Diese Website verwendet Cookies für Analysen. Wenn Sie diese Website weiterhin nutzen, stimmen Sie dieser Nutzung zu.',
    aboutHeader: 'Über',
    aboutMenu: [
      ['Über uns', 'https://github.com/dialoguemd/covid-19/wiki'],
      ['GitHub Project', 'https://github.com/dialoguemd/covid-19'],
      ['Dialogue', 'https://www.dialogue.co/en'],
      ['Kontakt', 'hhttps://www.dialogue.co/en/contact-us']
    ],
    adminAreaHeader: 'Regionale Informationen',
    adminAreaMenu: [],
    classHeader: 'Für alle in Deutschland ansässigen Personen',
    classMenu: [
      ['Allgemeine Informationen', 'common'],
      ['Personen mit einem erhöhten Infektionsrisiko', 'elevated-covid-risk'],
      ['Risikogruppen', 'elevated-medical-risk'],
      ['Reisende und Personen mit Reiseabsichten', 'travel-plans']
    ]
  }
}
