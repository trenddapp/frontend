'use client'

import { useContext } from 'react'
import { BigNumber, ethers } from 'ethers'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'
import { Button } from 'lib/component/Button'
import { buyTicket, LotteryStatus } from 'lib/api/lottery'
import { LotteryContext } from 'lib/context/Lottery'
import { useConnector, useContractLottery, useCurrency } from 'lib/hook'

const HeroBackgroundLeft = styled(Box)`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/dapps/lottery/background-left.svg');
    background-position-x: 0;
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    z-index: 0;
  }
`

const HeroBackgroundRight = styled(Box)`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/dapps/lottery/background-right.svg');
    background-position-x: 100%;
    background-position-y: 0;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    z-index: 0;
  }
`

const HeroButton = styled(Button)`
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 30px 0 0 0;
  padding: 11px 35px;
  width: 240px;
  &:hover {
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
  }
`

const HeroContainer = styled(Flex)`
  align-items: center;
  color: #fff;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  z-index: 1;
`

const HeroHeading = styled.h2`
  font-size: 18px;
  font-weight: 400;
`

const HeroPrize = styled.span`
  font-size: 60px;
  font-weight: 600;
`

const HeroSection = styled.section`
  background-color: #282846;
  height: 450px;
  position: relative;
`

export default function Hero() {
  const { signer } = useConnector()
  const { contract } = useContractLottery({ signer })
  const { data: rate, error: rateError } = useCurrency('eth-usd')
  const { costPerTicket, costPerTicketError, prizePool, prizePoolError, status, statusError } =
    useContext(LotteryContext)
  const handleBuyTicket = async () => {
    if (
      contract === undefined ||
      costPerTicket === undefined ||
      signer === undefined ||
      status !== LotteryStatus.Open
    ) {
      return
    }
    try {
      const transaction = await buyTicket(contract, costPerTicket)
      toast.promise(transaction.wait(), {
        error: 'Failed to buy a ticket!',
        pending: 'Waiting for the transaction!',
        success: 'Successfully bought a ticket!',
      })
    } catch (error) {
      toast.error('Failed to buy a ticket. Please try again!')
    }
  }
  if (
    (costPerTicket === undefined && costPerTicketError === undefined) ||
    (prizePool === undefined && prizePoolError === undefined) ||
    (rate === undefined && rateError === undefined) ||
    (status === undefined && statusError === undefined)
  ) {
    return (
      <HeroSection>
        <HeroContainer>
          <HeroHeading>The Trenddapp Lottery</HeroHeading>
          <HeroHeading>loading...</HeroHeading>
        </HeroContainer>
      </HeroSection>
    )
  }
  if (
    costPerTicket === undefined ||
    costPerTicketError !== undefined ||
    prizePool === undefined ||
    prizePoolError !== undefined ||
    rate === undefined ||
    rateError !== undefined ||
    status === undefined ||
    statusError !== undefined
  ) {
    return (
      <HeroSection>
        <HeroContainer>
          <HeroHeading>The Trenddapp Lottery</HeroHeading>
          <HeroHeading>something went wrong!</HeroHeading>
        </HeroContainer>
      </HeroSection>
    )
  }
  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeading>The TrendDapp Lottery</HeroHeading>
        {status === LotteryStatus.Open ? (
          <>
            <HeroPrize>${ethers.utils.formatEther(BigNumber.from(Math.floor(rate.value)).mul(prizePool))}</HeroPrize>
            <HeroHeading>in prizes!</HeroHeading>
          </>
        ) : (
          <HeroHeading>next round starting soon!</HeroHeading>
        )}
        <HeroButton onClick={handleBuyTicket}>Buy Ticket</HeroButton>
      </HeroContainer>
      <HeroBackgroundLeft />
      <HeroBackgroundRight />
    </HeroSection>
  )
}
