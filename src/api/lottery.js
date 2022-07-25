import { ethers } from 'ethers'

export const getCostPerTicket = async (contract) => {
  const costPerTicketWei = await contract.costPerTicket()
  return parseFloat(ethers.utils.formatEther(costPerTicketWei))
}

export const getPrizePool = async (contract) => {
  const prizePoolWei = await contract.prizePool()
  return parseFloat(ethers.utils.formatEther(prizePoolWei))
}

export const getStatus = async (contract) => {
  return await contract.lotteryStatus()
}
