import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';
import ConnectWallet from '../components/ConnectWallet';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Decentralized Authentication & Privacy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your digital identity with blockchain technology. Take control of your privacy
            using Ethereum's decentralized infrastructure.
          </p>
          <div className="mt-8">
            <ConnectWallet />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Shield className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Secure Authentication</h3>
            <p className="text-gray-600">
              Authenticate securely using your Ethereum wallet. No passwords needed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Lock className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Privacy Control</h3>
            <p className="text-gray-600">
              Maintain complete control over your personal data with blockchain technology.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Key className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Decentralized Security</h3>
            <p className="text-gray-600">
              Your data is secured by Ethereum's decentralized network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;