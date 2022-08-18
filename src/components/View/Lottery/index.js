import ClaimReward from './components/ClaimReward'
import Header from './components/Header'
import Hero from './components/Hero'
import History from './components/History'

const Lottery = () => {
  return (
    <main>
      <Header />
      <Hero />
      {/* TODO: Add next draw section. */}
      <ClaimReward />
      <History />
    </main>
  )
}

export default Lottery
