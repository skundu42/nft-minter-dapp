/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");


module.exports = {
  networks: {
    hardhat: {
    },
    liberty: {
      url: "https://liberty20.shardeum.org/",
      chainId: 8081,
      accounts:[``]
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [``]
      },
    sphinx: {
        url: "https://sphinx.shardeum.org/",
        accounts: [``]
        }
  },
  solidity: "0.8.3",
};
