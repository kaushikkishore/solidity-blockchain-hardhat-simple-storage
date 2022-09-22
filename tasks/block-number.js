const { task } = require("hardhat/config");

// This task need to added in hardhat config file
// to invoke this task you need to run this command
// yarn harhat block-number --network goerli
// the below one will give the local network block number
// yarn hardhat block-number
task("block-number", "prints the current block number").setAction(
  // hre is hardhat runtime environment
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number ${blockNumber}`);
  }
);

module.exports = {};
