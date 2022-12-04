import styled from 'styled-components'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'contained' | 'outlined'
}

const ButtonContained = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.small};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-align: center;
  transition: background-color 0.4s ease 0s, border-color 0.4s ease 0s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlt};
    border-color: ${({ theme }) => theme.colors.primaryAlt};
    cursor: pointer;
  }
`

const ButtonOutlined = styled.button`
  background-color: #00000000;
  border-radius: ${({ theme }) => theme.radii.small};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    cursor: pointer;
  }
`

export default function Button({ children, variant = 'contained', ...props }: ButtonProps) {
  switch (variant) {
    case 'contained':
      return <ButtonContained {...props}>{children}</ButtonContained>
    case 'outlined':
      return <ButtonOutlined {...props}>{children}</ButtonOutlined>
  }
}
