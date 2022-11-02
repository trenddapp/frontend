import styled from 'styled-components'

const MenuContainer = styled.div<any>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.menu};
  display: flex;
  inset: 0px auto auto 0px;
  min-width: 150px;
  opacity: ${(props) => (props.open ? 1 : 0)};
  padding: 12px 0px;
  position: fixed;
  transform: translate(
    ${(props) => (props.x ? props.x : 0)}px,
    ${(props) => (props.y && props.height ? props.y + props.height : 0)}px
  );
  transition: 0.1s ease opacity;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  z-index: ${({ theme }) => theme.zIndices.menu};
`

export default function Menu({ open, element, children, ...rest }: any) {
  return (
    <MenuContainer
      x={element?.offsetLeft}
      y={element?.offsetTop}
      height={element?.offsetHeight}
      {...{ open }}
      {...rest}
    >
      {children}
    </MenuContainer>
  )
}
