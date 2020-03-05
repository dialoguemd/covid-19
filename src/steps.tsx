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
        trigger: 'askHasHadContact'
      },
      {
        label: 'Ontario',
        value: 'ON',
        trigger: 'askHasHadContact'
      }
    ]
  },
  {
    id: 'askHasHadContact',
    message: 'Have you been in contact with anyone infected?',
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
  }
]

const outro: Step[] = [
  { id: 'outro1', message: 'Thanks!', trigger: 'showResults' },
  { id: 'showResults', component: <Results />, end: true }
]

export default [...intro, ...riskAssessment, ...outro]
