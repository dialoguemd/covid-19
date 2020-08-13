import 'styled-components'
import { overrides } from 'services/overrides'

//212020

const colors = {
  primary: '#212020',
  primaryLight: '#212020',
  secondary: '#ED9877',
  secondaryLight: '#ED9877',
  text: '#212020',
  textLight: '#212020',
  disabled: '#EAEDEE',
  background: '#FAFAFB',
  backgroundLight: '#FFFFFF',
  inputBackground: '#F1F0F0',
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
