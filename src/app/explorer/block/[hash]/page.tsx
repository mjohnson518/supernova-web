import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../../../components/layout/MainLayout';
import { TransactionList } from '../../../../../components/explorer/TransactionList';
import Link from 'next/link';

type Props = {
  params: { hash: string }
};

// For static site generation with "output: export"
export async function generateStaticParams() {
  // In a real implementation, this would fetch a list of block hashes from an API
  // For now, just provide some sample hashes
  return [
    { hash: '000000000000000000079f1121a56cf8e75e43f9cca5ea71ebcaa42453aa6cbd' },
    { hash: '000000000000000000081bc2c8a219f5f7c4f163e5b750c0e010a6444a2e2e89' },
    { hash: '0000000000000000000afc2554a1dfd72e5d232c9a5385c05f37221aa2d861d7' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Block ${params.hash} | Supernova Explorer`,
    description: `Details for block ${params.hash} on the Supernova blockchain.`
  };
}

export default function BlockDetailPage({ params }: Props) {
  const { hash } = params;
  
  // In a real implementation, fetch the block data using the hash
  // For now, use mock data
  const blockData = {
    hash: hash,
    height: 12345,
    timestamp: 1622548800,
    transactionCount: 42,
    validatorAddress: 'snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m',
    size: 1234,
    version: 1,
    merkleRoot: '0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1',
    difficulty: 2573674.4104738435,
    nonce: 34876435,
    bits: '1d00ffff',
    confirmations: 123,
    nextBlockHash: '000000000000000000081bc2c8a219f5f7c4f163e5b750c0e010a6444a2e2e89',
    previousBlockHash: '0000000000000000000afc2554a1dfd72e5d232c9a5385c05f37221aa2d861d7'
  };

  // Mock transaction data for this block
  const transactions = [
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
      blockHeight: 12345,
      timestamp: 1622548780,
      fee: 0.00025,
      status: 'confirmed',
      carbonFootprint: 0.123
    }
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
          <h1 className="text-3xl font-bold mb-4">Block #{blockData.height}</h1>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400">Block Hash</h3>
                  <p className="text-gray-200 font-mono text-sm break-all">{blockData.hash}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Height</h3>
                  <p className="text-gray-200">{blockData.height.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Timestamp</h3>
                  <p className="text-gray-200">{formatDate(blockData.timestamp)}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Transactions</h3>
                  <p className="text-gray-200">{blockData.transactionCount}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Validator</h3>
                  <Link href={`/explorer/address/${blockData.validatorAddress}`} className="text-blue-400 hover:text-blue-300 font-mono text-sm">
                    {blockData.validatorAddress}
                  </Link>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Size</h3>
                  <p className="text-gray-200">{blockData.size.toLocaleString()} bytes</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400">Version</h3>
                  <p className="text-gray-200">{blockData.version}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Merkle Root</h3>
                  <p className="text-gray-200 font-mono text-sm break-all">{blockData.merkleRoot}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Difficulty</h3>
                  <p className="text-gray-200">{blockData.difficulty.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Bits</h3>
                  <p className="text-gray-200 font-mono">{blockData.bits}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Nonce</h3>
                  <p className="text-gray-200">{blockData.nonce.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Confirmations</h3>
                  <p className="text-gray-200">{blockData.confirmations.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm text-gray-400">Previous Block</h3>
                {blockData.previousBlockHash ? (
                  <Link href={`/explorer/block/${blockData.previousBlockHash}`} className="text-blue-400 hover:text-blue-300 font-mono text-sm break-all">
                    {blockData.previousBlockHash}
                  </Link>
                ) : (
                  <p className="text-gray-200">Genesis Block</p>
                )}
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Next Block</h3>
                {blockData.nextBlockHash ? (
                  <Link href={`/explorer/block/${blockData.nextBlockHash}`} className="text-blue-400 hover:text-blue-300 font-mono text-sm break-all">
                    {blockData.nextBlockHash}
                  </Link>
                ) : (
                  <p className="text-gray-200">Not available yet</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Transactions in this Block</h2>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <p className="mb-4">Showing {transactions.length} of {blockData.transactionCount} transactions</p>
            <TransactionList transactions={transactions} />
            {blockData.transactionCount > transactions.length && (
              <div className="mt-4 text-center">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                  Load More Transactions
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
          <h2 className="text-2xl font-bold mb-4">Environmental Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {(0.082 * blockData.transactionCount).toFixed(2)} kg
              </div>
              <p className="text-gray-400">Total CO₂ Emissions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                78.5%
              </div>
              <p className="text-gray-400">Renewable Energy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {(0.082 * blockData.transactionCount * 1.25).toFixed(2)} kg
              </div>
              <p className="text-gray-400">Carbon Offset</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 