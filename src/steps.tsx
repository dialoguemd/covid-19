import React from 'react'

import Results from './components/results-bubble'

import { requireRegionFile } from 'services/region-loader'
import UtteranceBubble from 'components/utterance-bubble'
const steps = requireRegionFile('steps.json')

const resultsStep = { id: 'showResults', component: <Results />, end: true }

// fixme: sample for demo
const firstStepId = (steps[0] || resultsStep).id
const rasaSteps = [
  {
    id: 'rasaIntro',
    message: 'rasaIntro',
    trigger: 'userInput'
  },
  { id: 'userInput', user: true, trigger: 'utterBubble' },
  {
    id: 'utterBubble',
    component: <UtteranceBubble />,
    asMessage: true,
    waitAction: true,
    trigger: firstStepId
  }
]

export default [...rasaSteps, ...steps, resultsStep]
