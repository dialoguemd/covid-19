import React from 'react'
import i18n from 'services/i18n'

import { Step } from 'react-simple-chatbot'

import Results from './components/results-bubble'

const intro: Step[] = [
  {
    id: 'intro1',
    message: i18n.t('steps:intro1'),
    trigger: 'intro2'
  },
  {
    id: 'intro2',
    message: i18n.t('steps:intro2'),
    trigger: 'intro3'
  },
  {
    id: 'intro3',
    message: i18n.t('steps:intro3'),
    trigger: 'intro4'
  },
  {
    id: 'intro4',
    options: [{ label: i18n.t('steps:intro4'), trigger: 'askForLocation' }]
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
    message: 'Have you been in **close contact** with anyone infected?',
    trigger: 'askHasHadContactInfo'
  },
  {
    id: 'askHasHadContactInfo',
    message: `
    By **close contact** I mean **any** of the following:


    - Health-care associated exposure, like providing care for infected patients, visiting or staying with them in the same close environment
    - Working in close proximity or sharing the same classroom with an infected person
    - Traveling with an infected person
    - Living in the same household an infected person
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
    message: `
    Have you traveled to **any** of these areas in the past 14 days:

    - Mainland China
    - Hong Kong
    - Iran
    - Italy
    - Japan
    - South Korea
    - Singapore`,
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
    message: `
    Do **any** of these apply to you?

    - Do you have a history of diabetes?
    - Do you take long-term oral steroids?
    - Do you have an autoimmune disease such as lupus or rheumatoid arthritis?
    - Do you have a history of cancer?
    - Do you have HIV/AIDS?
    - Do you have chronic kidney or liver disease?
    - Do you are on medications after an organ transplant?
    - Has your doctor told you that your immune system is compromised?`,
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
    message: `
    Not sure? Answer yes if you have a history of **any** of the following:

    - Asthma
    - Chronic obstructive pulmonary disease/copd or emphysema
    - Chronic bronchitis
    - Interstitial lung disease
    - Chronic lung disease not listed above`,
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
        trigger: 'outro1'
      },
      {
        label: 'No',
        value: false,
        trigger: 'outro1'
      }
    ]
  }
]

const outro: Step[] = [
  {
    id: 'outro1',
    message: `
    We're done with the questions! Your personal information package is ready.

    You can always check back using the link below, our medical team is updating the information as the situation develops.`,
    trigger: 'showResults'
  },
  { id: 'showResults', component: <Results />, end: true }
]

export default [...intro, ...riskAssessment, ...outro]
