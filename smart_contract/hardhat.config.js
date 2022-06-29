require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/6i5L_tok3g5wamJSJN1GR-jpCEuZrBg9',
      accounts: ['20f4e40d187e608285aa8f5f4223004d2b474b27002498778c144b0a82db3c72'],
    },
  },
};