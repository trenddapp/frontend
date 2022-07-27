const breakpoints = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1240,
}

const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
  xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl}px)`,
}

const radii = {
  small: '6px',
  normal: '10px',
  default: '16px',
  circle: '50%',
}

const shadows = {
  menu: 'rgba(0, 0, 0, 0.2) 0px 0px 15px 0px',
  toast: 'rgba(0, 0, 0, 0.3) 0px 0px 20px 0px',
}

const siteWidth = 1240

const spacing = [0, 4, 8, 16, 24, 32, 48, 64]

const zIndices = {
  header: 100,
  menu: 200,
  modal: 800,
  toast: 1000,
}

export default {
  breakpoints,
  mediaQueries,
  radii,
  shadows,
  siteWidth,
  spacing,
  zIndices,
}
