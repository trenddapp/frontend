import styled from 'styled-components'

const Button = styled.button`
  background-color: inherit;
  border-radius: 0.375rem;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
  margin-top: 12px;
  padding: 10px 0px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.overlay};
    cursor: pointer;
  }
`

export default function CancelButton(props: any) {
  return <Button {...props}>Cancel</Button>
}
