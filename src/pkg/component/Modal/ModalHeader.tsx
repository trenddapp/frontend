import styled from 'styled-components'
import { Flex } from 'pkg/component/Toolkit'

interface ModalHeaderProps {
  children: React.ReactNode
}

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding-top: 24px;
`

export default function ModalHeader({ children }: ModalHeaderProps) {
  return <Container>{children}</Container>
}
