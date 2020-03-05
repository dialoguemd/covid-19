const colors = {
  primary: '#0097F3',
  primaryLight: '#E5F4FD',
  secondary: '#534E71',
  secondaryLight: '#7378A3',
  text: '#534E71',
  disabled: '#EAEDEE',
  background: '#FAFAFB',
  backgroundLight: '#FFFFFF'
} as const

const sizes = {
  title: '36px',
  question: '20px',
  buttonText: '16px',
  body: '16px',
  small: '12px'
} as const

export const theme = {
  colors,
  sizes,
  fontFamily:
    '"Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
} as const
