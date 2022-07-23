import { Box } from '@/components/Core/Toolkit'
import ClaimReward from './ClaimReward'
import Header from './Header'
import Hero from './Hero'
import History from './History'
import NextDraw from './NextDraw'

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
