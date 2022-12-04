export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export interface Colors {
  background: string
  backgroundAlt: string
  border: string
  borderAlt: string
  failure: string
  headline: string
  overlay: string
  primary: string
  primaryAlt: string
  secondary: string
  success: string
  text: string
  warning: string
}

export interface MediaQueries {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export interface Radii {
  small: string
  normal: string
  default: string
  circle: string
}

export interface Shadows {
  button: string
  menu: string
  toast: string
}

export interface ZIndices {
  header: number
  menu: number
  modal: number
  toast: number
}

export interface Theme {
  breakpoints: Breakpoints
  colors: Colors
  mediaQueries: MediaQueries
  radii: Radii
  shadows: Shadows
  siteWidth: number
  zIndices: ZIndices
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
