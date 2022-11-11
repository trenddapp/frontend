'use client'

import { ClaimReward } from './component/ClaimReward'
import { Hero } from './component/Hero'
import { History } from './component/History'

export default function Page() {
  return (
    <>
      <Hero />
      <ClaimReward />
      <History />
    </>
  )
}
