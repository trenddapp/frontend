import { Breakpoints, MediaQueries, Radii, Shadows, ZIndices } from './type'

export const breakpoints: Breakpoints = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1240,
}

export const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
  xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl}px)`,
}

export const radii: Radii = {
  small: '6px',
  normal: '10px',
  default: '16px',
  circle: '50%',
}

export const shadows: Shadows = {
  button: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)',
  menu: 'rgba(0, 0, 0, 0.2) 0px 0px 15px 0px',
  toast: 'rgba(0, 0, 0, 0.3) 0px 0px 20px 0px',
}

export const siteWidth: number = 1240

export const zIndices: ZIndices = {
  header: 100,
  menu: 200,
  modal: 300,
  toast: 400,
}
