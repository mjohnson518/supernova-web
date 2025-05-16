import React from 'react';
import Link from 'next/link';

interface Transaction {
  txid: string;
  blockHeight: number;
  timestamp: number;
  fee: number;
  status: string;
  carbonFootprint: number;
}

interface TransactionListProps {
  transactions: Transaction[];
  isLoading?: boolean;
}

export const TransactionList = ({ transactions, isLoading = false }: TransactionListProps) => {
  // Function to format timestamp to readable date/time
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  
  // Function to format transaction ID for display
  const formatTxid = (txid: string) => {
    return `${txid.substring(0, 10)}...${txid.substring(txid.length - 8)}`;
  };
  
  if (isLoading) {
    return (
      <div className="py-12 flex justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (!transactions || transactions.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-400">No transactions found</p>
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Transaction ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Block</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Fee</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Carbon</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {transactions.map((tx) => (
            <tr key={tx.txid} className="hover:bg-gray-750">
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link 
                  href={`/explorer/tx/${tx.txid}`}
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  {formatTxid(tx.txid)}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link 
                  href={`/explorer/block/${tx.blockHeight}`}
                  className="text-gray-300 hover:text-blue-300"
                >
                  {tx.blockHeight}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {formatTimestamp(tx.timestamp)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {tx.fee.toFixed(8)} SNOVA
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span 
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    tx.status === 'confirmed' 
                      ? 'bg-green-900 text-green-300' 
                      : tx.status === 'pending' 
                        ? 'bg-yellow-900 text-yellow-300' 
                        : 'bg-red-900 text-red-300'
                  }`}
                >
                  {tx.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center">
                  <span className={`text-${tx.carbonFootprint < 0.1 ? 'green' : tx.carbonFootprint < 0.5 ? 'yellow' : 'red'}-400`}>
                    {tx.carbonFootprint.toFixed(3)} kg
                  </span>
                  <svg 
                    className={`ml-1 h-4 w-4 text-${tx.carbonFootprint < 0.1 ? 'green' : tx.carbonFootprint < 0.5 ? 'yellow' : 'red'}-400`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 