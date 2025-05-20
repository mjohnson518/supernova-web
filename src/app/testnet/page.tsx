import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../components/layout/MainLayout';
import { FaucetForm } from '../../../components/testnet/FaucetForm';

export const metadata: Metadata = {
  title: "Supernova Testnet & Faucet | Developer Resources",
  description: "Access Supernova testnet resources, request test tokens, and set up your development environment for building on Supernova.",
};

export default function TestnetPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            Supernova Testnet
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build, test, and deploy your applications in a secure environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Get Started</h2>
            <p className="text-gray-300 mb-4">
              The Supernova testnet provides a sandbox environment where you can develop and test your blockchain applications without using real tokens.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded bg-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm mr-3">
                  1
                </div>
                <span className="text-gray-300">Request testnet tokens using the faucet</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded bg-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm mr-3">
                  2
                </div>
                <span className="text-gray-300">Set up your development environment</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded bg-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm mr-3">
                  3
                </div>
                <span className="text-gray-300">Deploy and test your smart contracts</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded bg-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm mr-3">
                  4
                </div>
                <span className="text-gray-300">Monitor performance in the testnet explorer</span>
              </div>
            </div>
          </div>
          
          <div>
            <FaucetForm />
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Testnet Configuration</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Parameter</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">Network Name</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Supernova Testnet</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">RPC URL</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">https://testnet-rpc.supernovanetwork.xyz</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">Chain ID</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">5577</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">Currency Symbol</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">tSNOVA</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">Block Explorer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">https://explorer.supernovanetwork.xyz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Need Help?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our developer community is here to support you. Join our Discord channel or check out the documentation to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://docs.supernovanetwork.xyz" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
              View Documentation
            </a>
            <a href="https://docs.supernovanetwork.xyz/developers/testnet-guide" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Testnet Guide
            </a>
            <a href="https://discord.gg/supernova" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 