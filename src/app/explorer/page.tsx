import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../components/layout/MainLayout';
import { SearchBar } from '../../../components/explorer/SearchBar';
import { BlockList } from '../../../components/explorer/BlockList';
import { TransactionList } from '../../../components/explorer/TransactionList';

export const metadata: Metadata = {
  title: "NovaScan | Supernova Block Explorer",
  description: "Explore the Supernova blockchain with NovaScan, the comprehensive block explorer for transactions, blocks, addresses, and network statistics.",
};

// Sample data for demonstration purposes
const sampleBlocks = [
  {
    hash: '000000000000000000079f1121a56cf8e75e43f9cca5ea71ebcaa42453aa6cbd',
    height: 12345,
    timestamp: 1622548800,
    transactionCount: 42,
    validatorAddress: 'snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m',
    size: 1234
  },
  {
    hash: '000000000000000000081bc2c8a219f5f7c4f163e5b750c0e010a6444a2e2e89',
    height: 12344,
    timestamp: 1622548700,
    transactionCount: 38,
    validatorAddress: 'snova1qewk73k38xxl0vk9h7kkqvgesgf0a8atrmxssg',
    size: 1198
  },
  {
    hash: '0000000000000000000d5ee1577829a5d50639ec095bf81e05d3f591b70a0d3e',
    height: 12343,
    timestamp: 1622548600,
    transactionCount: 45,
    validatorAddress: 'snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m',
    size: 1302
  },
  {
    hash: '00000000000000000004b3ba86ce9c5c614e98b3c52f7e8c59d25cd5a1e647f4',
    height: 12342,
    timestamp: 1622548500,
    transactionCount: 33,
    validatorAddress: 'snova1qewk73k38xxl0vk9h7kkqvgesgf0a8atrmxssg',
    size: 1122
  },
  {
    hash: '0000000000000000000afc2554a1dfd72e5d232c9a5385c05f37221aa2d861d7',
    height: 12341,
    timestamp: 1622548400,
    transactionCount: 41,
    validatorAddress: 'snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m',
    size: 1245
  },
];

const sampleTransactions = [
  {
    txid: '7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e',
    blockHeight: 12345,
    timestamp: 1622548800,
    fee: 0.0001,
    status: 'confirmed',
    carbonFootprint: 0.082
  },
  {
    txid: '6b9a3e3999fb21e3eae21a3c39ef6e4acfac9955dd6b02f83f21a75f21382116',
    blockHeight: 12345,
    timestamp: 1622548790,
    fee: 0.00015,
    status: 'confirmed',
    carbonFootprint: 0.094
  },
  {
    txid: '3a7e5b98add5c30d9c9bee6345e94a9df1ce5cb501d7d2631abb0f6a09011491',
    blockHeight: 12344,
    timestamp: 1622548700,
    fee: 0.00025,
    status: 'confirmed',
    carbonFootprint: 0.123
  },
  {
    txid: '5f9c5a3d5e6b7c8d9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f',
    blockHeight: 12344,
    timestamp: 1622548680,
    fee: 0.0002,
    status: 'confirmed',
    carbonFootprint: 0.105
  },
  {
    txid: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
    blockHeight: 12343,
    timestamp: 1622548600,
    fee: 0.00018,
    status: 'confirmed',
    carbonFootprint: 0.072
  },
];

export default function ExplorerPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            NovaScan Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your window into the Supernova blockchain ecosystem
          </p>
        </div>
        
        <div className="mb-12">
          <SearchBar />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Network Statistics</h3>
              <span className="text-xs text-green-400">Live</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Latest Block:</span>
                <span className="text-gray-300 font-medium">12,345</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions (24h):</span>
                <span className="text-gray-300 font-medium">12,589</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Average Block Time:</span>
                <span className="text-gray-300 font-medium">10.2 seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Validators:</span>
                <span className="text-gray-300 font-medium">42</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Market Data</h3>
              <span className="text-xs text-green-400">Live</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">SNOVA Price:</span>
                <span className="text-gray-300 font-medium">$24.68 USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Market Cap:</span>
                <span className="text-gray-300 font-medium">$246.8M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">24h Volume:</span>
                <span className="text-gray-300 font-medium">$15.4M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Circulating Supply:</span>
                <span className="text-gray-300 font-medium">10M SNOVA</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Environmental Impact</h3>
              <span className="text-xs text-green-400">Live</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Carbon per Tx:</span>
                <span className="text-green-400 font-medium">0.08 kg CO₂</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Energy Usage (24h):</span>
                <span className="text-green-400 font-medium">4.2 MWh</span>
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
            <h2 className="text-2xl font-bold">Latest Blocks</h2>
            <a href="/explorer/blocks" className="text-blue-400 hover:text-blue-300 text-sm">View All Blocks</a>
          </div>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <BlockList blocks={sampleBlocks} />
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Transactions</h2>
            <a href="/explorer/transactions" className="text-blue-400 hover:text-blue-300 text-sm">View All Transactions</a>
          </div>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <TransactionList transactions={sampleTransactions} />
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center">Environmental Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Carbon Negative</h4>
              <p className="text-gray-300 text-sm">Supernova offsets 125% of its carbon footprint</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Renewable Energy</h4>
              <p className="text-gray-300 text-sm">78.5% of mining is powered by renewable sources</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Energy Efficient</h4>
              <p className="text-gray-300 text-sm">Only 0.08 kg CO₂ per transaction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Verified Impact</h4>
              <p className="text-gray-300 text-sm">All environmental data is on-chain and verifiable</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/explorer/environmental" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              View Environmental Dashboard
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 