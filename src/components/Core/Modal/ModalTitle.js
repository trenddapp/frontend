import styled from 'styled-components'

const StyledModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.headline};
  font-weight: bold;
`

const ModalTitle = ({ children }) => {
  return <StyledModalTitle>{children}</StyledModalTitle>
}

export default ModalTitle
