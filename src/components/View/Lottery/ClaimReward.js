import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import ConnectButton from '@/components/Core/Wallet/ConnectButton'

const ClaimRewardButtonWrapper = styled(Box)`
  margin: 24px 0 0 0;
`

const ClaimRewardContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const ClaimRewardHeading = styled.h2`
  color: #3c3c57;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
`

const ClaimRewardSection = styled.section`
  background-color: #f2f4f7;
  height: 300px;
  padding: 48px 0;
`

const ClaimReward = () => {
  return (
    <ClaimRewardSection>
      <ClaimRewardContainer>
        <ClaimRewardHeading>
          Connect your wallet <br /> to check if you've won!
        </ClaimRewardHeading>
        <ClaimRewardButtonWrapper>
          <ConnectButton />
        </ClaimRewardButtonWrapper>
      </ClaimRewardContainer>
    </ClaimRewardSection>
  )
}

export default ClaimReward
