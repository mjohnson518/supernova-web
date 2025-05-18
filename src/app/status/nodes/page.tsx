import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../../components/layout/MainLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Supernova Node Map | Network Distribution",
  description: "Explore the global distribution of Supernova blockchain nodes and validators with real-time status information.",
};

// Sample node data for demonstration
const nodeStatistics = {
  totalNodes: 1294,
  activeNodes: 1245,
  validators: 42,
  countries: 64,
  topCountries: [
    { name: 'United States', count: 324, percentage: 25.0 },
    { name: 'Germany', count: 196, percentage: 15.1 },
    { name: 'Japan', count: 145, percentage: 11.2 },
    { name: 'United Kingdom', count: 98, percentage: 7.6 },
    { name: 'Canada', count: 89, percentage: 6.9 },
  ],
  continents: [
    { name: 'North America', count: 428, percentage: 33.1 },
    { name: 'Europe', count: 412, percentage: 31.8 },
    { name: 'Asia', count: 301, percentage: 23.3 },
    { name: 'Oceania', count: 76, percentage: 5.9 },
    { name: 'South America', count: 52, percentage: 4.0 },
    { name: 'Africa', count: 25, percentage: 1.9 },
  ],
  versions: [
    { version: 'v1.2.5', count: 845, percentage: 65.3 },
    { version: 'v1.2.4', count: 321, percentage: 24.8 },
    { version: 'v1.2.3', count: 89, percentage: 6.9 },
    { version: 'v1.2.2', count: 27, percentage: 2.1 },
    { version: 'Other', count: 12, percentage: 0.9 },
  ]
};

export default function NodesMapPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/status" className="text-blue-400 hover:text-blue-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Status Dashboard
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            Global Node Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the worldwide distribution of Supernova blockchain nodes
          </p>
        </div>
        
        {/* Overview Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
            <p className="text-gray-400 text-sm">Total Nodes</p>
            <p className="text-3xl font-bold text-white mt-2">{nodeStatistics.totalNodes.toLocaleString()}</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
            <p className="text-gray-400 text-sm">Active Nodes</p>
            <p className="text-3xl font-bold text-green-400 mt-2">{nodeStatistics.activeNodes.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">{((nodeStatistics.activeNodes / nodeStatistics.totalNodes) * 100).toFixed(1)}% online</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
            <p className="text-gray-400 text-sm">Validators</p>
            <p className="text-3xl font-bold text-blue-400 mt-2">{nodeStatistics.validators}</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
            <p className="text-gray-400 text-sm">Countries</p>
            <p className="text-3xl font-bold text-purple-400 mt-2">{nodeStatistics.countries}</p>
          </div>
        </div>
        
        {/* World Map */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Geographic Distribution</h2>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 h-[400px] md:h-[600px] relative">
            {/* This would be replaced with an actual world map component in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400">
                  Interactive world map with node distribution visualization would be here.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  This would use a React mapping library like react-leaflet or react-simple-maps
                  to show the density and distribution of nodes across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Distribution Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Top Countries */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <h3 className="text-xl font-bold mb-4">Top Countries</h3>
            <div className="space-y-4">
              {nodeStatistics.topCountries.map((country) => (
                <div key={country.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{country.name}</span>
                    <span className="text-gray-400">{country.count} nodes ({country.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Continents */}
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <h3 className="text-xl font-bold mb-4">Distribution by Continent</h3>
            <div className="space-y-4">
              {nodeStatistics.continents.map((continent) => (
                <div key={continent.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{continent.name}</span>
                    <span className="text-gray-400">{continent.count} nodes ({continent.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        continent.name === 'North America' ? 'bg-blue-600' :
                        continent.name === 'Europe' ? 'bg-green-600' :
                        continent.name === 'Asia' ? 'bg-yellow-600' :
                        continent.name === 'Oceania' ? 'bg-purple-600' :
                        continent.name === 'South America' ? 'bg-pink-600' :
                        'bg-red-600'
                      }`} 
                      style={{ width: `${continent.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Node Versions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Node Versions</h2>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {nodeStatistics.versions.map((version) => (
                <div key={version.version} className="bg-gray-700/50 rounded-lg p-4 text-center">
                  <p className="text-lg font-semibold text-blue-400">{version.version}</p>
                  <p className="text-2xl font-bold text-white mt-1">{version.count}</p>
                  <p className="text-xs text-gray-400 mt-1">{version.percentage}% of nodes</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                {nodeStatistics.versions.map((version, idx) => {
                  // Calculate starting point for this segment
                  const prevVersionsPercentage = nodeStatistics.versions
                    .slice(0, idx)
                    .reduce((sum, v) => sum + v.percentage, 0);
                  
                  return (
                    <div 
                      key={version.version} 
                      className={`h-4 rounded-full inline-block ${
                        idx === 0 ? 'bg-green-500 rounded-l-full' :
                        idx === nodeStatistics.versions.length - 1 ? 'bg-red-500 rounded-r-full' :
                        idx === 1 ? 'bg-blue-500' :
                        idx === 2 ? 'bg-yellow-500' :
                        'bg-purple-500'
                      }`} 
                      style={{ 
                        width: `${version.percentage}%`,
                        marginLeft: idx === 0 ? '0' : undefined
                      }}
                    ></div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-400">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span> Latest Version (v1.2.5) - 65.3%
              </p>
            </div>
          </div>
        </div>
        
        {/* Node Lookup Search */}
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Find a Specific Node</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Search for a specific Supernova node by its ID, address, or geographic location to view detailed information about its status and performance.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Node ID or IP address"
                className="w-full px-4 py-2 rounded-l-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 