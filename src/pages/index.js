import Head from 'next/head'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'

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
