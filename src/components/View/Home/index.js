import Communication from './components/Communication'
import Development from './components/Development'
import Hero from './components/Hero'
import Services from './components/Services'
import Technologies from './components/Technologies'

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Technologies />
      <Development />
      <Communication />
    </main>
  )
}

export default Home
