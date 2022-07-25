import customAxios from '.'

const SERVICE_BASE = '/currency'

export const getRate = async (symbol) => {
  if (symbol === '') {
    throw new Error('getRate: invalid symbol')
  }

  const response = await customAxios.get(`${SERVICE_BASE}/rates/${symbol}`)
  return response.data
}
