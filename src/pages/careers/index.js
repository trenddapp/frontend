import Head from 'next/head'

import Careers from '@/components/View/Careers'

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>Careers | TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
      </Head>
      <Careers />
    </>
  )
}

export default CareersPage
