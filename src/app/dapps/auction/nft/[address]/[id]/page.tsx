'use client'

import { Wip } from 'lib/component/Wip'

interface PageProps {
  params: {
    address: string
    id: string
  }
}

export default function Page() {
  return <Wip />
}
