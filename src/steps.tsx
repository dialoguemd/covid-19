import React from 'react'

import Results from './components/results-bubble'

import { getRegion } from 'services/region'
const { steps } = getRegion()

const resultsStep = { id: 'showResults', component: <Results />, end: true }

export default [...steps, resultsStep]
