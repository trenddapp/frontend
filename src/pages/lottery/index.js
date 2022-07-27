import Head from 'next/head'

import { CurrencyProvider } from '@/context/Currency'
import { LotteryProvider } from '@/context/Lottery'
import Lottery from '@/components/View/Lottery'

const LotteryPage = () => {
  return (
    <>
      <Head>
        <title>Lottery | TrendDapp</title>
        <meta name="description" content="Decentralized lottery by TrendDapp." />
      </Head>
      <CurrencyProvider>
        <LotteryProvider>
          <Lottery />
        </LotteryProvider>
      </CurrencyProvider>
    </>
  )
}

LotteryPage.customPropDisplayName = 'LotteryPage'

export default LotteryPage
