import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../../../components/layout/MainLayout';
import { TransactionList } from '../../../../../components/explorer/TransactionList';
import Link from 'next/link';

type Props = {
  params: { address: string }
};

// For static site generation with "output: export"
export async function generateStaticParams() {
  // In a real implementation, this would fetch a list of addresses from an API
  // For now, just provide some sample addresses
  return [
    { address: 'snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m' },
    { address: 'snova1qewk73k38xxl0vk9h7kkqvgesgf0a8atrmxssg' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Address ${params.address.slice(0, 8)}... | Supernova Explorer`,
    description: `Details for address ${params.address} on the Supernova blockchain.`
  };
}

export default function AddressDetailPage({ params }: Props) {
  const { address } = params;
  
  // In a real implementation, fetch the address data
  // For now, use mock data
  const addressData = {
    address: address,
    balance: 42.58921046,
    totalReceived: 158.75832012,
    totalSent: 116.16910966,
    txCount: 32,
    firstSeen: 1620000000, // Unix timestamp
    lastSeen: 1622548800, // Unix timestamp
  };

  // Sample transactions for this address
  const transactions = [
    {
      txid: '7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e',
      blockHeight: 12345,
      timestamp: 1622548800,
      fee: 0.0001,
      status: 'confirmed',
      carbonFootprint: 0.082,
      type: 'received',
      amount: 1.2
    },
    {
      txid: '6b9a3e3999fb21e3eae21a3c39ef6e4acfac9955dd6b02f83f21a75f21382116',
      blockHeight: 12342,
      timestamp: 1622448800,
      fee: 0.00015,
      status: 'confirmed',
      carbonFootprint: 0.094,
      type: 'sent',
      amount: 0.5
    },
    {
      txid: '3a7e5b98add5c30d9c9bee6345e94a9df1ce5cb501d7d2631abb0f6a09011491',
      blockHeight: 12340,
      timestamp: 1622348800,
      fee: 0.00025,
      status: 'confirmed',
      carbonFootprint: 0.123,
      type: 'received',
      amount: 2.75
    },
    {
      txid: '5f9c5a3d5e6b7c8d9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f',
      blockHeight: 12335,
      timestamp: 1622248800,
      fee: 0.0002,
      status: 'confirmed',
      carbonFootprint: 0.105,
      type: 'sent',
      amount: 1.2
    },
    {
      txid: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      blockHeight: 12330,
      timestamp: 1622148800,
      fee: 0.00018,
      status: 'confirmed',
      carbonFootprint: 0.072,
      type: 'received',
      amount: 5.0
    },
  ];

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/explorer" className="text-blue-400 hover:text-blue-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Explorer
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Address</h1>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <p className="text-gray-200 font-mono text-sm break-all mb-6">{addressData.address}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                <h3 className="text-sm text-gray-400 mb-1">Balance</h3>
                <p className="text-2xl font-bold text-white">{addressData.balance.toFixed(8)} SNOVA</p>
              </div>
              
              <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                <h3 className="text-sm text-gray-400 mb-1">Total Received</h3>
                <p className="text-2xl font-bold text-white">{addressData.totalReceived.toFixed(8)} SNOVA</p>
              </div>
              
              <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                <h3 className="text-sm text-gray-400 mb-1">Total Sent</h3>
                <p className="text-2xl font-bold text-white">{addressData.totalSent.toFixed(8)} SNOVA</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-400">Transactions</h3>
                  <p className="text-gray-200">{addressData.txCount}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-400">First Seen</h3>
                  <p className="text-gray-200">{formatDate(addressData.firstSeen)}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-400">Last Seen</h3>
                  <p className="text-gray-200">{formatDate(addressData.lastSeen)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Transaction History</h2>
            <div className="flex items-center gap-2">
              <button className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded">
                All
              </button>
              <button className="text-sm bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded">
                Received
              </button>
              <button className="text-sm bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded">
                Sent
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-2 text-left text-gray-400">Tx Hash</th>
                    <th className="px-4 py-2 text-left text-gray-400">Block</th>
                    <th className="px-4 py-2 text-left text-gray-400">Age</th>
                    <th className="px-4 py-2 text-left text-gray-400">Type</th>
                    <th className="px-4 py-2 text-right text-gray-400">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.txid} className="border-b border-gray-700 hover:bg-gray-700/30">
                      <td className="px-4 py-3 font-mono text-sm">
                        <Link href={`/explorer/tx/${tx.txid}`} className="text-blue-400 hover:text-blue-300">
                          {`${tx.txid.substring(0, 10)}...${tx.txid.substring(tx.txid.length - 6)}`}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <Link href={`/explorer/block/${tx.blockHeight}`} className="text-blue-400 hover:text-blue-300">
                          {tx.blockHeight}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        {formatDate(tx.timestamp)}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          tx.type === 'received' ? 'bg-green-900/40 text-green-300' : 'bg-red-900/40 text-red-300'
                        }`}>
                          {tx.type === 'received' ? 'IN' : 'OUT'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-medium">
                        <span className={tx.type === 'received' ? 'text-green-400' : 'text-red-400'}>
                          {tx.type === 'received' ? '+' : '-'}{tx.amount} SNOVA
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="px-3 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
                  Previous
                </a>
                <a href="#" className="px-3 py-2 border-t border-b border-gray-700 bg-blue-600 text-white">
                  1
                </a>
                <a href="#" className="px-3 py-2 border-t border-b border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
                  2
                </a>
                <a href="#" className="px-3 py-2 border-t border-b border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
                  3
                </a>
                <a href="#" className="px-3 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
          <h2 className="text-2xl font-bold mb-6">QR Code</h2>
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg max-w-xs mx-auto">
            {/* In a real implementation, use a QR code generator library */}
            <div className="w-48 h-48 bg-black relative">
              {/* Fake QR code pattern for demonstration */}
              <div className="absolute top-0 left-0 w-12 h-12 border-4 border-black bg-white"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-4 border-black bg-white"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-4 border-black bg-white"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                    <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.175 7.616.514a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-center text-black">
              {addressData.address.slice(0, 16)}...{addressData.address.slice(-8)}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 