const { ethers, run, network } = require("hardhat");
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log(`Deploying the contract`);
  const simpleStorage = await SimpleStorageFactory.deploy();
  // Wait for the deployment to finish.
  await simpleStorage.deployed;

  // HArdhat have internal blockchain network, where this code is getting deployed.
  // The network is similar to ganache
  // yarn hardhat run scripts/deploy.js --network hardhat

  // TO change the network change the hardhat.config.js file.
  // To deploy to your network you need RPC URL
  // and API_Key which can get from metamask

  console.log(`Deployed contract to ${simpleStorage.address}`);

  // console.log(network.config);
  // No need to call this when you are working on your local network
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(7);
    await verify(simpleStorage.address, []);
  }

  // Access the contract function
  const value = await simpleStorage.getValue();
  console.log(`Current value = ${value}`);

  const transactionResponse = await simpleStorage.setValue(1203);
  await transactionResponse.wait(1);

  const updatedValue = await simpleStorage.getValue();
  console.log(`Updated Value = ${updatedValue}`);
}

async function verify(contractAddress, args) {
  console.log(`Verifying the contract ${contractAddress}`);
  // look for the yarn hardhat verify --help

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log(`Contract already verified`);
    } else {
      console.log(`We ran to an error ${e.message}`);
      console.log(e);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
