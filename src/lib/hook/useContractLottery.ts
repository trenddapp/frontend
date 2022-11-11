import { ethers } from 'ethers'
import { useContract } from 'wagmi'
import config from 'config'
import useConnector from './useConnector'

interface Input {
  signer?: ethers.Signer
}

interface Output {
  contract?: ethers.Contract
}

export default function useContractLottery({ signer }: Input): Output {
  const { provider } = useConnector()
  const contract = useContract({
    address: config.address.lottery[config.defaultChainId],
    abi: config.abi.lottery,
    signerOrProvider: signer || provider,
  })
  return { contract: contract === null ? undefined : contract }
}
