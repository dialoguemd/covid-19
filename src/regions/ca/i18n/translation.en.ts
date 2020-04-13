export default {
  botNameIntro: 'Chloe, ',
  resultsPage: {
    headerTitle: 'COVID-19: What you need to know',
    noResultsMessage: 'No results provided in URL.',
    changeAudienceTitle: 'Doesn’t apply to you?',
    changeAudience: 'Get personalized info',
    audiencePrefix: 'Information below applies to:',
    lastModified: 'Updated {{date}}',
    feedbackLabel: 'Was this useful?',
    faqInputPlaceholder: 'Enter your question'
  },
  share: {
    viewResults: 'View information package',
    twitterButton: 'Share on Twitter',
    facebookButton: 'Share on Facebook',
    twitterShareText:
      'Latest COVID-19 info from Canadian Government %23coronavirus {{url}}',
    CTA: 'Spread the word, not the virus.'
  },
  welcomePage: {
    title: 'COVID-19: What you need to know',
    description:
      'Get accurate and personalized information from trusted Canadian medical sources regarding COVID-19.',
    previousRunLink: 'View latest info for your last session',
    previousRunExpired:
      'Answers from last session have expired. Please start new chat to get latest information.',
    button: 'Get Started'
  },
  rasaChatWidget: {
    subtitle: 'COVID-19'
  },
  classes: {
    common: 'all Canadians',
    'ca-qc': 'residents of Quebec',
    'ca-ab': 'residents of Alberta',
    'ca-on': 'residents of Ontario',
    'ca-ns': 'residents of Nova Scotia',
    'ca-nb': 'residents of New Brunswick',
    'ca-mb': 'residents of Manitoba',
    'ca-bc': 'residents of British Columbia',
    'ca-sk': 'residents of Saskatchewan',
    'ca-pe': 'residents of Prince Edward Island',
    'ca-yt': 'residents of Yukon',
    'ca-nt': 'residents of Northern Territories',
    'ca-nl': 'residents of Newfoundland and Labrador',
    'ca-nu': 'residents of Nuvavut',
    'travel-plans': 'people with travel plans',
    'elevated-medical-risk': 'people with an increased risk of complications',
    'elevated-covid-risk': 'people with an increased risk of infection',
    faq: ' everyone.'
  },
  footer: {
    bottomText:
      '© 2020 Dialogue. This site uses cookies for analytics. By continuing to use this site, you agree to this use.',
    aboutHeader: 'About',
    aboutMenu: [
      ['About this site', 'https://github.com/dialoguemd/covid-19/wiki'],
      ['GitHub Project', 'https://github.com/dialoguemd/covid-19'],
      ['Dialogue', 'https://dialogue.co/en'],
      [
        'Resources for Canadian Organizations',
        'https://www.dialogue.co/?hs_preview=noJtvihk-26668052747'
      ],
      ['Contact Dialogue', 'https://www.dialogue.co/en/contact-us/'],
      [
        'Help build AI. Ask a COVID-19 question.',
        'https://covid19.dialogue.co/#/info'
      ]
    ],
    adminAreaHeader: 'For Provincial Residents',
    adminAreaMenu: [
      ['Quebec', 'ca-qc'],
      ['Alberta', 'ca-ab'],
      ['Ontario', 'ca-on'],
      ['Nova Scotia', 'ca-ns'],
      ['New Brunswick', 'ca-nb'],
      ['Manitoba', 'ca-mb'],
      ['British Columbia', 'ca-bc'],
      ['Saskatchewan', 'ca-sk'],
      ['Prince Edward Island', 'ca-pe'],
      ['Yukon', 'ca-yt'],
      ['Northern Territories', 'ca-nt'],
      ['Newfoundland and Labrador', 'ca-nl'],
      ['Nuvavut', 'ca-nu']
    ],
    classHeader: 'For Canadians',
    classMenu: [
      ['General information', 'common'],
      ['People with an increased risk of infection', 'elevated-covid-risk'],
      [
        'People with an increased risk of complications',
        'elevated-medical-risk'
      ],
      ['People with travel plans', 'travel-plans'],
      ['Frequently Asked Questions', 'faq']
    ]
  }
}
