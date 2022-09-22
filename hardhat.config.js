require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const RPC_URL = process.env.GOERLI_RPC_URL;
const ACCOUNT = process.env.GOERLI_API_KEY;

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
};
