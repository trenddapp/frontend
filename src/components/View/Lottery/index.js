import { Box } from '@/components/Core/Toolkit'
import ClaimReward from './components/ClaimReward'
import Header from './components/Header'
import Hero from './components/Hero'
import History from './components/History'
import NextDraw from './components/NextDraw'

const Lottery = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <NextDraw />
      <ClaimReward />
      <History />
    </Box>
  )
}

export default Lottery
