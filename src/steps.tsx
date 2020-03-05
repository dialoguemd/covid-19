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
    message:
      'Please note: This app is for information purposes only and does not constitute a medical assessment. The research and data on COVID-19 continues to grow and evolve on an hourly basis which means that this information may be quickly outdated. Consulting this website is not a substitute for consulting your provincial/territorial public health department. None of the information supplied in this conversation is stored.',
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
  }
]

const outro: Step[] = [
  { id: 'outro1', message: 'Thanks!', trigger: 'showResults' },
  { id: 'showResults', component: <Results />, end: true }
]

export default [...intro, ...riskAssessment, ...outro]
