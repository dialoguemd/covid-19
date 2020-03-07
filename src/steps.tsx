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
    options: [
      {
        label: i18n.t('steps:intro-option1'),
        trigger: 'askForLocation',
        value: true
      }
    ]
  }
]

const riskAssessment: Step[] = [
  {
    id: 'askForLocation',
    message: i18n.t('steps:askForLocation'),
    trigger: 'askForLocationInfo'
  },
  {
    id: 'askForLocationInfo',
    message: i18n.t('steps:askForLocationInfo'),
    trigger: 'askForLocationOptions'
  },
  {
    id: 'askForLocationOptions',
    options: [
      {
        label: i18n.t('steps:askForLocationOptions-QC'),
        value: 'QC',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-ON'),
        value: 'ON',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-NS'),
        value: 'NS',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-NB'),
        value: 'NB',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-MB'),
        value: 'MB',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-BC'),
        value: 'BC',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-PE'),
        value: 'PE',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-SK'),
        value: 'SK',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-AB'),
        value: 'AB',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-NL'),
        value: 'NL',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-NT'),
        value: 'NT',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-YT'),
        value: 'YT',
        trigger: 'askAgeRange'
      },
      {
        label: i18n.t('steps:askForLocationOptions-NU'),
        value: 'NU',
        trigger: 'askAgeRange'
      }
    ]
  },
  {
    id: 'askHasHadContact',
    message: i18n.t('steps:askHasHadContact'),
    trigger: 'askHasHadContactInfo'
  },
  {
    id: 'askHasHadContactInfo',
    message: i18n.t('steps:askHasHadContactInfo'),
    trigger: 'askHasHadContactOptions'
  },
  {
    id: 'askHasHadContactOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askTraveledAffectedAreas'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askTraveledAffectedAreas'
      }
    ]
  },
  {
    id: 'askAgeRange',
    message: i18n.t('steps:askAgeRange'),
    trigger: 'askHasRangeOptions'
  },
  {
    id: 'askHasRangeOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasFever'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasFever'
      }
    ]
  },
  {
    id: 'askHasFever',
    message: i18n.t('steps:askHasFever'),
    trigger: 'askHasFeverOptions'
  },
  {
    id: 'askHasFeverOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasCough'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasCough'
      }
    ]
  },
  {
    id: 'askHasCough',
    message: i18n.t('steps:askHasCough'),
    trigger: 'askHasCoughOptions'
  },
  {
    id: 'askHasCoughOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasDifficultyBreathing'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasDifficultyBreathing'
      }
    ]
  },
  {
    id: 'askHasDifficultyBreathing',
    message: i18n.t('steps:askHasDifficultyBreathing'),
    trigger: 'askHasDifficultyBreathingOptions'
  },
  {
    id: 'askHasDifficultyBreathingOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasHadContact'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasHadContact'
      }
    ]
  },
  {
    id: 'askTraveledAffectedAreas',
    message: i18n.t('steps:askTraveledAffectedAreas'),
    trigger: 'askTraveledAffectedAreasOptions'
  },
  {
    id: 'askTraveledAffectedAreasOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasImmuneDecreased'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasImmuneDecreased'
      }
    ]
  },
  {
    id: 'askHasImmuneDecreased',
    message: i18n.t('steps:askHasImmuneDecreased'),
    trigger: 'askHasImmuneDecreasedInfo'
  },
  {
    id: 'askHasImmuneDecreasedInfo',
    message: i18n.t('steps:askHasImmuneDecreasedInfo'),
    trigger: 'askHasImmuneDecreasedOptions'
  },
  {
    id: 'askHasImmuneDecreasedOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasImmuneDecreased2'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasImmuneDecreased2'
      }
    ]
  },
  {
    id: 'askHasImmuneDecreased2',
    message: i18n.t('steps:askHasImmuneDecreased2'),
    trigger: 'askHasImmuneDecreased2Options'
  },
  {
    id: 'askHasImmuneDecreased2Options',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasChronicLungDisease'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasChronicLungDisease'
      }
    ]
  },
  {
    id: 'askHasChronicLungDisease',
    message: i18n.t('steps:askHasChronicLungDisease'),
    trigger: 'askHasChronicLungDiseaseInfo'
  },
  {
    id: 'askHasChronicLungDiseaseInfo',
    message: i18n.t('steps:askHasChronicLungDiseaseInfo'),
    trigger: 'askHasChronicLungDiseaseOptions'
  },
  {
    id: 'askHasChronicLungDiseaseOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'askHasTravelPlans'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'askHasTravelPlans'
      }
    ]
  },
  {
    id: 'askHasTravelPlans',
    message: i18n.t('steps:askHasTravelPlans'),
    trigger: 'askHasTravelPlansOptions'
  },
  {
    id: 'askHasTravelPlansOptions',
    options: [
      {
        label: i18n.t('steps:yes'),
        value: true,
        trigger: 'outro1'
      },
      {
        label: i18n.t('steps:no'),
        value: false,
        trigger: 'outro1'
      }
    ]
  }
]

const outro: Step[] = [
  {
    id: 'outro1',
    message: i18n.t('steps:outro1'),
    trigger: 'showResults'
  },
  { id: 'showResults', component: <Results />, end: true }
]

export default [...intro, ...riskAssessment, ...outro]
