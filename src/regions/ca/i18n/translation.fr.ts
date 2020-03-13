export default {
  resultsPage: {
    headerTitle: 'COVID-19: Ce que vous devez savoir',
    noResultsMessage: 'Aucun résultat trouvé pour cet URL',
    changeAudienceTitle: "Cela ne s'applique pas à vous ? ",
    changeAudience: 'Obtenez vos informations personnalisées',
    audiencePrefix: "Les informations ci-dessous s'appliquent "
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
    button: 'Démarrer'
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
      "aux personnes présentant un risque accru d'infection"
  },
  footer: {
    aboutHeader: 'À propos',
    aboutMenu: [
      ['À propos de ce site', 'https://github.com/dialoguemd/covid-19/wiki'],
      ['Projet GitHub', 'https://github.com/dialoguemd/covid-19'],
      ['Dialogue', 'https://dialogue.co/fr'],
      [
        'Ressources pour organisations canadiennes',
        'https://www.dialogue.co/?hs_preview=noJtvihk-26668052747'
      ],
      ['Contacter Dialogue', 'https://www.dialogue.co/fr/nous-joindre/']
    ],
    adminAreaHeader: 'Pour les résidents de provinces',
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
      ['Personnes avec des voyages prévus', 'travel-plans']
    ]
  },
  provinces: {
    QC: 'Québec',
    AB: 'Alberta',
    ON: 'Ontario',
    NS: 'Nouvelle-Écosse',
    NB: 'Nouveau-Brunswick',
    MB: 'Manitoba',
    BC: 'Colombie-Britannique',
    SK: 'Saskatchewan',
    PE: 'Île-du-Prince-Édouard',
    YT: 'Yukon',
    NT: 'Territoires du Nord-Ouest',
    NL: 'Terre-Neuve et Labrador',
    NU: 'Nuvavut'
  }
}
