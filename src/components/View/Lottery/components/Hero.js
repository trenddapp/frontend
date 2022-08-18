import { useContext } from 'react'

import { BigNumber, ethers } from 'ethers'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { buyTicket } from '@/api/lottery'
import { CurrencyContext } from '@/context/Currency'
import { LotteryContext } from '@/context/Lottery'
import { LotteryStatus } from '@/config/constants/lottery'
import { useContractLottery } from '@/hooks/lottery'
import { useWeb3Signer } from '@/hooks'

const HeroBackgroundLeft = styled(Box)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/main/bg_home_left.svg');
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
    background-image: url('/main/bg_home_right.svg');
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

const Hero = () => {
  const { ethToUsdRate, ethToUsdRateError, ethToUsdRateIsLoading } = useContext(CurrencyContext)
  const {
    costPerTicket,
    costPerTicketError,
    costPerTicketIsLoading,
    prizePool,
    prizePoolError,
    prizePoolIsLoading,
    status,
    statusError,
    statusIsLoading,
  } = useContext(LotteryContext)
  const { contract: contractLottery, error: contractLotteryError } = useContractLottery()
  const signer = useWeb3Signer()
  const isBuyTicketDisabled =
    !statusIsLoading &&
    !statusError &&
    status !== LotteryStatus.OPEN &&
    !costPerTicketIsLoading &&
    !costPerTicketError &&
    !contractLotteryError &&
    !signer

  const handleBuyTicket = async () => {
    if (isBuyTicketDisabled) {
      return
    }

    try {
      const transaction = await buyTicket(contractLottery.connect(signer), costPerTicket)
      toast.promise(transaction.wait(), {
        error: 'Failed to buy a ticket!',
        pending: 'Waiting for the transaction!',
        success: 'Successfully bought a ticket!',
      })
    } catch (error) {
      toast.error('Failed to buy a ticket. Please try again!')
    }
  }

  const getHeroHeading = () => {
    if (statusIsLoading) {
      return <HeroHeading>Loading...</HeroHeading>
    }

    if (statusError !== undefined) {
      return <HeroHeading>Something went wrong!</HeroHeading>
    }

    if (status !== LotteryStatus.OPEN) {
      return <HeroHeading>Tickets on sale soon!</HeroHeading>
    }

    if (ethToUsdRateIsLoading || prizePoolIsLoading) {
      return <HeroHeading>Loading...</HeroHeading>
    }

    if (ethToUsdRateError !== undefined || prizePoolError !== undefined) {
      return <HeroHeading>Something went wrong!</HeroHeading>
    }

    return (
      <>
        <HeroPrize>
          ${ethers.utils.formatEther(BigNumber.from(Math.floor(ethToUsdRate.rate.value)).mul(prizePool))}
        </HeroPrize>
        <HeroHeading>in prizes!</HeroHeading>
      </>
    )
  }

  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeading>The TrendDapp Lottery</HeroHeading>
        {getHeroHeading()}
        <HeroButton disabled={isBuyTicketDisabled} onClick={handleBuyTicket}>
          Buy Ticket
        </HeroButton>
      </HeroContainer>
      <HeroBackgroundLeft />
      <HeroBackgroundRight />
    </HeroSection>
  )
}

export default Hero
