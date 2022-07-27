import { useState } from 'react'
import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'

import { SvgSolidChevronDown } from '@/components/Svg'

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
const ShowDeatilBox = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const ShowDeatilButton = styled.div`
  transition: 0.2s ease;
  cursor: pointer;
  color: rgb(31, 199, 212);
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.65;
  }
`

const ChevronDownStyle = styled.div`
  transition: 0.3s ease;
  margin: 0 6px;
  transform: ${(props) => (props.showDeatail ? 'rotate(180deg)' : '')};
  margin-top: ${(props) => (props.showDeatail ? '2px' : '')};
  margin-bottom: ${(props) => (props.showDeatail ? '' : '2px')};
`

function DrawInfo({ renderHeading, renderContent, renderDetail }) {
  const [showDeatail, setShowDeatail] = useState(false)

  function handleShowDetail() {
    setShowDeatail(!showDeatail)
  }

  return (
    <BoxContainer>
      {renderHeading}
      {renderContent}
      {showDeatail && renderDetail}
      <ShowDeatilBox>
        <ShowDeatilButton onClick={handleShowDetail}>
          <span>{showDeatail ? 'Hide' : 'Detail'}</span>

          <ChevronDownStyle {...{ showDeatail }}>
            <SvgSolidChevronDown />
          </ChevronDownStyle>
        </ShowDeatilButton>
      </ShowDeatilBox>
    </BoxContainer>
  )
}

export default DrawInfo
