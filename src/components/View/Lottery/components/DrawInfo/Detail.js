import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgb(250, 249, 250); ;
`

const Detail = () => {
  return (
    <Container>
      <div>Detail</div>
    </Container>
  )
}

export default Detail
