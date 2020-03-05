import React from 'react'

import { Step } from 'react-simple-chatbot'

import Results from './components/results-bubble'

const intro: Step[] = [
  {
    id: 'intro1',
    message: 'Hi there!',
    trigger: 'intro2'
  },
  {
    id: 'intro2',
    message:
      "I'm Chloe, your friendly & informative chatbot. I'm here to provide you with relevant and personalized content regarding COVID-19 based on a short series of questions.",
    trigger: 'intro3'
  },
  {
    id: 'intro3',
    message: `Please note: 

      This app is for information purposes only and does not constitute a medical assessment.
      
      The research and data on COVID-19 continues to grow and evolve on an hourly basis which means that this information may be quickly outdated.
      
      Consulting this website is not a substitute for consulting your provincial/territorial public health department. None of the information supplied in this conversation is stored.`,
    trigger: 'intro4'
  },
  {
    id: 'intro4',
    options: [{ label: "Let's start!", trigger: 'askForLocation' }]
  }
]

const riskAssessment: Step[] = [
  {
    id: 'askForLocation',
    message: 'Where are you currently located?',
    trigger: 'askForLocationInfo'
  },
  {
    id: 'askForLocationInfo',
    message:
      'Based on your location, I will be able to tailor the information so that it applies to you!',
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
    message:
      'Close contact is defined as: Health care associated exposure, including providing direct care for nCoV patients, working with health care workers infected with novel coronavirus, visiting patients or staying in the same close environment as a nCoV patient. Working together in close proximity or sharing the same classroom environment with a nCoV patient Traveling together with a nCoV patient. Living in the same household as a nCoV patient',
    trigger: 'askHasHadContactOptions'
  },
  {
    id: 'askHasHadContactOptions',
    options: [
      {
        label: 'Yes',
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
    message: 'Are you above the age of 65?',
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
      'In most adults, an oral or axillary temperature above 37.6°C (99.7°F) or a rectal or ear temperature above 38.1°C (100.6°F) is considered a fever. A child has a fever when his or her rectal temperature is 38°C (100.4°F) or higher or armpit (axillary) temperature is 37.6°C (99.7°F) or higher. Infants less than 3 months old with a rectal temperature of 38° (100.4°F) or higher or an armpit (axillary) temperature of 37.3°C (99.1°F) or higher should be seen by a doctor.',
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
      'Have you traveled to any of the affected areas in the past 14 days? Affected Areas: Mainland China, Hong Kong, Iran, Italy, Japan, South Korea, Singapore',
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
      'Do you have any of the following? We would like to find out if your immunity is decreased.',
    trigger: 'askHasImmuneDecreasedInfo'
  },
  {
    id: 'askHasImmuneDecreasedInfo',
    message:
      'You have a history of diabetes. You take long-term oral steroids. You have an autoimmune disease such as lupus or rheumatoid arthritis. You have a history of cancer. You have HIV/AIDS .You have chronic kidney or liver disease. You are on medications after an organ transplant. Has your doctor told you that your immune system is compromised? ',
    trigger: 'askHasImmuneDecreasedOptions'
  },
  {
    id: 'askHasImmuneDecreasedOptions',
    options: [
      {
        label: 'Yes',
        value: true,
        trigger: 'askHasImmuneDecreased2'
      },
      {
        label: 'No',
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
        label: 'Yes',
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
      'Answer yes to this question if any of the following are true: You have a history of asthma; You have a history of chronic obstructive pulmonary disease/copd or emphysema; You have a history of chronic bronchitis; You have a history of interstitial lung disease; You have a history of a chronic lung disease not listed above.',
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
  { id: 'outro1', message: 'Thanks!', trigger: 'showResults' },
  { id: 'showResults', component: <Results />, end: true }
]

export default [...intro, ...riskAssessment, ...outro]
