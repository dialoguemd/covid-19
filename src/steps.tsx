import React from 'react'

import { Step } from 'react-simple-chatbot'

import Results from './components/results-bubble'

const intro: Step[] = [
  {
    id: 'intro1',
    message: 'Hi **there!**',
    trigger: 'intro2'
  },
  {
    id: 'intro2',
    message:
      "I'm Chloé, an intelligent medical assistant. I'm here to get you accurate information about COVID-19. To make it relevant to your situation, I'd like to ask you a few questions. It should take not more than a couple of minutes.",
    trigger: 'intro3'
  },
  {
    id: 'intro3',
    message: `
    Note that the information you'll receive is not a medical assessment. This service is not a substitute for consulting with your doctor.

    The information is updated regularely, but some of it may be outdated.
    `,
    trigger: 'intro4'
  },
  {
    id: 'intro4',
    options: [{ label: "OK, let's get started", trigger: 'askForLocation' }]
  }
]

const riskAssessment: Step[] = [
  {
    id: 'askForLocation',
    message: 'In which province are you currently located?',
    trigger: 'askForLocationInfo'
  },
  {
    id: 'askForLocationInfo',
    message:
      'I will be able to tailor the information so that it applies to your region.',
    trigger: 'askForLocationOptions'
  },
  {
    id: 'askForLocationOptions',
    options: [
      {
        label: 'Quebec',
        value: 'QC',
        trigger: 'askAgeRange'
      },
      {
        label: 'Ontario',
        value: 'ON',
        trigger: 'askAgeRange'
      },
      {
        label: 'Nova Scotia',
        value: 'NS',
        trigger: 'askAgeRange'
      },
      {
        label: 'New Brunswick',
        value: 'NB',
        trigger: 'askAgeRange'
      },
      {
        label: 'Manitoba',
        value: 'MB',
        trigger: 'askAgeRange'
      },
      {
        label: 'British Columbia',
        value: 'BC',
        trigger: 'askAgeRange'
      },
      {
        label: 'Prince Edward Island',
        value: 'PE',
        trigger: 'askAgeRange'
      },
      {
        label: 'Saskatchewan',
        value: 'SK',
        trigger: 'askAgeRange'
      },
      {
        label: 'Alberta',
        value: 'AB',
        trigger: 'askAgeRange'
      },
      {
        label: 'Newfoundland and Labrador',
        value: 'NL',
        trigger: 'askAgeRange'
      },
      {
        label: 'Northwest Territories',
        value: 'NT',
        trigger: 'askAgeRange'
      },
      {
        label: 'Yukon',
        value: 'YT',
        trigger: 'askAgeRange'
      },
      {
        label: 'Nunavut',
        value: 'NU',
        trigger: 'askAgeRange'
      }
    ]
  },
  {
    id: 'askHasHadContact',
    message: 'Have you been in contact with anyone infected?',
    trigger: 'askHasHadContactInfo'
  },
  {
    id: 'askHasHadContactInfo',
    message: `
    By "close contact" I mean any of the following:
    - Health-care associated exposure, like providing care for infected patients, visiting or staying with them in the same close environment
    - Working in close proximity or sharing the same classroom with an infected person
    - Traveling with an infected person
    - Living in the same household an infected person.
    `,
    trigger: 'askHasHadContactOptions'
  },
  {
    id: 'askHasHadContactOptions',
    options: [
      {
        label: 'Yes, some of this applies to me',
        value: true,
        trigger: 'askTraveledAffectedAreas'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askTraveledAffectedAreas'
      }
    ]
  },
  {
    id: 'askAgeRange',
    message: 'Are you older than 65?',
    trigger: 'askHasRangeOptions'
  },
  {
    id: 'askHasRangeOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHasFever'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHasFever'
      }
    ]
  },
  {
    id: 'askHasFever',
    message: 'Do you have a fever?',
    trigger: 'askHasFeverInfo'
  },
  {
    id: 'askHasFeverInfo',
    message:
      'For adults, it means oral or armpit temperature above 37.6°C (99.7°F) or higher. For children, it means armpit temperature is 37.6°C (99.7°F) or higher or rectal temperature is 38°C (100.4°F) or higher.',
    trigger: 'askHasFeverOptions'
  },
  {
    id: 'askHasFeverOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHasCough'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHasCough'
      }
    ]
  },
  {
    id: 'askHasCough',
    message: 'Do you have a cough?',
    trigger: 'askHasCoughOptions'
  },
  {
    id: 'askHasCoughOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHasDifficultyBreathing'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHasDifficultyBreathing'
      }
    ]
  },

  {
    id: 'askHasDifficultyBreathing',
    message: 'Do you have difficulty breathing?',
    trigger: 'askHasDifficultyBreathingOptions'
  },
  {
    id: 'askHasDifficultyBreathingOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'outro1'
      },
      {
        label: 'No',
        value: false,
        trigger: 'outro1'
      }
    ]
  },
  {
    id: 'askHasDifficultyBreathing',
    message: 'Do you have difficulty breathing?',
    trigger: 'askHasDifficultyBreathingOptions'
  },
  {
    id: 'askHasDifficultyBreathingOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHasHadContact'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHasHadContact'
      }
    ]
  },
  {
    id: 'askTraveledAffectedAreas',
    message:
      'Have you traveled to any of these areas in the past 14 days: Mainland China, Hong Kong, Iran, Italy, Japan, South Korea, Singapore',
    trigger: 'askTraveledAffectedAreasOptions'
  },
  {
    id: 'askTraveledAffectedAreasOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHasImmuneDecreased'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHasImmuneDecreased'
      }
    ]
  },
  {
    id: 'askHasImmuneDecreased',
    message:
      "Now I'd like to ask you a few questions to find out if your immunity is decreased.",
    trigger: 'askHasImmuneDecreasedInfo'
  },
  {
    id: 'askHasImmuneDecreasedInfo',
    message:
      'Do you have a history of diabetes? Do you take long-term oral steroids? Do you have an autoimmune disease such as lupus or rheumatoid arthritis? Do you have a history of cancer? Do you have HIV/AIDS. Do you have chronic kidney or liver disease? Do you are on medications after an organ transplant? Has your doctor told you that your immune system is compromised?',
    trigger: 'askHasImmuneDecreasedOptions'
  },
  {
    id: 'askHasImmuneDecreasedOptions',
    options: [
      {
        label: 'Yes, some of this applies to me',
        value: true,
        trigger: 'askHasImmuneDecreased2'
      },
      {
        label: 'No, nothing applies to me',
        value: false,
        trigger: 'askHasImmuneDecreased2'
      }
    ]
  },
  {
    id: 'askHasImmuneDecreased2',
    message:
      'Are you taking any medications that your doctor has said may cause decreased immunity?',
    trigger: 'askHasImmuneDecreased2Options'
  },
  {
    id: 'askHasImmuneDecreased2Options',
    options: [
      {
        label: 'Yes I do',
        value: true,
        trigger: 'askHasChronicLungDisease'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHasChronicLungDisease'
      }
    ]
  },
  {
    id: 'askHasChronicLungDisease',
    message: 'Do you have a history of chronic lung disease?',
    trigger: 'askHasChronicLungDiseaseInfo'
  },
  {
    id: 'askHasChronicLungDiseaseInfo',
    message:
      'Not sure? Answer yes if any of the following are true: You have a history of asthma; You have a history of chronic obstructive pulmonary disease/copd or emphysema; You have a history of chronic bronchitis; You have a history of interstitial lung disease; You have a history of a chronic lung disease not listed above.',
    trigger: 'askHasChronicLungDiseaseOptions'
  },
  {
    id: 'askHasChronicLungDiseaseOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHasTravelPlans'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHasTravelPlans'
      }
    ]
  },
  {
    id: 'askHasTravelPlans',
    message:
      'Are you planning on travelling outside of Canada in the next month?',
    trigger: 'askHasTravelPlansOptions'
  },
  {
    id: 'askHasTravelPlansOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHaveDialogue'
      },
      {
        label: 'No',
        value: false,
        trigger: 'askHaveDialogue'
      }
    ]
  },
  {
    id: 'askHaveDialogue',
    message:
      'Ok great. Thank you for your answers. Last question, do you have access to Dialogue through your employer?',
    trigger: 'askHaveDialogueOptions'
  },
  {
    id: 'askHaveDialogueOptions',
    options: [
      {
        label: 'Yes I do',
        value: true,
        trigger: 'howDialogueCanHelp'
      },
      {
        label: 'What\'s "Dialogue"?',
        value: false,
        trigger: 'explainDialogue'
      }
    ]
  },
  {
    id: 'howDialogueCanHelp',
    message:
      'Good for you! Remember you can always access Dialogue at https://app.dialogue.co to enquire about this or any other medical question you may have.',
    trigger: 'outro1'
  },
  {
    id: 'explainDialogue',
    message:
      "Dialogue is a virtual clinic for you and your family. Here's some of the thigs Dialogue can do for you: Chat with a nurse about any medical issue, skip the commute. Consult with a doctor via live video, skip the waiting room. Renew a prescription and get it delivered, skip a pharmacy queue. Get a referral to a specialist, fast. To learn more about Dialogue, visit https://dialogue.co",
    trigger: 'outro1'
  }
]

const outro: Step[] = [
  {
    id: 'outro1',
    message:
      'Done with the questions. Your personal information package is ready. Check back using the link below, our medical team is updating the information as the situation develops. If you know other people in your situation, share the link with them.',
    trigger: 'showResults'
  },
  { id: 'showResults', component: <Results />, end: true }
]

export default [...intro, ...riskAssessment, ...outro]
