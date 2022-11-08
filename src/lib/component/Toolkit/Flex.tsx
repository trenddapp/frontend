import { flexbox, FlexboxProps } from 'styled-system'
import styled from 'styled-components'
import Box, { BoxProps } from './Box'

interface FlexProps extends BoxProps, FlexboxProps {}

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`

export default Flex
