import { ethers } from 'ethers'

export enum LotteryStatus {
  Unspecified,
  Open,
  Closed,
  Complete,
}

export async function buyTicket(contract: ethers.Contract, costPerTicket) {
  return await contract.buyTicket({
    value: costPerTicket,
  })
}

export async function claimReward(contract: ethers.Contract) {
  return await contract.claimReward()
}

export async function getCostPerTicket(contract: ethers.Contract) {
  return await contract.costPerTicket()
}

export async function getLottery(contract: ethers.Contract, id: number) {
  const lottery = await contract.allLotteries(id)
  return {
    id: lottery.lotteryID.toNumber(),
    startedAt: lottery.startingTimestamp.toNumber() * 1000,
    prizePool: lottery.prizePool,
    winningAddress: lottery.winner,
    winningNumber: lottery.randomNumber.toString(),
  }
}

export async function getLotteryId(contract: ethers.Contract): Promise<number> {
  return await contract.lotteryID()
}

export async function getPrizePool(contract: ethers.Contract) {
  return await contract.prizePool()
}

export async function getStatus(contract: ethers.Contract) {
  return await contract.lotteryStatus()
}

export async function getWinner(contract: ethers.Contract) {
  return await contract.winner()
}
