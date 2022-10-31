import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'
import styled from 'styled-components'

interface TextProps extends ColorProps, LayoutProps, SpaceProps, TypographyProps {}

const Text = styled.div<TextProps>`
  color: ${({ theme }) => theme.colors.text};
  ${color}
  ${layout}
  ${space}
  ${typography}
`

export default Text
