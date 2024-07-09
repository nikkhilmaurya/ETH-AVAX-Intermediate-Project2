# ETH-AVAX-Intermediate-Project2 from Metacrafters

Welcome to the ETH-AVAX Intermediate Project 2! This project showcases an Ethereum-based ATM system implemented with a Solidity smart contract and a React frontend that interacts with the contract via MetaMask. The ATM system allows users to deposit and withdraw Ether, check balances, and set a withdrawal limit. The React frontend provides a seamless user interface to perform these operations and manage the account.

# Description

This Smart Contract contract implements a basic ATM system with functionalities including depositing and withdrawing funds, setting a withdrawal limit, and maintaining a transaction history. The contract owner (admin) has exclusive rights to perform deposits, withdrawals, and set withdrawal limits. The project also includes a React frontend to interact with the smart contract, allowing users to view their balance, transaction history, and perform deposit and withdrawal operations.

## Smart Contract (Assessment.sol Solidity File)

The Solidity contract, `Assessment`, defines an ATM system with the following features:

- **Owner Initialization**: The contract is initialized with an owner and a specified initial balance.
- **Balance Management**: Users can check the current balance of the contract.
- **Deposit Function**: The owner can deposit Ether into the contract, which updates the balance and records the transaction.
- **Withdraw Function**: The owner can withdraw Ether from the contract, with custom error handling for insufficient balance and a withdrawal limit check. The balance is updated, and the transaction is recorded.
- **Set Withdrawal Limit**: The owner can set a limit on the amount that can be withdrawn in a single transaction.
- **Transaction History**: All deposit and withdrawal transactions are recorded and can be retrieved.

## Frontend (Index.js File)

The React component, `HomePage`, integrates MetaMask for account connectivity and interacts with the Solidity contract with the following functionality:

- **MetaMask Integration**: Checks if MetaMask is installed, connects the user's account, and retrieves the ATM contract.
- **Account Management**: Handles the connected account by setting it to state and logging it.
- **Balance Display**: Retrieves and displays the current balance of the user's account.
- **Transaction Management**: Allows the user to deposit and withdraw Ether, and retrieves the transaction history to display it.
- **Set Withdrawal Limit**: Provides an interface for the user to set a withdrawal limit on the contract.
- **User Interface**: Displays account and balance information along with buttons to perform deposit, withdraw, and set withdrawal limit actions. Also shows the transaction history.

This project combines the power of Solidity for smart contract development with a React frontend to provide a user-friendly interface for interacting with the Ethereum blockchain.

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. **Node.js and npm**: Make sure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

2. **Git**: Ensure you have Git installed. You can download it from [here](https://git-scm.com/).

3. **MetaMask**: Install the MetaMask extension in your browser from [here](https://metamask.io/).

4. **VS Code**: It's recommended to use Visual Studio Code for this project. Download it from [here](https://code.visualstudio.com/).
  
# Getting Started

## Installing

1. Clone the repository:
   ```
   git clone https://github.com/nikkhilmaurya/ETH-AVAX-Intermediate-Project2

   ```
2. Navigate to the project directory:
   ```
   cd ETH-AVAX-Intermediate-Project2
   ```
3. Install the necessary dependencies:
   ```
   npm install
   ```
   
## Executing Starter Next/Hardhat Project

After cloning the github, you will be required to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type:
   ```
    npm i
   ```
2. Open two additional terminals in your VS code
3. In the second terminal type:
   ```
    npx hardhat node
   ```
4. In the third terminal, type:
   ```
   npx hardhat run --network localhost scripts/deploy.js
   ```
5. Back in the first terminal, type:
   ```
   npm run dev
   ```
    It will start the local host and launch the front-end.
   
6. After this, the project will be running on your localhost. 
Typically at http://localhost:3000/


# Connecting to MetaMask

1. Make sure MetaMask is installed in your browser.
2. Now select Add network and select network manually by providing the chain id and network url after compiling the deployment script.
3. Switch MetaMask to the local network.
4. When prompted, connect MetaMask to the application by clicking the "Please connect your MetaMask wallet" button.
   
## Help

1. **Dependencies**: Ensure you have installed all necessary dependencies by running `npm install` in the project directory.
2. **Hardhat Node**: Verify that the Hardhat node is running by using the command `npx hardhat node`. This should be done in a separate terminal.
3. **Contract Deployment**: Ensure that the contract has been deployed using the command `npx hardhat run --network localhost scripts/deploy.js`. This should be executed in another separate terminal.
4. **MetaMask Connection**: Confirm that your MetaMask wallet is connected to the correct network and account. You can do this by checking the network settings in MetaMask and ensuring it matches your local network configuration.

If you encounter any issues, make sure to follow the steps carefully and double-check your configurations. For additional support, consider referring to the official documentation for Hardhat and MetaMask.

## Authors

Nikhil Maurya

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
