import React from 'react'
import { render } from '@testing-library/react'
import App from './app'

import './services/i18n'

test('runs the test', () => {
  render(<App />)
  expect(true).toBe(true)
})
