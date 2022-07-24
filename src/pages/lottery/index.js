import Head from 'next/head'

import Lottery from '@/components/View/Lottery'

const LotteryPage = () => {
  return (
    <>
      <Head>
        <title>Lottery | TrendDapp</title>
        <meta name="description" content="Decentralized lottery by TrendDapp." />
      </Head>
      <Lottery />
    </>
  )
}

export default LotteryPage
