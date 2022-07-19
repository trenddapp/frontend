import Head from 'next/head'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Marketplace from '@/components/View/Marketplace'

const MarketplacePage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp | Marketplace</title>
        <meta name="description" content="Decentralized marketplace by TrendDapp." />
        <link rel="icon" href="/main/favicon.png" />
      </Head>
      <Header />
      <Marketplace />
      <Footer />
    </>
  )
}

export default MarketplacePage
