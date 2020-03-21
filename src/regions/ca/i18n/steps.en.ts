export default {
  intro1: 'Hi there!',
  intro2:
    "I'm Chloe, an automated medical assistant. I’m here to give you accurate information about COVID-19. To make it relevant to your situation, I'd like to ask you a few questions. It should not take more than a few minutes.",
  intro3:
    "Please note that the information you'll receive is not a medical assessment. If you are experiencing severe symptoms, seek medical attention. This service is not a substitute for consulting with your doctor. The information we supply is from publicly available sources and is subject to frequent change.",
  'intro-option1': "Ok, let's get started!",
  'askForLocationOptions-QC': 'Quebec',
  'askForLocationOptions-AB': 'Alberta',
  'askForLocationOptions-ON': 'Ontario',
  'askForLocationOptions-NS': 'Nova Scotia',
  'askForLocationOptions-NB': 'New Brunswick',
  'askForLocationOptions-MB': 'Manitoba',
  'askForLocationOptions-BC': 'British Columbia',
  'askForLocationOptions-SK': 'Saskatchewan',
  'askForLocationOptions-PE': 'Prince Edward Island',
  'askForLocationOptions-YT': 'Yukon',
  'askForLocationOptions-NT': 'Northern Territories',
  'askForLocationOptions-NL': 'Newfoundland and Labrador',
  'askForLocationOptions-NU': 'Nuvavut',
  'askHasHadContactOptions-Option1': 'Yes, some of this applies to me',
  'askHasImmuneDecreasedOptions-Option1': 'Yes, some of this applies to me',
  'askHasImmuneDecreased2Options-Option1': 'Yes, I am',
  'askHasImmuneDecreasedOptions-Option2': 'No, nothing applies to me',
  yes: 'Yes',
  no: 'No',
  askForLocation: 'In which province or territory are you currently located?',
  askForLocationInfo:
    'I will be able to tailor the information so that it applies to your region.',
  askHasHadContact: `
  Have you been in **close contact** with a confirmed or probable case of COVID-19?`,
  askHasHadContactInfo: `
  By **close contact** I mean **any** of the following:

  - Healthcare-associated exposure, like providing care for infected patients, visiting, or staying with them in the same close environment
  - Working in close proximity or sharing the same classroom with an infected person
  - Travelling with an infected person
  - Living in the same household as an infected person
  `,
  askOptionUnsure: `I don't know`,
  askAgeRange: `Are you older than 65?`,
  askHasFever: `Do you have a fever?`,
  askHasCough: `Do you have a cough?`,
  askHasDifficultyBreathing: `Do you have difficulty breathing?`,
  askTraveledAffectedAreas: `
  Have you traveled internationally in the past 14 days`,
  askHasImmuneDecreased: `Now I'd like to ask you a few questions to find out if your immunity is decreased.`,
  askHasImmuneDecreasedInfo: `
  Do **any** of these apply to you?

  - Do you have a history of diabetes?
  - Do you take immune suppresion medication such as Prednisone or any other steroid?
  - Do you have an autoimmune disease such as lupus, rheumatoid arthritis or Crohn's disease?
  - Do you have a history of cancer?
  - Do you have HIV/AIDS?
  - Do you have chronic kidney or liver disease?
  - Are you currently on medications after an organ transplant?
  - Has a doctor told you that your immune system is compromised?`,
  askHasImmuneDecreased2: `Are you taking any medications that a doctor has said may cause a weakened immune system?  `,
  askHasChronicLungDisease: `Do you have a history of chronic lung disease?`,
  askHasChronicLungDiseaseInfo: `
  Not sure? Answer yes if you have a history of **any** of the following:

  - Asthma
  - Chronic obstructive pulmonary disease (COPD) or emphysema
  - Chronic bronchitis
  - Any chronic lung disease not listed above`,
  askHasTravelPlans: `
  Are you planning on travelling outside of Canada in the next month?`,
  outro1: `
  We're done with the questions! Your personal information package is ready.
  `,
  'assessment-AB': `
  Worried about COVID-19 symptoms?

  Use this self-assessment tool developed by the Government of Alberta to help determine whether you should be tested for COVID-19. You can complete this assessment for yourself or on behalf of someone else, if they are not able.

  Take the self-assessment tool developed by the Government of Alberta [here.](https://myhealth.alberta.ca/journey/covid-19/Pages/COVID-Self-Assessment.aspx)`,
  'assessment-BC': `
  Worried about COVID-19 symptoms?

  The BC Ministry of Health developed a self-assessment tool that will help determine whether you may need further assessment or testing for COVID-19. You can complete this assessment for yourself, or on behalf of someone else, if they are unable to.

  Take the assessment developed by the BC Ministry of Health [here.](https://covid19.thrive.health)
  `,
  'assessment-ON': `
  Worried about COVID-19 symptoms?

  If you think you have 2019 novel coronavirus (COVID-19) symptoms or have been in close contact with someone who has it, the Government of Ontario has developed a self-assessment tool to help determine if you need to seek further care.

  Take the assessment developed by the Government of Ontario [here.](https://www.ontario.ca/page/2019-novel-coronavirus-covid-19-self-assessment)
  `,
  'assessment-continue': `
  I can also provide you helpful and timely information about COVID-19. Would you like to continue?`,
  outro2: `
  All good! Thank you for visting this website.

  Remember that you can always come back to obtain your personalized information package about COVID-19.
  `,
  continue: 'Continue',
  faq: {
    utterAskHasAdditionalQuestion: `
    We are soliciting questions related to the COVID-19.
    These questions will be used to help us refine and augment the information on the pandemic.
    Please type your question.

    Your help is needed and greatly appreciated.
    `,
    utterAskForQuestion: `Please enter a question`,
    utterQuestionAsked: `
    Thank you for your question!

    Do you have another question?
    `,
    utterNoQuestion: `Thank you for the feedback!`
  }
}
