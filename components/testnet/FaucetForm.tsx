import React, { useState } from 'react';
import { validateAddress } from '../../lib/blockchain/validation';

export const FaucetForm = () => {
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Form validation
      if (!validateAddress(address)) {
        throw new Error('Invalid testnet address format');
      }
      
      // API request
      const response = await fetch('/api/faucet/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send tokens');
      }
      
      setSuccess(`Successfully sent ${data.amount} tokens to your address!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-white">Request Testnet Tokens</h3>
      
      {error && (
        <div className="mb-4 bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      )}
      
      {success && (
        <div className="mb-4 bg-green-900/30 border border-green-800 text-green-300 px-4 py-3 rounded">
          <p>{success}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
            Wallet Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter your testnet address"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={isLoading}
          />
          <p className="mt-1 text-xs text-gray-400">
            Must be a valid Supernova testnet address
          </p>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
            }`}
          >
            {isLoading ? 'Processing...' : 'Request Tokens'}
          </button>
        </div>
      </form>
    </div>
  );
}; 