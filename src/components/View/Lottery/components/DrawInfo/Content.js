import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid rgb(231, 227, 235);
`

const Content = () => {
  return <Container>Content</Container>
}

export default Content
