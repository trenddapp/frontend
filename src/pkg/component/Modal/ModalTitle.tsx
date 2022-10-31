import styled from 'styled-components'

interface ModalTitleProps {
  children: React.ReactNode
}

const Container = styled.h3`
  color: ${({ theme }) => theme.colors.headline};
  font-weight: bold;
`

export default function ModalTitle({ children }: ModalTitleProps) {
  return <Container>{children}</Container>
}
