import Head from 'next/head'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Main } from '@/components/layout/Main'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
        <link rel="icon" href="/main/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default HomePage
