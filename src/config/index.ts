import { chain, createClient } from 'wagmi'
import { getDefaultClient } from 'connectkit'
import lottery from './abi/lottery.json'

const abi: {
  [key: string]: any
} = {
  lottery,
}

const address: {
  [key: string]: {
    [key: number]: string
  }
} = {
  lottery: {
    5: '0x5248bC37FB71130F429A6b0010dEC62d51035432',
    80001: '0xbFe62968C240e9282Eee4e533609D937858213d3',
  },
}

const wagmi = createClient(
  getDefaultClient({
    appName: 'Trenddapp',
    autoConnect: true,
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    chains: [chain.polygonMumbai],
  }),
)

const config = {
  abi,
  address,
  currencyRateRefreshIntervalMs: 3600000,
  defaultChainId: 0xbfe62968c240e9282eee4e533609d937858213d3,
  defaultRpcUrl: 'https://polygon-mumbai.g.alchemy.com/v2/vLJ5L5Tao4fW5zPKU-yRnhRVPC6pGSob',
  lotteryPrizePoolRefreshIntervalMs: 20000,
  lotteryStatusRefreshIntervalMs: 30000,
  wagmi,
}

export default config
