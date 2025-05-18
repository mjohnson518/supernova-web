import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../../components/layout/MainLayout';
import { SearchBar } from '../../../../components/explorer/SearchBar';
import { BlockList } from '../../../../components/explorer/BlockList';
import { TransactionList } from '../../../../components/explorer/TransactionList';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Testnet Explorer | Supernova Blockchain",
  description: "Explore the Supernova testnet blockchain with real-time data including blocks, transactions, and addresses.",
};

// Sample data for demonstration purposes
const sampleBlocks = [
  {
    hash: '0000000test000000079f1121a56cf8e75e43f9cca5ea71ebcaa42453aa6cbd',
    height: 9876,
    timestamp: 1622548800,
    transactionCount: 15,
    validatorAddress: 'snova1test00xy2kz98c8rh5wj39f2d7l2ksnae3m',
    size: 934
  },
  {
    hash: '0000000test000000081bc2c8a219f5f7c4f163e5b750c0e010a6444a2e2e89',
    height: 9875,
    timestamp: 1622548700,
    transactionCount: 12,
    validatorAddress: 'snova1testn38xxl0vk9h7kkqvgesgf0a8atrmxssg',
    size: 876
  },
  {
    hash: '0000000test0000005ee1577829a5d50639ec095bf81e05d3f591b70a0d3e',
    height: 9874,
    timestamp: 1622548600,
    transactionCount: 18,
    validatorAddress: 'snova1test00xy2kz98c8rh5wj39f2d7l2ksnae3m',
    size: 1022
  },
];

const sampleTransactions = [
  {
    txid: '7b968test1ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e',
    blockHeight: 9876,
    timestamp: 1622548800,
    fee: 0.0001,
    status: 'confirmed',
    carbonFootprint: 0.082
  },
  {
    txid: '6b9a3test99fb21e3eae21a3c39ef6e4acfac9955dd6b02f83f21a75f21382116',
    blockHeight: 9876,
    timestamp: 1622548790,
    fee: 0.00015,
    status: 'confirmed',
    carbonFootprint: 0.094
  },
  {
    txid: '3a7e5test8add5c30d9c9bee6345e94a9df1ce5cb501d7d2631abb0f6a09011491',
    blockHeight: 9875,
    timestamp: 1622548700,
    fee: 0.00025,
    status: 'confirmed',
    carbonFootprint: 0.123
  },
];

export default function TestnetExplorerPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/testnet" className="text-blue-400 hover:text-blue-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Testnet
          </Link>
        </div>
      
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium bg-yellow-600/20 text-yellow-400 border border-yellow-700">
            TESTNET
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 inline-block text-transparent bg-clip-text">
            Testnet Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the Supernova testnet blockchain data in real-time
          </p>
        </div>
        
        <div className="mb-12">
          <SearchBar />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Testnet Statistics</h3>
              <span className="text-xs text-yellow-400">Testnet</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Latest Block:</span>
                <span className="text-gray-300 font-medium">9,876</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions (24h):</span>
                <span className="text-gray-300 font-medium">4,238</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Average Block Time:</span>
                <span className="text-gray-300 font-medium">10.2 seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Validators:</span>
                <span className="text-gray-300 font-medium">12</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Testnet Details</h3>
              <span className="text-xs text-yellow-400">Testnet</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Test Token:</span>
                <span className="text-gray-300 font-medium">tSNOVA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network ID:</span>
                <span className="text-gray-300 font-medium">5577</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Genesis Date:</span>
                <span className="text-gray-300 font-medium">June 1, 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Version:</span>
                <span className="text-gray-300 font-medium">v1.0.0-beta</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Environmental Impact</h3>
              <span className="text-xs text-yellow-400">Testnet</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Carbon per Tx:</span>
                <span className="text-green-400 font-medium">0.08 kg CO₂</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Energy Usage (24h):</span>
                <span className="text-green-400 font-medium">1.3 MWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Renewable Energy:</span>
                <span className="text-green-400 font-medium">78.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Carbon Offsets:</span>
                <span className="text-green-400 font-medium">125%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Testnet Blocks</h2>
            <a href="explorer/blocks" className="text-blue-400 hover:text-blue-300 text-sm">View All Blocks</a>
          </div>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <BlockList blocks={sampleBlocks} />
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Testnet Transactions</h2>
            <a href="explorer/transactions" className="text-blue-400 hover:text-blue-300 text-sm">View All Transactions</a>
          </div>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <TransactionList transactions={sampleTransactions} />
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Testnet Resources</h2>
            <p className="text-gray-400 mt-2">Tools and resources to help you use the Supernova testnet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/testnet" className="block p-6 bg-gray-700/30 rounded-lg border border-gray-600 hover:bg-gray-700/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Testnet Faucet</h3>
              <p className="text-gray-400 text-sm">Get free test tokens to use on the Supernova testnet</p>
            </a>
            
            <a href="/testnet/status" className="block p-6 bg-gray-700/30 rounded-lg border border-gray-600 hover:bg-gray-700/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Network Status</h3>
              <p className="text-gray-400 text-sm">Check the current status and health of the testnet</p>
            </a>
            
            <a href="https://docs.supernovanetwork.xyz" className="block p-6 bg-gray-700/30 rounded-lg border border-gray-600 hover:bg-gray-700/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-400 text-sm">Guides and reference materials for developers</p>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 