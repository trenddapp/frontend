import Head from 'next/head'

import LogoKit from '@/components/View/LogoKit'

const LogoPage = () => {
  return (
    <>
      <Head>
        <title>Logo Kit | TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
      </Head>
      <LogoKit />
    </>
  )
}

export default LogoPage
