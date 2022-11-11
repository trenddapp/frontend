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
    5: '0xf7FC67f103cF08a23F243dC51f14bDe43eaD68Cf',
  },
}

const wagmi = createClient(
  getDefaultClient({
    appName: 'Trenddapp',
    autoConnect: true,
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    chains: [chain.goerli],
  }),
)

const config = {
  abi,
  address,
  currencyRateRefreshIntervalMs: 3600000,
  defaultChainId: 5,
  defaultRpcUrl: 'https://eth-goerli.g.alchemy.com/v2/GjUP2SB2uZdWDqnEN3pq6Fe2k0jEAjWo',
  lotteryPrizePoolRefreshIntervalMs: 20000,
  lotteryStatusRefreshIntervalMs: 30000,
  wagmi,
}

export default config
