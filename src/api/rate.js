import apiCaller from '.'

const SERVICE_BASE = 'currency/rates'

const getRate = async () => {
  return await apiCaller().get(`${SERVICE_BASE}/eth-usd`)
}

export { getRate }
