import React from 'react'

import steps from 'content/steps.json'
import Results from './components/results-bubble'

const resultsStep = { id: 'showResults', component: <Results />, end: true }

export default [...steps, resultsStep]

