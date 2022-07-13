import Head from 'next/head'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Main from '@/components/View/Home'

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
