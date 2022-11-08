'use client'

import { Communication, Development, Hero, Service, Technology } from 'lib/component/Home'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Service />
      <Technology />
      <Development />
      <Communication />
    </main>
  )
}
