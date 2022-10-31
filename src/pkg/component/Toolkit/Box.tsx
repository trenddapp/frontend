import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system'
import styled from 'styled-components'

export interface BoxProps extends BackgroundProps, BorderProps, LayoutProps, PositionProps, SpaceProps {}

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`

export default Box
