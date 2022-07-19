import styled from 'styled-components'

const StyledMenu = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.menu};
  display: flex;
  inset: 0px auto auto 0px;
  opacity: ${(props) => (props.open ? 1 : 0)};
  padding: 0.5rem 0;
  position: fixed;
  transform: translate(
    ${(props) => (props.x ? props.x : 0)}px,
    ${(props) => (props.y && props.height ? props.y + props.height : 0)}px
  );
  transition: 0.3s ease;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  min-width: 150px;
  border-radius: 8px;
`

const Menu = ({ open, element, children, ...rest }) => {
  return (
    <StyledMenu x={element?.offsetLeft} y={element?.offsetTop} height={element?.offsetHeight} {...{ open }} {...rest}>
      {children}
    </StyledMenu>
  )
}

export default Menu
