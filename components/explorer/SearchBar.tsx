"use client"

import React, { useState } from 'react';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    try {
      // Determine what type of search this is (block, transaction, address)
      let searchType = 'unknown';
      
      if (/^[0-9]+$/.test(searchQuery)) {
        // If it's a number, assume it's a block height
        searchType = 'block';
        window.location.href = `/explorer/block/${searchQuery}`;
      } else if (searchQuery.startsWith('snova1')) {
        // If it starts with the address prefix
        searchType = 'address';
        window.location.href = `/explorer/address/${searchQuery}`;
      } else if (searchQuery.length === 64) {
        // If it's 64 chars, likely a tx or block hash
        // For now, assume it's a transaction
        searchType = 'transaction';
        window.location.href = `/explorer/tx/${searchQuery}`;
      } else {
        // Unknown format, show error (in a real app)
        console.log('Unknown search format');
        // This would show an error message to the user
      }
      
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex">
          <input
            type="text"
            placeholder="Search by Block Height, Transaction Hash, or Address..."
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isSearching}
          />
          <button
            type="submit"
            disabled={isSearching}
            className={`px-6 py-3 rounded-r-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isSearching
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
            }`}
          >
            {isSearching ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-2 flex justify-center space-x-4 text-sm text-gray-400">
        <span>Example searches:</span>
        <a href="/explorer/block/12345" className="text-blue-400 hover:underline">Block #12345</a>
        <a href="/explorer/tx/7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e" className="text-blue-400 hover:underline truncate max-w-[150px]">Tx: 7b968c...b48e</a>
        <a href="/explorer/address/snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m" className="text-blue-400 hover:underline truncate max-w-[150px]">Address: snova1...ae3m</a>
      </div>
    </div>
  );
}; 