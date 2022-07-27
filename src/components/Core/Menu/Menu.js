import styled from 'styled-components'

const StyledMenu = styled.div`
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
  transition: 0.3s ease;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  z-index: ${({ theme }) => theme.zIndices.menu};
`

const Menu = ({ open, element, children, ...rest }) => {
  return (
    <StyledMenu x={element?.offsetLeft} y={element?.offsetTop} height={element?.offsetHeight} {...{ open }} {...rest}>
      {children}
    </StyledMenu>
  )
}

export default Menu
