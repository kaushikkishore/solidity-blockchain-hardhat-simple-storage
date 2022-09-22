const { ethers } = require("hardhat");
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
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
