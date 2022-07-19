import Communication from './Communication'
import Development from './Development'
import Hero from './Hero'
import Services from './Services'
import Technologies from './Technologies'

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
