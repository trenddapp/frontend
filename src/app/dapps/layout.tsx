'use client'

import { getDefaultProvider } from 'ethers'
import { NftProvider } from 'use-nft'
import { CurrencyProvider } from 'lib/context/Currency'
import config from 'config'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <CurrencyProvider>
      <NftProvider fetcher={['ethers', { provider: getDefaultProvider(config.defaultRpcUrl) }]}>
        {props.children}
      </NftProvider>
    </CurrencyProvider>
  )
}
