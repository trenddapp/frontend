import styled from 'styled-components'

import { Box, Flex } from '@/components/Toolkit'

const BlueprintBody = styled(Box)`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  border: 1px solid #ededed;
  box-shadow: 0px 0px 34px rgb(0 0 0 / 10%);
  margin: 0 auto;
  max-width: 1024px;
  padding: 60px;
`

const BlueprintBodyDescription = styled.p`
  color: #282846;
  font-family: 'Helvetica Neue';
  font-size: 15px;
  font-weight: 330;
  line-height: 1.6;
  margin: 0 0 22px 0;
  max-width: 1024px;
  padding: 0 117px 0 0;
`

const BlueprintBodyLink = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #4351c5;
  border-radius: 6px;
  color: #4351c5;
  cursor: pointer;
  display: inline-block;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.6;
  padding: 11px 33px;
  transition: background-color 0.4s ease, color 0.4s ease, transform 0.4s ease;

  &:hover {
    color: #fff;
    background-color: #4351c5;
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    transform: matrix(1, 0, 0, 1, 0, -1);
  }
`

const BlueprintBodyHeading = styled.h3`
  color: #282846;
  font-family: 'Helvetica Neue';
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
  margin: 0 0 10px 0;
  opacity: 0.9;
`

const BlueprintHeading = styled.h2`
  color: #3c3c57;
  font-family: 'Helvetica Neue';
  font-size: 35px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 auto 30px auto;
  max-width: 500px;
  text-align: center;
`

const BlueprintSection = styled.section`
  background-color: rgb(242, 244, 247);
  padding: 80px 95px;
`

const Blueprint = () => {
  return (
    <BlueprintSection>
      <BlueprintHeading>
        Your blueprint for <br /> decentralized systems
      </BlueprintHeading>
      <BlueprintBody>
        <Box>
          <BlueprintBodyHeading>Automate your workflow</BlueprintBodyHeading>
          <BlueprintBodyDescription>
            Automate your Ethereum operations using OpenZeppelin Defender to deliver high-quality products faster with{' '}
            <br />
            lower risk to users.
          </BlueprintBodyDescription>
          <BlueprintBodyLink>LEARN MORE</BlueprintBodyLink>
        </Box>
        <Flex></Flex>
      </BlueprintBody>
    </BlueprintSection>
  )
}

export default Blueprint
