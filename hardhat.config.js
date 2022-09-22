require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

require("./tasks/block-number");

/** @type import('hardhat/config').HardhatUserConfig */
const RPC_URL = process.env.GOERLI_RPC_URL;
const ACCOUNT = process.env.GOERLI_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

// You can find the chainId using - https://chainlist.org/
module.exports = {
  solidity: "0.8.8",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: RPC_URL,
      accounts: [ACCOUNT],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
