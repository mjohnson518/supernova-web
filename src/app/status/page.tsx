import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../components/layout/MainLayout';
import { MetricsCard } from '../../../components/status/MetricsCard';
import { StatusIndicator, StatusType } from '../../../components/status/StatusIndicator';
import { EnvironmentalGauge } from '../../../components/status/EnvironmentalGauge';

export const metadata: Metadata = {
  title: "Supernova Network Status | Real-time Metrics",
  description: "Monitor the Supernova blockchain network in real-time including node status, transaction metrics, and environmental impact tracking.",
};

// Sample network services with status
const networkServices = [
  { name: 'Block Production', status: 'operational' as StatusType },
  { name: 'Transaction Processing', status: 'operational' as StatusType },
  { name: 'API Services', status: 'operational' as StatusType },
  { name: 'Explorer', status: 'operational' as StatusType },
  { name: 'Testnet', status: 'maintenance' as StatusType },
  { name: 'Lightning Network', status: 'degraded' as StatusType },
];

export default function StatusPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            Network Status
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time metrics and health monitoring for the Supernova network
          </p>
        </div>
        
        {/* Overall Status */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <StatusIndicator status="operational" size="lg" />
              <h2 className="ml-3 text-2xl font-bold text-white">All Systems Operational</h2>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">Last updated: <span className="text-gray-300">Today at 15:42 UTC</span></p>
            </div>
          </div>
        </div>
        
        {/* Key Metrics */}
        <h2 className="text-2xl font-bold mb-6">Network Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricsCard
            title="Transactions Per Second"
            value={42.5}
            unit="TPS"
            change={{ value: 5.2, isPositive: true }}
            variant="default"
          />
          
          <MetricsCard
            title="Block Time"
            value={10.2}
            unit="seconds"
            change={{ value: 0.3, isPositive: true }}
            variant="success"
          />
          
          <MetricsCard
            title="Active Validators"
            value={42}
            change={{ value: 2, isPositive: true }}
            variant="default"
          />
          
          <MetricsCard
            title="Network Load"
            value={68}
            unit="%"
            change={{ value: 12, isPositive: false }}
            variant="warning"
          />
        </div>
        
        {/* Services Status */}
        <h2 className="text-2xl font-bold mb-6">Services Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {networkServices.map((service) => (
            <div key={service.name} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">{service.name}</h3>
                <StatusIndicator status={service.status} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Node Distribution Map (Placeholder) */}
        <h2 className="text-2xl font-bold mb-6">Node Distribution</h2>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-12 h-96 flex items-center justify-center">
          <p className="text-gray-400">
            World map with node distribution coming soon...
          </p>
        </div>
        
        {/* Environmental Impact */}
        <h2 className="text-2xl font-bold mb-6">Environmental Impact</h2>
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <EnvironmentalGauge
              percentage={78.5}
              label="Renewable Energy"
              description="Percentage of network powered by renewable energy sources"
            />
            
            <EnvironmentalGauge
              percentage={125}
              label="Carbon Offset"
              description="Percentage of carbon emissions that are offset"
            />
            
            <EnvironmentalGauge
              percentage={25}
              label="Energy Usage"
              description="Current energy usage compared to maximum capacity"
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
        
        {/* Historical Data Graphs (Placeholder) */}
        <h2 className="text-2xl font-bold mb-6">Historical Data</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-80 flex items-center justify-center">
            <p className="text-gray-400">
              Transaction volume over time chart coming soon...
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-80 flex items-center justify-center">
            <p className="text-gray-400">
              Network performance over time chart coming soon...
            </p>
          </div>
        </div>
        
        {/* Subscribe for Updates */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-indigo-900/30 p-8 rounded-lg border border-gray-700 text-center">
          <h3 className="text-xl font-bold mb-4">Subscribe to Status Updates</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified about system outages, maintenance periods, and performance degradation. We'll only email you when it's important.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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