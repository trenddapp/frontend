import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { SvgSolidChevronDown } from 'lib/component/Svg'

const BoxContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  min-width: max-content;
  border-radius: 1.5rem;
  margin: 2rem 0;
  box-shadow: ${({ theme }) => theme.shadows.menu};
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 600px;
  }
`
const ShowDetailBox = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const ShowDetailButton = styled.div`
  transition: 0.2s ease;
  cursor: pointer;
  color: rgb(31, 199, 212);
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.65;
  }
`

const ChevronDownStyle = styled.div<any>`
  transition: 0.3s ease;
  margin: 0 6px;
  transform: ${(props) => (props.showDetail ? 'rotate(180deg)' : '')};
  margin-top: ${(props) => (props.showDetail ? '2px' : '')};
  margin-bottom: ${(props) => (props.showDetail ? '' : '2px')};
`

function DrawInfo({ renderHeading, renderContent, renderDetail }: any) {
  const [showDetail, setShowDetail] = useState(false)
  function handleShowDetail() {
    setShowDetail(!showDetail)
  }
  return (
    <BoxContainer>
      {renderHeading}
      {renderContent}
      {showDetail && renderDetail}
      <ShowDetailBox>
        <ShowDetailButton onClick={handleShowDetail}>
          <span>{showDetail ? 'Hide' : 'Detail'}</span>

          <ChevronDownStyle {...{ showDetail: showDetail }}>
            <SvgSolidChevronDown />
          </ChevronDownStyle>
        </ShowDetailButton>
      </ShowDetailBox>
    </BoxContainer>
  )
}

export default DrawInfo
