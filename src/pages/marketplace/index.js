import Head from 'next/head'

import Marketplace from '@/components/View/Marketplace'

const MarketplacePage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp | Marketplace</title>
        <meta name="description" content="Decentralized marketplace by TrendDapp." />
      </Head>
      <Marketplace />
    </>
  )
}

MarketplacePage.customPropDisplayName = 'MarketplacePage'

export default MarketplacePage
