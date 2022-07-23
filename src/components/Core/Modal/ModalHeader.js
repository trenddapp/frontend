import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'

const StyledModalHeader = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding-top: 24px;
`

const ModalHeader = ({ children }) => {
  return <StyledModalHeader>{children}</StyledModalHeader>
}

export default ModalHeader
