import { useState } from 'react'
import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'
import { SvgPrevious, SvgNext, SvgEnd } from '@/components/Svg'

const Container = styled(Flex)`
  padding: 1rem;
  background-color: ${(props) => (props.hasPagination ? '#fff' : 'rgb(232 242 246)')};
  border-bottom: ${(props) => (props.hasPagination ? '1px solid rgb(231, 227, 235)' : '')};
  border-radius: 24px 24px 0px 0px;
`

const HeadingWithoutPagination = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const HeadingWithPagination = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const TitleBox = styled(Flex)`
  flex-direction: column;
`
const Title = styled.div`
  margin-right: 10px;
`
const DrawNumberInput = styled.input`
  width: 60px;
  height: 100%;
  padding: 4px 16px;
  background-color: rgb(238, 234, 244);
  border-radius: 16px;
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
  color: rgb(40, 13, 95);
  display: block;
  font-size: 16px;
  outline: 0px;
  padding: 3px 16px;
  border: 1px solid rgb(215, 202, 236);
  text-align: center;
`
const StyledDate = styled.div`
  font-size: 0.9rem;
`
const IconContainer = styled.div`
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    opacity: 0.65;
  }
`

const Heading = ({ hasPagination, drawNumber, drawDate }) => {
  const [num, setNum] = useState(drawNumber)

  const handleDecreament = () => {
    setNum((prev) => (prev - 1 > 0 ? prev - 1 : 0))
  }

  const handleIncreament = () => {
    setNum((prev) => (prev + 1 > drawNumber ? prev : prev + 1))
  }

  const handleGoToEnd = () => {
    setNum(drawNumber)
  }

  return (
    <Container {...{ hasPagination }}>
      {hasPagination ? (
        <HeadingWithPagination>
          <TitleBox>
            <Flex alignItems="center">
              <Title>Round</Title>{' '}
              <DrawNumberInput type={'number'} value={num} onChange={(e) => setNum(e.target.value)} />{' '}
            </Flex>
            <StyledDate>{`Drawn ${drawDate}`}</StyledDate>
          </TitleBox>
          <Flex alignItems="center">
            <IconContainer onClick={handleDecreament}>
              <SvgPrevious />
            </IconContainer>
            <IconContainer onClick={handleIncreament}>
              <SvgNext />
            </IconContainer>
            <IconContainer onClick={handleGoToEnd}>
              <SvgEnd />
            </IconContainer>
          </Flex>
        </HeadingWithPagination>
      ) : (
        <HeadingWithoutPagination>
          <div>Next Draw</div>
          <StyledDate>{`#${drawNumber} | Draw: ${drawDate}`}</StyledDate>
        </HeadingWithoutPagination>
      )}
    </Container>
  )
}

export default Heading
