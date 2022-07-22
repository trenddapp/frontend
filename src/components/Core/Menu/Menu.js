import styled from 'styled-components'

const StyledMenu = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.menu};
  display: flex;
  inset: 0px auto auto 0px;
  min-width: 190px;
  opacity: ${(props) => (props.open ? 1 : 0)};
  padding: 12px 12px;
  position: fixed;
  transform: translate(
    ${(props) => (props.x ? props.x : 0)}px,
    ${(props) => (props.y && props.height ? props.y + props.height : 0)}px
  );
  transition: 0.3s ease;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
`

const Menu = ({ open, element, children, ...rest }) => {
  return (
    <StyledMenu x={element?.offsetLeft} y={element?.offsetTop} height={element?.offsetHeight} {...{ open }} {...rest}>
      {children}
    </StyledMenu>
  )
}

export default Menu
