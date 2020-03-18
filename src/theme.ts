import 'styled-components'

const colors = {
  primary: '#F7CE47',
  primaryLight: '#FEF7DB',
  secondary: '#1E4B69',
  secondaryLight: '#6288CF',
  text: '#1E4B69',
  disabled: '#EAEDEE',
  background: '#FAFAFB',
  backgroundLight: '#FFFFFF'
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
