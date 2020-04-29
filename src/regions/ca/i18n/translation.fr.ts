export default {
  botNameIntro: 'Chloe, ',
  resultsPage: {
    headerTitle: 'COVID-19: Ce que vous devez savoir',
    noResultsMessage: 'Aucun résultat trouvé pour cet URL',
    changeAudienceTitle: "Cela ne s'applique pas à vous ? ",
    changeAudience: 'Obtenez vos informations personnalisées',
    audiencePrefix: "Les informations ci-dessous s'appliquent ",
    lastModified: 'Mise à jour {{date}}',
    feedbackLabel: 'Ceci vous a-t-il aidé?',
    faqInputPlaceholder: 'Saisissez votre question'
  },
  share: {
    viewResults: "Voir votre trousse d'information",
    twitterButton: 'Partager sur Twitter',
    facebookButton: 'Partager sur Facebook',
    twitterShareText:
      'Dernières informations COVID-19 du Gouvernement Canadien %23coronavirus {{url}}',
    CTA: 'Passez le mot, pas le virus.'
  },
  welcomePage: {
    title: 'COVID-19: Ce que vous devez savoir',
    description:
      'Obtenez des informations fiables et personnalisées auprès de sources médicales canadiennes crédibles concernant le COVID-19.',
    button: 'Démarrer',
    previousRunLink:
      'Voir les informations les plus récentes pour votre dernière session',
    previousRunExpired:
      'Les réponses de votre dernière session ont expiré. Veuillez lancer une nouvelle conversation pour obtenir les informations les plus récentes.'
  },
  rasaChatWidget: {
    subtitle: 'COVID-19',
    inputTextFieldHint: 'Saisissez un message…'
  },
  classes: {
    common: 'à tous les Canadiens',
    'ca-qc': 'aux résidents du Québec',
    'ca-ab': "aux résidents de l'Alberta",
    'ca-on': "aux résidents de l'Ontario",
    'ca-ns': 'aux résidents de la Nouvelle-Écosse',
    'ca-nb': 'aux résidents du Nouveau-Brunswick',
    'ca-mb': 'aux résidents du Manitoba',
    'ca-bc': 'aux résidents de la Colombie-Britannique',
    'ca-sk': 'aux résidents de la Saskatchewan',
    'ca-pe': "aux résidents de l'Île-du-Prince-Édouard",
    'ca-yt': 'aux résidents du Yukon',
    'ca-nt': 'aux résidents des Territoires du Nord-Ouest',
    'ca-nl': 'aux résidents de Terre-Neuve-et-Labrador',
    'ca-nu': 'aux résidents du Nuvavut',
    'travel-plans': 'aux personnes avec des voyages prévus',
    'elevated-medical-risk':
      'aux personnes présentant un risque accru de complications',
    'elevated-covid-risk':
      "aux personnes présentant un risque accru d'infection",
    faq: 'à tous.'
  },
  footer: {
    bottomText:
      "© 2020 Dialogue. Ce site utilise des cookies à des fins d'analyse. En continuant à utiliser ce site, vous acceptez cette utilisation.",
    aboutHeader: 'À propos',
    aboutMenu: [
      ['À propos de ce site', 'https://github.com/dialoguemd/covid-19/wiki'],
      ['Projet GitHub', 'https://github.com/dialoguemd/covid-19'],
      ['Dialogue', 'https://dialogue.co/fr'],
      [
        'Ressources pour organisations canadiennes',
        'https://www.dialogue.co/?hs_preview=noJtvihk-26668052747'
      ],
      ['Contacter Dialogue', 'https://www.dialogue.co/fr/nous-joindre/'],
      ['Poser une question COVID-19.', 'https://covid19.dialogue.co/#/info']
    ],
    adminAreaHeader: 'Pour les résidents de provinces',
    adminAreaMenu: [
      ['Québec', 'ca-qc'],
      ['Alberta', 'ca-ab'],
      ['Ontario', 'ca-on'],
      ['Nouvelle-Écosse', 'ca-ns'],
      ['Nouveau-Brunswick', 'ca-nb'],
      ['Manitoba', 'ca-mb'],
      ['Colombie-Britannique', 'ca-bc'],
      ['Saskatchewan', 'ca-sk'],
      ['Île-du-Prince-Édouard', 'ca-pe'],
      ['Yukon', 'ca-yt'],
      ['Territoires du Nord-Ouest', 'ca-nt'],
      ['Terre-Neuve et Labrador', 'ca-nl'],
      ['Nuvavut', 'ca-nu']
    ],
    classHeader: 'Pour les Canadiens',
    classMenu: [
      ['Informations générales', 'common'],
      [
        "Personnes présentant un risque accru d'infection",
        'elevated-covid-risk'
      ],
      [
        'Personnes présentant un risque accru de complications',
        'elevated-medical-risk'
      ],
      ['Personnes avec des voyages prévus', 'travel-plans'],
      ['Foire aux questions', 'faq']
    ]
  }
}
