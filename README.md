# 🌾 **AgroTrace**  
### _Blockchain-Based Supply Chain Transparency for Agricultural Produce_ 

![Built with Solidity](https://img.shields.io/badge/Built%20with-Solidity-363636.svg?logo=ethereum)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2C%20CSS%2C%20JavaScript-blue.svg)
![Blockchain](https://img.shields.io/badge/Blockchain-Ethereum%20%7C%20Hardhat%20%7C%20MetaMask-purple.svg)
![Hackathon](https://img.shields.io/badge/Event-Hackathon%206.0%20Version%20-orange.svg)

Documentation - https://docs.google.com/document/d/1HE99jMUrNg39NhvZCS5nE1CZdynLnT3b7KTrm1Jc7-U/edit?usp=sharing
---

## 🌍 **Overview**

**AgroTrace** is a **blockchain-powered supply chain platform** designed to bring **transparency, authenticity, and trust** to agricultural product tracking — from the **farmer** to the **consumer**.  

By leveraging **Ethereum smart contracts**, AgroTrace records every transaction in a **tamper-proof ledger**, allowing stakeholders to verify the entire product journey.

> 🚀 _Developed by **Team Algro** for Hackathon 6.0  under the Software Category._

---
## 👥 **Team Algro**

| Name                     | Role        | Email                                                       | 
| ------------------------ | ----------- | ----------------------------------------------------------- | 
| **Harshvardhan Asnade**  | Team Leader | [harshasnade1@gmail.com](mailto:harshasnade1@gmail.com)     | 
| **Vaishnavi Baban Tupe** | Member      | [vaishutupe8@gmail.com](mailto:vaishutupe8@gmail.com)       | 
| **Mayank Singh**         | Member      | [mayankbrawler@gmail.com](mailto:mayankbrawler@gmail.com)   | 
| **Suyash Lahure**        | Member      | [suyashlahure@gmail.com](mailto:suyashlahure@gmail.com)     | 
| **Prince Raj**           | Member      | [prince271004@gmail.com](mailto:prince271004@gmail.com)     | 
| **Mandal Sathwik**       | Member      | [mandalkrish480@gmail.com](mailto:mandalkrish480@gmail.com) | 

---

## 🏆 **Hackathon Details**

* **Event:** Hackathon 6.0
* **Theme:** Blockchain-Based Supply Chain Transparency for Agricultural Produce
* **Category:** Software
* **Team Name:** Algro
---

## 🧩 **Key Features**

✅ Blockchain-based product traceability  
✅ Role-based access (Farmer, Distributor, Retailer, Consumer)  
✅ Transparent and tamper-proof transactions  
✅ Real-time product journey visualization  
✅ Simple and intuitive web interface  

---

## 🏗️ **Project Structure**

```

.
├── contracts/               # Solidity smart contracts
│   ├── Lock.sol             # Example Lock contract
│   └── SimpleStorage.sol    # Core storage contract
│
├── frontend/                # Frontend web application
│   ├── app.js               # Main frontend logic
│   ├── consumer.html        # Consumer dashboard
│   ├── distributor.html     # Distributor dashboard
│   ├── farmer.html          # Farmer dashboard
│   ├── retailer.html        # Retailer dashboard
│   ├── index.html           # Landing page
│   ├── contract.js          # Smart contract interactions
│   ├── contractData.json    # ABI and address
│   ├── login.html           # Login page
│   ├── landing-styles.css   # Landing page styles
│   ├── signup-styles.css    # Signup page styles
│   └── assets/              # Images and icons
│       ├── logo.svg
│       └── logo-light.svg
│
├── ignition/                # Hardhat Ignition deployment
│   └── modules/
│       └── Lock.js
│
├── scripts/
│   └── deploy.js            # Smart contract deployment
│
├── test/
│   └── Lock.js              # Unit tests
│
├── DOCUMENTATION.md
├── hardhat.config.js
├── package.json
├── package-lock.json
└── README.md

````

---

## ⚙️ **Setup & Installation**

### 🧠 Prerequisites
- [Node.js](https://nodejs.org/) & npm  
- [Hardhat](https://hardhat.org/)  
- [Metamask](https://metamask.io/) (for contract interaction)

### 💻 Installation Steps

```bash
# Clone the repository
git clone https://github.com/Harshvardhan-Asnade/AgroTrace-By-Team-Algro--Hackathon-6.0-Version-2.git

# Navigate into the directory
cd AgroTrace-By-Team-Algro--Hackathon-6.0-Version-2

# Install dependencies
npm install
````

---

## 🚀 **Usage Guide**

1. **Start the local blockchain node**

   ```bash
   npx hardhat node
   ```

2. **Deploy the smart contracts**

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

3. **Start the frontend server**

   ```bash
   cd frontend
   npx http-server
   ```

4. **Access the application**

   * Open your browser and go to 👉 [http://localhost:8080](http://localhost:8080)

---

## 🧠 **Tech Stack**

| Layer               | Technologies Used                      |
| :------------------ | :------------------------------------- |
| **Blockchain**      | Solidity, Hardhat, Ethereum            |
| **Frontend**        | HTML, CSS, JavaScript                  |
| **Tools**           | Node.js, Hardhat Ignition, HTTP-Server |
| **Version Control** | Git & GitHub                           |

---


 

---

### 🌟 *“Empowering farmers, ensuring trust, and building transparency with Blockchain.”*

<p align="center">
  <img src="frontend/assets/logo.svg" width="100" alt="AgroTrace Logo">
</p>

---

```

