const fs = require("fs");
const hre = require("hardhat");

async function main() {
  // Get the ContractFactory for AgriTrace
  const AgriTrace = await hre.ethers.getContractFactory("AgriTrace");

  // Deploy the contract (Ethers v6)
  const agriTrace = await AgriTrace.deploy();
  await agriTrace.waitForDeployment(); // ⬅ Ethers v6 syntax

  // Get the deployed contract address
  const contractAddress = await agriTrace.getAddress();
  console.log("Contract deployed at:", contractAddress);

  // Get contract ABI from artifacts
  const artifact = await hre.artifacts.readArtifact("AgriTrace");

  // Write to frontend
  const frontendPath = "./frontend";
  if (!fs.existsSync(frontendPath)) {
    fs.mkdirSync(frontendPath);
  }

  fs.writeFileSync(
    `${frontendPath}/contractData.json`,
    JSON.stringify(
      {
        address: contractAddress,
        abi: artifact.abi,
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error("Deployment error:", err);
  process.exit(1);
});