import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask to use this feature!');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!isConnected ? (
        <button
          onClick={connectWallet}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors"
        >
          <Wallet className="h-5 w-5" />
          <span>Connect Wallet</span>
        </button>
      ) : (
        <div className="text-gray-700 flex items-center space-x-2">
          <Wallet className="h-5 w-5" />
          <span>Connected: {account.slice(0, 6)}...{account.slice(-4)}</span>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;