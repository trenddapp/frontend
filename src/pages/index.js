import Head from 'next/head'

import Home from '@/components/View/Home'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
      </Head>
      <Home />
    </>
  )
}

export default HomePage
