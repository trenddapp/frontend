import styled from 'styled-components'

import { Box, Flex, Text } from '@/components/Toolkit'

const TerminalContainer = styled(Flex)`
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid #4a4a4a;
  box-shadow: 0 20px 50px 0 rgb(0 0 0 / 20%);
  height: 365px;
  position: absolute;
  width: 448px;
  z-index: 30;
`

const TerminalBody = styled(Box)`
  margin: 0 0 0 13px;
  padding: 35px 0 0 0;
`

const TerminalHeader = styled(Flex)`
  background: linear-gradient(90deg, #222527, #2d3133);
  border-bottom: 1px solid #394249;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  height: 29px;
  left: -1px;
  padding: 0 0 0 7px;
  position: absolute;
  top: -2px;
  width: calc(100% + 2px);
`

const TerminalHeaderIcon = styled(Box)`
  border-radius: 100%;
  height: 12px;
  margin: 9px 0 0 5px;
  width: 12px;
`

const TerminalHeaderTitle = styled(Text)`
  color: rgb(245, 245, 245);
  font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
    'Courier New', monospace, serif;
  font-size: 13.5px;
  font-weight: 100;
  left: 0px;
  position: absolute;
  right: 0px;
  text-align: center;
  top: 8px;
`

const Terminal = () => {
  return (
    <TerminalContainer>
      <TerminalHeader>
        <TerminalHeaderIcon as="span" background="#e15954" border="1px solid #e15954" />
        <TerminalHeaderIcon as="span" background="#fdbd2e" border="1px solid #e0a93d" />
        <TerminalHeaderIcon as="span" background="#28ca40" border="1px solid #3ab54b" />
        <TerminalHeaderTitle>bash</TerminalHeaderTitle>
      </TerminalHeader>
      <TerminalBody>
        <Text color="white">{'> '} echo "Hello world!"</Text>
      </TerminalBody>
    </TerminalContainer>
  )
}

export default Terminal
