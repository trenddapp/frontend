import { useContext, useState } from 'react'

import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { claimReward, getWinner } from '@/api/lottery'
import { LotteryContext } from '@/context/Lottery'
import { LotteryStatus } from '@/config/constants/lottery'
import { useContractLottery } from '@/hooks/lottery'
import { useWeb3Profile, useWeb3Signer } from '@/hooks'
import { WalletConnectButton } from '@/components/Common/Wallet'

const ClaimRewardButtonWrapper = styled(Box)`
  margin: 24px 0 0 0;
`

const ClaimRewardButton = styled.a`
  background-color: rgb(78, 94, 228);
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 24px 0 0 0;
  padding: 11px 35px;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s, transform 0.4s ease 0s;

  &:hover {
    background-color: rgb(67, 81, 197);
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
    color: rgb(255, 255, 255);
  }
`

const ClaimRewardContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
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
  const { contract: contractLottery, error: contractLotteryError } = useContractLottery()
  const { account, isActive } = useWeb3Profile()
  const signer = useWeb3Signer()

  const { status } = useContext(LotteryContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isWinner, setIsWinner] = useState(false)
  const [isCheck, setIsCheck] = useState(true)

  const handleCheck = async () => {
    setIsLoading(true)
    if (contractLotteryError !== undefined) {
      console.log(contractLotteryError)
      return
    }

    try {
      const winner = await getWinner(contractLottery)
      setIsWinner(!!winner && winner === account)
      setIsCheck(false)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  const handleClaim = async () => {
    if (contractLotteryError !== undefined) {
      console.log(contractLotteryError)
      return
    }

    try {
      const contractLotteryWithSigner = contractLottery.connect(signer)
      const transaction = await claimReward(contractLotteryWithSigner)
      console.log(transaction)
    } catch (error) {
      console.log(error)
    }
  }

  if (!isActive) {
    return (
      <ClaimRewardSection>
        <ClaimRewardContainer>
          <ClaimRewardHeading>
            Connect your wallet <br /> to check if you've won!
          </ClaimRewardHeading>
          <ClaimRewardButtonWrapper>
            <WalletConnectButton />
          </ClaimRewardButtonWrapper>
        </ClaimRewardContainer>
      </ClaimRewardSection>
    )
  }

  if (isLoading) {
    return (
      <ClaimRewardSection>
        <ClaimRewardContainer>
          <ClaimRewardHeading>Loading...</ClaimRewardHeading>
        </ClaimRewardContainer>
      </ClaimRewardSection>
    )
  }

  if (isCheck) {
    return (
      <ClaimRewardSection>
        <ClaimRewardContainer>
          <ClaimRewardHeading>Are you a winner?</ClaimRewardHeading>
          <ClaimRewardButton onClick={handleCheck}>Check</ClaimRewardButton>
        </ClaimRewardContainer>
      </ClaimRewardSection>
    )
  }

  if (status !== LotteryStatus.COMPLETED) {
    return (
      <ClaimRewardSection>
        <ClaimRewardContainer>
          <ClaimRewardHeading>
            Please check again, <br /> when the lottery is completed!
          </ClaimRewardHeading>
        </ClaimRewardContainer>
      </ClaimRewardSection>
    )
  }

  if (isWinner) {
    return (
      <ClaimRewardSection>
        <ClaimRewardContainer>
          <ClaimRewardHeading>You have won!</ClaimRewardHeading>
          <ClaimRewardButton onClick={handleClaim}>Claim</ClaimRewardButton>
        </ClaimRewardContainer>
      </ClaimRewardSection>
    )
  }

  return (
    <ClaimRewardSection>
      <ClaimRewardContainer>
        <ClaimRewardHeading>
          No prizes to collect, <br /> better luck next time!
        </ClaimRewardHeading>
      </ClaimRewardContainer>
    </ClaimRewardSection>
  )
}

export default ClaimReward
