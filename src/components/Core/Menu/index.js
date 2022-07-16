import styled from 'styled-components'

const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.toast};
  position: fixed;
  transform: translate(
    ${(props) => (props.x ? props.x : 0)}px,
    ${(props) => (props.y && props.height ? props.y + props.height : 0)}px
  );
  inset: 0px auto auto 0px;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: 0.2s ease;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
`

const Menu = ({ open, element, children, ...rest }) => {
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

export default Menu
