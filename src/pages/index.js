import Head from 'next/head'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Home from '@/components/View/Home'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
        <link rel="icon" href="/main/favicon.png" />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default HomePage
