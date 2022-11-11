'use client'

import { useContext, useState } from 'react'
import { ConnectKitButton } from 'connectkit'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'
import { claimReward, getWinner, LotteryStatus } from 'lib/api/lottery'
import { LotteryContext } from 'lib/context/Lottery'
import { useConnector, useContractLottery } from 'lib/hook'

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

export default function ClaimReward() {
  const { address, isConnected, signer } = useConnector()
  const { status } = useContext(LotteryContext)
  const { contract } = useContractLottery({ signer })
  const [isLoading, setIsLoading] = useState(false)
  const [isWinner, setIsWinner] = useState(false)
  const [isCheck, setIsCheck] = useState(true)
  const handleCheck = async () => {
    setIsLoading(true)
    if (contract === undefined) {
      return
    }
    try {
      const winner = await getWinner(contract)
      setIsWinner(!!winner && winner === address)
      setIsCheck(false)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  const handleClaim = async () => {
    if (contract === undefined || signer === undefined) {
      return
    }
    try {
      const transaction = await claimReward(contract)
      toast.promise(transaction.wait(), {
        error: 'Failed to claim reward!',
        pending: 'Waiting for the transaction!',
        success: 'Successfully claimed reward!',
      })
    } catch (error) {
      toast.error('Failed to claim reward. Please try again!')
    }
  }
  if (!isConnected) {
    return (
      <ClaimRewardSection>
        <ClaimRewardContainer>
          <ClaimRewardHeading>
            Connect your wallet <br /> {`to check if you've won!`}
          </ClaimRewardHeading>
          <ClaimRewardButtonWrapper>
            <ConnectKitButton />
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
  if (status !== LotteryStatus.Complete) {
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
