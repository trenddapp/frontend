import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid rgb(231, 227, 235);
`

export default function Content() {
  return <Container>Content</Container>
}
