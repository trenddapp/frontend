import customAxios from '.'

const SERVICE_BASE = '/currency'

export interface Rate {
  symbol: string
  value: number
}

export async function getRate(symbol: string) {
  const { data } = await customAxios.request<{ rate: Rate }>({
    method: 'get',
    url: `${SERVICE_BASE}/rates/${symbol}`,
  })
  return data.rate
}
