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

const TerminalLineNumber = styled(Text)`
  color: rgb(205, 205, 205);
  user-select: none;
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
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 9px">
            1
          </TerminalLineNumber>
          <Text as="span" color="rgb(230, 146, 145)">
            package
          </Text>{' '}
          <Text as="span" color="rgb(244, 186, 104)">
            main
          </Text>
        </Text>
        <TerminalLineNumber as="span" margin="0 15px 0 9px">
          2
        </TerminalLineNumber>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 9px">
            3
          </TerminalLineNumber>
          <Text as="span" color="rgb(230, 146, 145)">
            import
          </Text>{' '}
          <Text as="span" color="rgb(244, 186, 104)">
            "fmt"
          </Text>
        </Text>
        <TerminalLineNumber as="span" margin="0 15px 0 9px">
          4
        </TerminalLineNumber>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 9px">
            5
          </TerminalLineNumber>
          <Text as="span" color="rgb(230, 146, 145)">
            func
          </Text>{' '}
          <Text as="span" color="rgb(213, 184, 250)">
            DetectCosmicRay
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            ( )
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            {' {'}
          </Text>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 9px">
            6
          </TerminalLineNumber>
          &emsp;
          <Text as="span" color="rgb(230, 146, 145)">
            for
          </Text>{' '}
          <Text as="span" color="rgb(205, 205, 205)">
            {'{'}
          </Text>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 9px">
            7
          </TerminalLineNumber>
          &emsp; &emsp;{' '}
          <Text as="span" color="rgb(230, 146, 145)">
            if
          </Text>{' '}
          <Text as="span" color="rgb(158, 201, 251)">
            false
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            {' {'}
          </Text>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 9px">
            8
          </TerminalLineNumber>
          &emsp; &emsp; &emsp;
          <Text as="span" color="rgb(205, 205, 205)">
            fmt.
          </Text>
          <Text as="span" color="rgb(158, 201, 251)">
            Println
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            (
          </Text>
          <Text as="span" color="rgb(183, 218, 252)">
            "Cosmic ray detected!"
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            )
          </Text>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 9px">
            9
          </TerminalLineNumber>
          &emsp; &emsp;
          <Text as="span" color="rgb(205, 205, 205)">
            {'}'}
          </Text>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 0">
            10
          </TerminalLineNumber>
          &emsp;
          <Text as="span" color="rgb(205, 205, 205)">
            {'}'}
          </Text>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 0">
            11
          </TerminalLineNumber>
          <Text as="span" color="rgb(205, 205, 205)">
            {'}'}
          </Text>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 0">
            12
          </TerminalLineNumber>
        </Text>
        <Text>
          <TerminalLineNumber as="span" margin="0 15px 0 0">
            13
          </TerminalLineNumber>
        </Text>
      </TerminalBody>
    </TerminalContainer>
  )
}

export default Terminal
