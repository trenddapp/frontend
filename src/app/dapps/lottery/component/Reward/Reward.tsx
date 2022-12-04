'use client'

import { useContext, useState } from 'react'
import { ConnectKitButton } from 'connectkit'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'
import { claimReward, getWinner, LotteryStatus } from 'lib/api/lottery'
import { LotteryContext } from 'lib/context/Lottery'
import { useConnector, useContractLottery } from 'lib/hook'

const RewardButtonWrapper = styled(Box)`
  margin: 24px 0 0 0;
`

const RewardButton = styled.a`
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

const RewardContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const RewardHeading = styled.h2`
  color: #3c3c57;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
`

const RewardSection = styled.section`
  background-color: #f2f4f7;
  height: 300px;
  padding: 48px 0;
`

export default function Reward() {
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
      <RewardSection>
        <RewardContainer>
          <RewardHeading>
            Connect your wallet <br /> {`to check if you've won!`}
          </RewardHeading>
          <RewardButtonWrapper>
            <ConnectKitButton />
          </RewardButtonWrapper>
        </RewardContainer>
      </RewardSection>
    )
  }
  if (isLoading) {
    return (
      <RewardSection>
        <RewardContainer>
          <RewardHeading>Loading...</RewardHeading>
        </RewardContainer>
      </RewardSection>
    )
  }
  if (isCheck) {
    return (
      <RewardSection>
        <RewardContainer>
          <RewardHeading>Are you a winner?</RewardHeading>
          <RewardButton onClick={handleCheck}>Check</RewardButton>
        </RewardContainer>
      </RewardSection>
    )
  }
  if (status !== LotteryStatus.Complete) {
    return (
      <RewardSection>
        <RewardContainer>
          <RewardHeading>
            Please check again, <br /> when the lottery is completed!
          </RewardHeading>
        </RewardContainer>
      </RewardSection>
    )
  }
  if (isWinner) {
    return (
      <RewardSection>
        <RewardContainer>
          <RewardHeading>You have won!</RewardHeading>
          <RewardButton onClick={handleClaim}>Claim</RewardButton>
        </RewardContainer>
      </RewardSection>
    )
  }
  return (
    <RewardSection>
      <RewardContainer>
        <RewardHeading>
          No prizes to collect, <br /> better luck next time!
        </RewardHeading>
      </RewardContainer>
    </RewardSection>
  )
}
