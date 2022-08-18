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

export const getLottery = async (contract, id) => {
  const lottery = await contract.allLotteries(id)
  return {
    id: lottery.lotteryID.toNumber(),
    startedAt: lottery.startingTimestamp.toNumber() * 1000,
    prizePool: lottery.prizePool,
    winningAddress: lottery.winner,
    winningNumber: lottery.randomNumber.toString(),
  }
}

export const getLotteryId = async (contract) => {
  return await contract.lotteryID()
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
