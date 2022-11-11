'use client'

import { useContext } from 'react'
import { BigNumber, ethers } from 'ethers'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'
import { buyTicket, LotteryStatus } from 'lib/api/lottery'
import { CurrencyContext } from 'lib/context/Currency'
import { LotteryContext } from 'lib/context/Lottery'
import { useConnector, useContractLottery } from 'lib/hook'

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

const HeroButton = styled.a`
  background-color: rgb(78, 94, 228);
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 30px 0 0 0;
  padding: 11px 35px;
  text-align: center;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s, transform 0.4s ease 0s;
  width: 240px;
  &:hover {
    background-color: rgb(67, 81, 197);
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
    color: rgb(255, 255, 255);
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
  const currency = useContext(CurrencyContext)
  const rate = currency?.['eth-usd']?.rate
  const rateError = currency?.['eth-usd']?.error
  // prettier-ignore
  const { 
    costPerTicket,
    prizePool,
    prizePoolError,
    status,
    statusError,
  } = useContext(LotteryContext)
  console.log(status)
  console.log(statusError)
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
  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeading>The TrendDapp Lottery</HeroHeading>
        {statusError === undefined && status !== LotteryStatus.Open ? (
          <HeroHeading>Next round starting soon!</HeroHeading>
        ) : prizePool !== undefined && status === LotteryStatus.Open && rate !== undefined ? (
          <>
            <HeroPrize>${ethers.utils.formatEther(BigNumber.from(Math.floor(rate.value)).mul(prizePool))}</HeroPrize>
            <HeroHeading>in prizes!</HeroHeading>
          </>
        ) : prizePoolError !== undefined || statusError !== undefined || rateError !== undefined ? (
          <HeroHeading>Something went wrong!</HeroHeading>
        ) : (
          <HeroHeading>Loading...</HeroHeading>
        )}
        <HeroButton onClick={handleBuyTicket}>Buy Ticket</HeroButton>
      </HeroContainer>
      <HeroBackgroundLeft />
      <HeroBackgroundRight />
    </HeroSection>
  )
}
