import styled from 'styled-components'

import { Box, Flex, Text } from '@/components/Core/Toolkit'

import TerminalLineNumber from './TerminalLineNumber'

const TerminalContainer = styled(Flex)`
  background-color: #000000;
  border-radius: 20px 20px 5px 5px;
  border: 1px solid #4a4a4a;
  box-shadow: 0 20px 50px 0 rgb(0 0 0 / 20%);
  height: 400px;
  position: absolute;
  transform: scale(0.8);
  width: 400px;
  z-index: 30;

  ${({ theme }) => theme.mediaQueries.md} {
    height: 365px;
    transform: none;
    width: 448px;
  }
`

const TerminalBody = styled(Box)`
  margin: 0 0 0 13px;
  padding: 35px 0 0 0;
`

const TerminalHeader = styled(Flex)`
  background: linear-gradient(90deg, #222527, #2d3133);
  border-bottom: 1px solid #394249;
  border-radius: 5px 5px 0 0;
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

const Terminal = ({ title = 'bash' }) => {
  return (
    <TerminalContainer>
      <TerminalHeader>
        <TerminalHeaderIcon as="span" background="#e15954" border="1px solid #e15954" />
        <TerminalHeaderIcon as="span" background="#fdbd2e" border="1px solid #e0a93d" />
        <TerminalHeaderIcon as="span" background="#28ca40" border="1px solid #3ab54b" />
        <TerminalHeaderTitle>{title}</TerminalHeaderTitle>
      </TerminalHeader>
      <TerminalBody>
        <Box>
          <TerminalLineNumber lineNumber={1} maxLineNumber={13} />
          <Text as="span" color="rgb(230, 146, 145)">
            package{' '}
          </Text>
          <Text as="span" color="rgb(244, 186, 104)">
            main
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={2} maxLineNumber={13} />
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={3} maxLineNumber={13} />
          <Text as="span" color="rgb(230, 146, 145)">
            import{' '}
          </Text>
          <Text as="span" color="rgb(244, 186, 104)">
            "fmt"
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={4} maxLineNumber={13} />
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={5} maxLineNumber={13} />
          <Text as="span" color="rgb(230, 146, 145)">
            func{' '}
          </Text>
          <Text as="span" color="rgb(213, 184, 250)">
            DetectCosmicRay
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            ( ){' '}
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            {'{'}
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={6} maxLineNumber={13} />
          <Text as="span" color="rgb(230, 146, 145)">
            &emsp;for{' '}
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            {'{'}
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={7} maxLineNumber={13} />
          <Text as="span" color="rgb(230, 146, 145)">
            &emsp;&emsp;if{' '}
          </Text>
          <Text as="span" color="rgb(158, 201, 251)">
            false{' '}
          </Text>
          <Text as="span" color="rgb(205, 205, 205)">
            {'{'}
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={8} maxLineNumber={13} />
          <Text as="span" color="rgb(205, 205, 205)">
            &emsp;&emsp;&emsp;fmt.
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
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={9} maxLineNumber={13} />
          <Text as="span" color="rgb(205, 205, 205)">
            &emsp;&emsp;{'}'}
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={10} maxLineNumber={13} />
          <Text as="span" color="rgb(205, 205, 205)">
            &emsp;{'}'}
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={11} maxLineNumber={13} />
          <Text as="span" color="rgb(205, 205, 205)">
            {'}'}
          </Text>
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={12} maxLineNumber={13} />
        </Box>
        <Box>
          <TerminalLineNumber lineNumber={13} maxLineNumber={13} />
        </Box>
      </TerminalBody>
    </TerminalContainer>
  )
}

export default Terminal
