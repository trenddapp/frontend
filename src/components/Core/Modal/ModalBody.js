import styled from 'styled-components'

import { Box } from '@/components/Core/Toolkit'

const StyledModalBody = styled(Box)`
  overflow-y: auto;
  padding: 12px 24px;
`

const ModalBody = ({ children }) => {
  return <StyledModalBody>{children}</StyledModalBody>
}

export default ModalBody
