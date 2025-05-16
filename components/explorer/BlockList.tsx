import React from 'react';
import Link from 'next/link';

interface Block {
  hash: string;
  height: number;
  timestamp: number;
  transactionCount: number;
  validatorAddress: string;
  size: number;
}

interface BlockListProps {
  blocks: Block[];
  isLoading?: boolean;
}

export const BlockList = ({ blocks, isLoading = false }: BlockListProps) => {
  // Function to format timestamp to readable date/time
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  
  // Function to format validator address for display
  const formatAddress = (address: string) => {
    if (!address) return 'Unknown';
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };
  
  if (isLoading) {
    return (
      <div className="py-12 flex justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (!blocks || blocks.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-400">No blocks found</p>
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Height</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Hash</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Txs</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Size</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Validator</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {blocks.map((block) => (
            <tr key={block.hash} className="hover:bg-gray-750">
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link 
                  href={`/explorer/block/${block.height}`}
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  {block.height}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                <Link 
                  href={`/explorer/block/${block.hash}`}
                  className="text-gray-300 hover:text-blue-300"
                >
                  {`${block.hash.substring(0, 10)}...${block.hash.substring(block.hash.length - 8)}`}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {formatTimestamp(block.timestamp)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {block.transactionCount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {block.size.toLocaleString()} bytes
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link 
                  href={`/explorer/address/${block.validatorAddress}`}
                  className="text-gray-300 hover:text-blue-300"
                >
                  {formatAddress(block.validatorAddress)}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 