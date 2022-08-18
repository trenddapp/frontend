import { Box } from '@/components/Core/Toolkit'
import ClaimReward from './components/ClaimReward'
import Header from './components/Header'
import Hero from './components/Hero'
import History from './components/History'

const Lottery = () => {
  return (
    <Box>
      <Header />
      <Hero />
      {/* TODO: Add next draw section. */}
      <ClaimReward />
      <History />
    </Box>
  )
}

export default Lottery
