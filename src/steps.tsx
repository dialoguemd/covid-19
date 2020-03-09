import React from 'react'

import { Step } from 'react-simple-chatbot'

import Results from './components/results-bubble'

const intro: Step[] = [
  {
    id: 'intro1',
    message: 'intro1',
    trigger: 'intro2'
  },
  {
    id: 'intro2',
    message: 'intro2',
    trigger: 'intro3'
  },
  {
    id: 'intro3',
    message: 'intro3',
    trigger: 'intro4'
  },
  {
    id: 'intro4',
    options: [
      {
        label: 'intro-option1',
        trigger: 'askForLocation',
        value: true
      }
    ]
  }
]

const riskAssessment: Step[] = [
  {
    id: 'askForLocation',
    message: 'askForLocation',
    trigger: 'askForLocationInfo'
  },
  {
    id: 'askForLocationInfo',
    message: 'askForLocationInfo',
    trigger: 'askForLocationOptions'
  },
  {
    id: 'askForLocationOptions',
    options: [
      {
        label: 'askForLocationOptions-QC',
        value: 'QC',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-ON',
        value: 'ON',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-NS',
        value: 'NS',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-NB',
        value: 'NB',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-MB',
        value: 'MB',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-BC',
        value: 'BC',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-PE',
        value: 'PE',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-SK',
        value: 'SK',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-AB',
        value: 'AB',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-NL',
        value: 'NL',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-NT',
        value: 'NT',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-YT',
        value: 'YT',
        trigger: 'askAgeRange'
      },
      {
        label: 'askForLocationOptions-NU',
        value: 'NU',
        trigger: 'askAgeRange'
      }
    ]
  },
  {
    id: 'askHasHadContact',
    message: 'askHasHadContact',
    trigger: 'askHasHadContactInfo'
  },
  {
    id: 'askHasHadContactInfo',
    message: 'askHasHadContactInfo',
    trigger: 'askHasHadContactOptions'
  },
  {
    id: 'askHasHadContactOptions',
    options: [
      {
        label: 'askHasHadContactOptions-Option1',
        value: true,
        trigger: 'askTraveledAffectedAreas'
      },
      {
        label: 'no',
        value: false,
        trigger: 'askTraveledAffectedAreas'
      }
    ]
  },
  {
    id: 'askAgeRange',
    message: 'askAgeRange',
    trigger: 'askHasRangeOptions'
  },
  {
    id: 'askHasRangeOptions',
    options: [
      {
        label: 'yes',
        value: true,
        trigger: 'askHasFever'
      },
      {
        label: 'no',
        value: false,
        trigger: 'askHasFever'
      }
    ]
  },
  {
    id: 'askHasFever',
    message: 'askHasFever',
    trigger: 'askHasFeverOptions'
  },
  {
    id: 'askHasFeverOptions',
    options: [
      {
        label: 'yes',
        value: true,
        trigger: 'askHasCough'
      },
      {
        label: 'no',
        value: false,
        trigger: 'askHasCough'
      }
    ]
  },
  {
    id: 'askHasCough',
    message: 'askHasCough',
    trigger: 'askHasCoughOptions'
  },
  {
    id: 'askHasCoughOptions',
    options: [
      {
        label: 'yes',
        value: true,
        trigger: 'askHasDifficultyBreathing'
      },
      {
        label: 'no',
        value: false,
        trigger: 'askHasDifficultyBreathing'
      }
    ]
  },
  {
    id: 'askHasDifficultyBreathing',
    message: 'askHasDifficultyBreathing',
    trigger: 'askHasDifficultyBreathingOptions'
  },
  {
    id: 'askHasDifficultyBreathingOptions',
    options: [
      {
        label: 'yes',
        value: true,
        trigger: 'askHasHadContact'
      },
      {
        label: 'no',
        value: false,
        trigger: 'askHasHadContact'
      }
    ]
  },
  {
    id: 'askTraveledAffectedAreas',
    message: 'askTraveledAffectedAreas',
    trigger: 'askTraveledAffectedAreasOptions'
  },
  {
    id: 'askTraveledAffectedAreasOptions',
    options: [
      {
        label: 'yes',
        value: true,
        trigger: 'askHasImmuneDecreased'
      },
      {
        label: 'no',
        value: false,
        trigger: 'askHasImmuneDecreased'
      }
    ]
  },
  {
    id: 'askHasImmuneDecreased',
    message: 'askHasImmuneDecreased',
    trigger: 'askHasImmuneDecreasedInfo'
  },
  {
    id: 'askHasImmuneDecreasedInfo',
    message: 'askHasImmuneDecreasedInfo',
    trigger: 'askHasImmuneDecreasedOptions'
  },
  {
    id: 'askHasImmuneDecreasedOptions',
    options: [
      {
        label: 'askHasImmuneDecreasedOptions-Option1',
        value: true,
        trigger: 'askHasImmuneDecreased2'
      },
      {
        label: 'askHasImmuneDecreasedOptions-Option2',
        value: false,
        trigger: 'askHasImmuneDecreased2'
      }
    ]
  },
  {
    id: 'askHasImmuneDecreased2',
    message: 'askHasImmuneDecreased2',
    trigger: 'askHasImmuneDecreased2Options'
  },
  {
    id: 'askHasImmuneDecreased2Options',
    options: [
      {
        label: 'askHasImmuneDecreased2Options-Option1',
        value: 'yes',
        trigger: 'askHasChronicLungDisease'
      },
      {
        label: 'askOptionUnsure',
        value: 'maybe',
        trigger: 'askHasChronicLungDisease'
      },
      {
        label: 'no',
        value: 'no',
        trigger: 'askHasChronicLungDisease'
      }
    ]
  },
  {
    id: 'askHasChronicLungDisease',
    message: 'askHasChronicLungDisease',
    trigger: 'askHasChronicLungDiseaseInfo'
  },
  {
    id: 'askHasChronicLungDiseaseInfo',
    message: 'askHasChronicLungDiseaseInfo',
    trigger: 'askHasChronicLungDiseaseOptions'
  },
  {
    id: 'askHasChronicLungDiseaseOptions',
    options: [
      {
        label: 'yes',
        value: true,
        trigger: 'askHasTravelPlans'
      },
      {
        label: 'no',
        value: false,
        trigger: 'askHasTravelPlans'
      }
    ]
  },
  {
    id: 'askHasTravelPlans',
    message: 'askHasTravelPlans',
    trigger: 'askHasTravelPlansOptions'
  },
  {
    id: 'askHasTravelPlansOptions',
    options: [
      {
        label: 'yes',
        value: true,
        trigger: 'outro1'
      },
      {
        label: 'no',
        value: false,
        trigger: 'outro1'
      }
    ]
  }
]

const outro: Step[] = [
  {
    id: 'outro1',
    message: 'outro1',
    trigger: 'showResults'
  },
  { id: 'showResults', component: <Results />, end: true }
]

export default [...intro, ...riskAssessment, ...outro]
