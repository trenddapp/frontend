import styled from 'styled-components'
import { Box } from 'lib/component/Toolkit'

interface ModalBodyProps {
  children: React.ReactNode
}

const ModalBodyContainer = styled(Box)`
  overflow-y: auto;
  padding: 12px 24px;
`

export default function ModalBody({ children }: ModalBodyProps) {
  return <ModalBodyContainer>{children}</ModalBodyContainer>
}
