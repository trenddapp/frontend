import Head from 'next/head'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Lottery from '@/components/View/Lottery'

const LotteryPage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp | Lottery</title>
        <meta name="description" content="Decentralized lottery by TrendDapp." />
        <link rel="icon" href="/main/favicon.png" />
      </Head>
      <Header />
      <Lottery />
      <Footer />
    </>
  )
}

export default LotteryPage
