import useSWR from 'swr'
import { getCostPerTicket, getLotteryId, getPrizePool, getStatus } from 'lib/api/lottery'
import { useContractLottery } from 'lib/hook'
import config from 'config'
import Context from './Context'

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const { contract } = useContractLottery({})
  const { data: costPerTicket, error: costPerTicketError } = useSWR(
    contract !== undefined ? ['cost-per-ticket', contract] : null,
    (_, contract) => getCostPerTicket(contract),
    { refreshInterval: 0 },
  )
  const { data: lotteryId, error: lotteryIdError } = useSWR(
    contract !== undefined ? ['id', contract] : null,
    (_, contract) => getLotteryId(contract),
    { refreshInterval: 0 },
  )
  const { data: prizePool, error: prizePoolError } = useSWR(
    contract !== undefined ? ['prize-pool', contract] : null,
    (_, contract) => getPrizePool(contract),
    { refreshInterval: config.lotteryPrizePoolRefreshIntervalMs },
  )
  const { data: status, error: statusError } = useSWR(
    contract !== undefined ? ['status', contract] : null,
    (_, contract) => getStatus(contract),
    { refreshInterval: config.lotteryStatusRefreshIntervalMs },
  )
  return (
    <Context.Provider
      value={{
        costPerTicket,
        costPerTicketError,
        lotteryId,
        lotteryIdError,
        prizePool,
        prizePoolError,
        status,
        statusError,
      }}
    >
      {children}
    </Context.Provider>
  )
}
