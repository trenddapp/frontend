import styled from 'styled-components'
import { Box } from 'pkg/component/Toolkit'

interface ModalBodyProps {
  children: React.ReactNode
}

const Container = styled(Box)`
  overflow-y: auto;
  padding: 12px 24px;
`

export default function ModalBody({ children }: ModalBodyProps) {
  return <Container>{children}</Container>
}
