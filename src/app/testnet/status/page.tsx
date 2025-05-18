import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../../components/layout/MainLayout';
import { MetricsCard } from '../../../../components/status/MetricsCard';
import { StatusIndicator, StatusType } from '../../../../components/status/StatusIndicator';
import { EnvironmentalGauge } from '../../../../components/status/EnvironmentalGauge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Testnet Status | Supernova Network",
  description: "Monitor the Supernova testnet network in real-time including node status, transaction metrics, and performance statistics.",
};

// Sample network services with status - testnet specific statuses
const testnetServices = [
  { name: 'Block Production', status: 'operational' as StatusType },
  { name: 'Transaction Processing', status: 'operational' as StatusType },
  { name: 'API Services', status: 'degraded' as StatusType },
  { name: 'Explorer', status: 'operational' as StatusType },
  { name: 'Faucet', status: 'operational' as StatusType },
  { name: 'Smart Contracts', status: 'maintenance' as StatusType },
];

export default function TestnetStatusPage() {
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
            Testnet Status
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Monitor the health and performance of the Supernova testnet network
          </p>
        </div>
        
        {/* Overall Status */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <StatusIndicator status="degraded" size="lg" />
              <h2 className="ml-3 text-2xl font-bold text-white">Testnet Operational with Minor Issues</h2>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">Last updated: <span className="text-gray-300">Today at 12:23 UTC</span></p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-yellow-400 font-medium">Active Incidents:</p>
            <p className="text-gray-300 mt-2">API services are experiencing intermittent delays. Our team is investigating the issue.</p>
          </div>
        </div>
        
        {/* Key Metrics */}
        <h2 className="text-2xl font-bold mb-6">Testnet Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricsCard
            title="Transactions Per Second"
            value={23.8}
            unit="TPS"
            change={{ value: 4.5, isPositive: true }}
            variant="default"
          />
          
          <MetricsCard
            title="Block Time"
            value={10.5}
            unit="seconds"
            change={{ value: 0.2, isPositive: false }}
            variant="warning"
          />
          
          <MetricsCard
            title="Active Validators"
            value={12}
            change={{ value: 1, isPositive: true }}
            variant="default"
          />
          
          <MetricsCard
            title="Network Load"
            value={42}
            unit="%"
            change={{ value: 8, isPositive: true }}
            variant="success"
          />
        </div>
        
        {/* Services Status */}
        <h2 className="text-2xl font-bold mb-6">Testnet Services Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testnetServices.map((service) => (
            <div key={service.name} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">{service.name}</h3>
                <StatusIndicator status={service.status} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Node Distribution Map (Placeholder) */}
        <h2 className="text-2xl font-bold mb-6">Testnet Node Distribution</h2>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-12 h-80 flex items-center justify-center">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400">
              Testnet nodes distributed across 14 countries
            </p>
            <p className="text-gray-400 mt-2">
              12 validators | 48 full nodes | 122 light clients
            </p>
          </div>
        </div>
        
        {/* Environmental Impact - Even testnet has this info */}
        <h2 className="text-2xl font-bold mb-6">Environmental Impact (Testnet)</h2>
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <EnvironmentalGauge
              percentage={76.3}
              label="Renewable Energy"
              description="Percentage of testnet nodes powered by renewable energy"
            />
            
            <EnvironmentalGauge
              percentage={125}
              label="Carbon Offset"
              description="Percentage of carbon emissions that are offset (testnet)"
            />
            
            <EnvironmentalGauge
              percentage={18}
              label="Energy Usage"
              description="Testnet energy usage compared to maximum capacity"
              colorScale="inverted"
            />
            
            <EnvironmentalGauge
              percentage={8}
              label="Carbon Footprint"
              description="Carbon footprint compared to other blockchains (lower is better)"
              colorScale="inverted"
            />
          </div>
        </div>
        
        {/* Testnet specific announcements */}
        <div className="bg-gray-800/50 p-8 rounded-lg border border-yellow-900/30 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Scheduled Maintenance</h2>
          <div className="space-y-4">
            <div className="p-4 border border-yellow-800/30 rounded-lg bg-yellow-900/10">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-400">Smart Contract Upgrade</h3>
                  <div className="mt-2 text-sm text-gray-300">
                    <p>The testnet will undergo a planned upgrade to support the new EVM-compatible smart contract layer.</p>
                    <p className="mt-1">Expected downtime: 2 hours</p>
                    <p className="mt-1">Scheduled: July 15, 2023 at 14:00 UTC</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-blue-800/30 rounded-lg bg-blue-900/10">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-400">Network Reset</h3>
                  <div className="mt-2 text-sm text-gray-300">
                    <p>A full testnet reset is planned to implement the new consensus algorithm.</p>
                    <p className="mt-1">All testnet data will be wiped. Please backup any important information.</p>
                    <p className="mt-1">Scheduled: August 1, 2023 at 09:00 UTC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subscribe for Updates */}
        <div className="bg-gradient-to-r from-yellow-900/30 via-orange-900/30 to-amber-900/30 p-8 rounded-lg border border-yellow-800/50 text-center">
          <h3 className="text-xl font-bold mb-4">Subscribe to Testnet Updates</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified about testnet status changes, maintenance periods, and upcoming resets. Developers only.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              />
              <button
                type="button"
                className="px-4 py-2 bg-yellow-600 text-white font-medium rounded-r-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 