import Head from 'next/head'

import Auction from '@/components/View/Auction'

const AuctionPage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp | Auction</title>
        <meta name="description" content="Decentralized auction by TrendDapp." />
      </Head>
      <Auction />
    </>
  )
}

AuctionPage.customPropDisplayName = 'AuctionPage'

export default AuctionPage
