import React from 'react'

import Results from './components/results-bubble'

import { requireRegionFile } from 'services/region-loader'
const steps = requireRegionFile('steps.json')

const resultsStep = { id: 'showResults', component: <Results />, end: true }

export default [...steps, resultsStep]
