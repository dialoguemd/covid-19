import 'styled-components'
import Color from 'color'

const lighten = (base: string, pct: number) =>
  Color(base)
    .lighten(pct)
    .rgb()
    .string()

const colors = {
  primary: '#0097F3',
  primaryLight: '#E5F4FD',
  secondary: '#534E71',
  secondaryLight: '#7378A3',
  text: '#534E71',
  buttonText: '#FFFFFF',
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

export const bridgeThemeMapper = ({ COLOURS, METRICS }) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: COLOURS.PRIMARY,
      primaryLight: lighten(COLOURS.PRIMARY, 0.6),
      secondary: COLOURS.SECONDARY,
      secondaryLight: lighten(COLOURS.SECONDARY, 0.6),
      text: COLOURS.TEXT_PRIMARY,
      buttonText: COLOURS.TEXT_PRIMARY_CONTRAST,
      background: COLOURS.BACKGROUND_PRIMARY,
      backgroundLight: COLOURS.BACKGROUND_SECONDARY
    }
    /*     sizes: {
      ...theme.sizes,
      question: `${METRICS.TEXT_PRIMARY}px`,
      buttonText: `${METRICS.TEXT_PRIMARY}px`,
      body: `${METRICS.TEXT_PRIMARY}px`,
      small:`${METRICS.TEXT_SECONDARY}px`,
    } */
  }
}
