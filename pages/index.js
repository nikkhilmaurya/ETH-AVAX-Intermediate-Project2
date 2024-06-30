import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [transactions, setTransactions] = useState([]);
  const [withdrawalLimit, setWithdrawalLimit] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    } else {
      console.log("MetaMask not found");
    }

    if (ethWallet) {
      try {
        const accounts = await ethWallet.request({ method: "eth_accounts" });
        handleAccount(accounts);
      } catch (error) {
        console.error("Error getting accounts:", error);
      }
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    try {
      const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
      handleAccount(accounts);
      getATMContract();
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  const getATMContract = () => {
    if (!ethWallet) {
      console.error("Ethereum wallet is not available");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
    console.log("ATM contract set:", atmContract);
  };

  const getBalance = async () => {
    if (atm) {
      try {
        const balance = await atm.getBalance();
        setBalance(balance.toNumber());
      } catch (error) {
        console.error("Error getting balance:", error);
      }
    }
  };

  const getTransactionHistory = async () => {
    if (atm) {
      try {
        const transactions = await atm.getTransactionHistory();
        setTransactions(transactions.map(tx => ({
          ...tx,
          amount: tx.amount.toNumber(),
          timestamp: tx.timestamp.toNumber()
        })));
      } catch (error) {
        console.error("Error getting transaction history:", error);
      }
    }
  };

  const deposit = async () => {
    if (atm) {
      try {
        let tx = await atm.deposit(1);
        await tx.wait();
        getBalance();
        getTransactionHistory();
      } catch (error) {
        console.error("Error depositing:", error);
      }
    }
  };

  const withdraw = async () => {
    if (atm) {
      try {
        let tx = await atm.withdraw(1);
        await tx.wait();
        getBalance();
        getTransactionHistory();
      } catch (error) {
        console.error("Error withdrawing:", error);
      }
    }
  };

  const setLimit = async () => {
    const limit = parseInt(prompt("Enter the new withdrawal limit:"));
    if (atm && limit >= 0) {
      try {
        let tx = await atm.setWithdrawalLimit(limit);
        await tx.wait();
        setWithdrawalLimit(limit);
      } catch (error) {
        console.error("Error setting withdrawal limit:", error);
      }
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this ATM.</p>;
    }

    if (!account) {
      return <button onClick={connectAccount}>Connect MetaMask</button>;
    }

    if (balance === undefined) {
      getBalance();
    }

    if (transactions.length === 0) {
      getTransactionHistory();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <p>Withdrawal Limit: {withdrawalLimit}</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
        <button onClick={setLimit}>Set Withdrawal Limit</button>
        <h2>Transaction History</h2>
        <ul>
          {transactions.map((txn, index) => (
            <li key={index}>
              {txn.amount} ETH - {txn.txnType} - {new Date(txn.timestamp * 1000).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header><h1>Welcome to the Nikhil Maurya's ATM!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </main>
  );
}
