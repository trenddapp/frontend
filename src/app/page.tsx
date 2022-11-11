'use client'

import { Communication, Development, Hero, Service, Technology } from 'lib/component/Home'

export default function Page() {
  return (
    <>
      <Hero />
      <Service />
      <Technology />
      <Development />
      <Communication />
    </>
  )
}
