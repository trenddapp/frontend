import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'

const CommunicationContainer = styled(Flex)`
  align-items: center;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  min-height: 380px;
  padding: 80px 117px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 80px 177px;
  }
`

const CommunicationHeading = styled.h2`
  color: #3c3c57;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 22px 0;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 35px;
  }
`

const CommunicationDescription = styled.p`
  color: #282846;
  font-size: 14px;
  font-weight: 330;
  line-height: 1.6;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
  }
`

const CommunicationLink = styled.a`
  background-color: rgb(78, 94, 228);
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.6;
  margin: 30px 0 0 0;
  padding: 11px 35px;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s, transform 0.4s ease 0s;

  &:hover {
    background-color: rgb(67, 81, 197);
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
    color: rgb(255, 255, 255);
    transform: matrix(1, 0, 0, 1, 0, -1);
  }
`

const LineBreak = styled.br`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: inline;
  }
`

const Communication = () => {
  return (
    <section>
      <CommunicationContainer>
        <CommunicationHeading>Our approach to communication</CommunicationHeading>
        <CommunicationDescription>
          We prefer Zoom/Skype/Google Meet, and instant chat for rapid communication. Even though we are an offshore IT
          <LineBreak />
          software development company, we communicate in English (proficient speaking and writing).
        </CommunicationDescription>
        <CommunicationLink>BOOK A MEETING</CommunicationLink>
      </CommunicationContainer>
    </section>
  )
}

export default Communication
