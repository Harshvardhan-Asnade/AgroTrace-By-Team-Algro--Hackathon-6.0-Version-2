let contract, signer;

async function initContract() {
  // Load deployed contract data (ABI + address)
  const data = await fetch("contractData.json").then(res => res.json());

  // Connect to MetaMask
  const provider = new ethers.ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();

  // Create contract instance
  contract = new ethers.ethers.Contract(data.address, data.abi, signer);
}