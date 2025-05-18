import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../../../components/layout/MainLayout';
import Link from 'next/link';

type Props = {
  params: { txid: string }
};

// For static site generation with "output: export"
export async function generateStaticParams() {
  // In a real implementation, this would fetch a list of transaction IDs from an API
  // For now, just provide some sample IDs
  return [
    { txid: '7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e' },
    { txid: '6b9a3e3999fb21e3eae21a3c39ef6e4acfac9955dd6b02f83f21a75f21382116' },
    { txid: '3a7e5b98add5c30d9c9bee6345e94a9df1ce5cb501d7d2631abb0f6a09011491' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Transaction ${params.txid.slice(0, 8)}... | Supernova Explorer`,
    description: `Details for transaction ${params.txid} on the Supernova blockchain.`
  };
}

export default function TransactionDetailPage({ params }: Props) {
  const { txid } = params;
  
  // In a real implementation, fetch the transaction data using the txid
  // For now, use mock data
  const txData = {
    txid: txid,
    blockHash: '000000000000000000079f1121a56cf8e75e43f9cca5ea71ebcaa42453aa6cbd',
    blockHeight: 12345,
    timestamp: 1622548800,
    confirmations: 123,
    size: 452,
    weight: 1808,
    status: 'confirmed',
    fee: 0.00015,
    feeRate: 0.00000332,
    carbonFootprint: 0.094,
    inputs: [
      {
        address: 'snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m',
        value: 1.5,
        index: 0
      }
    ],
    outputs: [
      {
        address: 'snova1qewk73k38xxl0vk9h7kkqvgesgf0a8atrmxssg',
        value: 1.2,
        index: 0,
        type: 'transfer'
      },
      {
        address: 'snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m',
        value: 0.29985,
        index: 1,
        type: 'change'
      }
    ]
  };

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
          <h1 className="text-3xl font-bold mb-2">Transaction Details</h1>
          <h2 className="text-xl text-gray-300 mb-6 font-mono break-all">{txData.txid}</h2>
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400">Status</h3>
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-2 ${txData.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <p className="text-gray-200 capitalize">{txData.status} ({txData.confirmations} confirmations)</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Block</h3>
                  <Link href={`/explorer/block/${txData.blockHash}`} className="text-blue-400 hover:text-blue-300">
                    {txData.blockHeight.toLocaleString()}
                  </Link>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Timestamp</h3>
                  <p className="text-gray-200">{formatDate(txData.timestamp)}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Size</h3>
                  <p className="text-gray-200">{txData.size.toLocaleString()} bytes</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400">Fee</h3>
                  <p className="text-gray-200">{txData.fee.toFixed(8)} SNOVA</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Fee Rate</h3>
                  <p className="text-gray-200">{txData.feeRate.toFixed(8)} SNOVA/byte</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Carbon Footprint</h3>
                  <p className="text-gray-200">{txData.carbonFootprint} kg CO₂</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Weight</h3>
                  <p className="text-gray-200">{txData.weight.toLocaleString()} weight units</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Transaction Details</h2>
              
              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Inputs ({txData.inputs.length})</h3>
                <div className="space-y-4">
                  {txData.inputs.map((input, index) => (
                    <div key={index} className="border border-gray-700 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <div className="mb-2 md:mb-0">
                          <span className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded mr-2">
                            Index #{input.index}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {input.value} SNOVA
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-xs text-gray-400 mb-1">Address</h4>
                        <Link href={`/explorer/address/${input.address}`} className="text-blue-400 hover:text-blue-300 font-mono text-sm break-all">
                          {input.address}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-4">Outputs ({txData.outputs.length})</h3>
                <div className="space-y-4">
                  {txData.outputs.map((output, index) => (
                    <div key={index} className="border border-gray-700 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <div className="mb-2 md:mb-0">
                          <span className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded mr-2">
                            Index #{output.index}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {output.value} SNOVA
                          </span>
                          {output.type === 'change' && (
                            <span className="bg-blue-900/50 text-xs text-blue-300 px-2 py-1 rounded ml-2">
                              Change
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-xs text-gray-400 mb-1">Address</h4>
                        <Link href={`/explorer/address/${output.address}`} className="text-blue-400 hover:text-blue-300 font-mono text-sm break-all">
                          {output.address}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <h2 className="text-2xl font-bold mb-6">Environmental Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {txData.carbonFootprint} kg
                </div>
                <p className="text-gray-400 text-sm">CO₂ Emitted</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  78.5%
                </div>
                <p className="text-gray-400 text-sm">Renewable Energy</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {(txData.carbonFootprint * 1.25).toFixed(3)} kg
                </div>
                <p className="text-gray-400 text-sm">Carbon Offset</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  -25%
                </div>
                <p className="text-gray-400 text-sm">Net Climate Impact</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-sm">
                Supernova offset 125% of this transaction's emissions through verified carbon credits
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 