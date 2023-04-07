/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


module.exports = {
  networks: {
    hardhat: {
    },
    liberty: {
      url: "https://liberty20.shardeum.org/",
      chainId: 8081,
      accounts:[process.env.pk]
    },
  },
  solidity: "0.8.3",
};
