import Head from 'next/head'

import Auction from '@/components/View/Auction'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const AuctionPage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp | Auction</title>
        <meta name="description" content="Decentralized auction by TrendDapp." />
        <link rel="icon" href="/main/favicon.png" />
      </Head>
      <Header />
      <Auction />
      <Footer />
    </>
  )
}

export default AuctionPage
