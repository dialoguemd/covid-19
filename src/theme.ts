import 'styled-components'
import { overrides } from 'services/overrides'

const colors = {
  primary: '#0097F3',
  primaryLight: '#E5F4FD',
  secondary: '#534E71',
  secondaryLight: '#7378A3',
  text: '#534E71',
  lightText: '#FFFFFF',
  disabled: '#EAEDEE',
  background: '#FAFAFB',
  backgroundLight: '#FFFFFF',
  ...overrides.colors
} as const

const sizes = {
  title: '36px',
  question: '18px',
  buttonText: '18px',
  body: '16px',
  small: '12px'
} as const

export const theme = {
  colors,
  sizes,
  fontFamily:
    '"Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
} as const

export const mobileBreakpoint = 500 as number

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    sizes: typeof sizes
    fontFamily: string
  }
}
