import React from 'react'
import { render } from '@testing-library/react'
import App from './app'

test('runs the test', () => {
  render(<App />)
  expect(true).toBe(true)
})
