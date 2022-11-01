// getEtherscanUrl generates Etherscan url given an address.
export function getEtherscanUrl(address: string) {
  return 'https://goerli.etherscan.io/address/' + address
}

// shortenAddress returns a smaller version of the given address.
export function shortenAddress(address: string) {
  if (address.length !== 42) {
    return '0x0...000'
  }
  return `${address.slice(0, 3)}...${address.slice(39, 42)}`
}
