import Head from 'next/head'

import About from '@/components/View/About'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
      </Head>
      <About />
    </>
  )
}

export default AboutPage
