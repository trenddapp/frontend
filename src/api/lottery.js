export const buyTicket = async (contract, costPerTicket) => {
  return await contract.buyTicket({
    value: costPerTicket,
  })
}

export const claimReward = async (contract) => {
  return await contract.claimReward()
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

export const getWinner = async (contract) => {
  return await contract.winner()
}
