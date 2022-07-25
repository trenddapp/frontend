const chains = {
  4: {
    urls: [process.env.infuraKey ? `https://rinkeby.infura.io/v3/${process.env.infuraKey}` : ''].filter(
      (url) => url !== '',
    ),
    name: 'Rinkeby',
  },
}

export default chains
