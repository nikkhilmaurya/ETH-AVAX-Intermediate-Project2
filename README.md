# ETH-AVAX-Intermediate-Project2

This Solidity program includes a simple contract which provides an implementation of an ATM using Ethereum and Solidity. The smart contract allows the contract owner (admin) to deposit, withdraw, set a withdrawal limit, and track transaction history. The frontend interface is implemented in React, enabling users to interact with the smart contract via MetaMask.

## Description

This Solidity contract implements a basic ATM system with functionalities including depositing and withdrawing funds, setting a withdrawal limit, and maintaining a transaction history. The contract owner (admin) has exclusive rights to perform deposits, withdrawals, and set withdrawal limits. The project also includes a React frontend to interact with the smart contract, allowing users to view their balance, transaction history, and perform deposit and withdrawal operations.

### Prerequisites

- Access to a web browser
- Internet connection
  
## Getting Started

### Executing SCM Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/


## Authors

Nikhil Maurya


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
