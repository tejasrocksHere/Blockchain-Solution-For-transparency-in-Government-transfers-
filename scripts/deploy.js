const hre = require("hardhat");

async function main() {
  const Transfer = await hre.ethers.getContractFactory("Transfer");
  const contract = await Transfer.deploy();

  await contract.deployed();
  console.log("Address of contract: ", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});