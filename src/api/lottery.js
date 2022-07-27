export const buyTicket = async (contract, costPerTicket) => {
  return await contract.buyTicket({
    value: costPerTicket,
  })
}

export const getCostPerTicket = async (contract) => {
  return await contract.costPerTicket()
}

export const getPrizePool = async (contract) => {
  return await contract.prizePool()
}

export const getStatus = async (contract) => {
  return await contract.lotteryStatus()
}
