import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../../components/layout/MainLayout';
import { EnvironmentalGauge } from '../../../../components/status/EnvironmentalGauge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Supernova Environmental Impact | Blockchain Sustainability",
  description: "Detailed environmental metrics for the Supernova blockchain, including energy consumption, carbon footprint, and renewable energy usage.",
};

// Sample environmental data for demonstration
const environmentalData = {
  currentStats: {
    carbonPerTx: 0.082, // kg CO₂
    dailyEnergy: 4.2, // MWh
    renewablePercentage: 78.5,
    carbonOffset: 125,
    netImpact: -25, // negative means carbon negative
  },
  comparisonStats: {
    bitcoin: { carbonPerTx: 369, energyPerTx: 1259 }, // kg CO₂, kWh
    ethereum: { carbonPerTx: 22.57, energyPerTx: 62.56 },
    cardano: { carbonPerTx: 0.51, energyPerTx: 0.547 },
    supernova: { carbonPerTx: 0.082, energyPerTx: 0.175 },
  },
  energySources: [
    { source: 'Solar', percentage: 42.1 },
    { source: 'Wind', percentage: 26.7 },
    { source: 'Hydro', percentage: 9.7 },
    { source: 'Nuclear', percentage: 12.5 },
    { source: 'Natural Gas', percentage: 6.2 },
    { source: 'Other', percentage: 2.8 },
  ],
  historicalData: {
    periods: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    carbonPerTx: [0.098, 0.095, 0.091, 0.088, 0.085, 0.082],
    renewablePercentage: [68.2, 70.5, 72.1, 74.6, 76.3, 78.5],
  },
  offsetProjects: [
    {
      name: 'Amazon Rainforest Conservation',
      location: 'Brazil',
      contribution: 42.5, // percentage
      description: 'Protecting 50,000 hectares of primary rainforest from deforestation.'
    },
    {
      name: 'Wind Farm Development',
      location: 'Texas, USA',
      contribution: 28.3,
      description: 'Building and operating wind farms with 250MW capacity.'
    },
    {
      name: 'Solar Energy Access',
      location: 'Kenya',
      contribution: 18.9,
      description: 'Providing solar energy systems to 15,000 rural households.'
    },
    {
      name: 'Mangrove Restoration',
      location: 'Indonesia',
      contribution: 10.3,
      description: 'Restoring 2,000 hectares of mangrove ecosystems.'
    },
  ]
};

export default function EnvironmentalMetricsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 inline-block text-transparent bg-clip-text">
            Environmental Impact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Supernova is committed to being the world's most environmentally responsible blockchain
          </p>
        </div>
        
        {/* Key Environmental Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <EnvironmentalGauge
            percentage={environmentalData.currentStats.renewablePercentage}
            label="Renewable Energy"
            description="Percentage of network powered by renewable energy sources"
            size="lg"
          />
          
          <EnvironmentalGauge
            percentage={environmentalData.currentStats.carbonOffset}
            label="Carbon Offset"
            description="Percentage of carbon emissions that are offset through verified projects"
            size="lg"
          />
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Carbon Per Transaction</h3>
            <p className="text-3xl font-bold text-green-400">{environmentalData.currentStats.carbonPerTx} kg</p>
            <p className="text-sm text-gray-400 mt-2">CO₂ equivalent per transaction</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Daily Energy Usage</h3>
            <p className="text-3xl font-bold text-blue-400">{environmentalData.currentStats.dailyEnergy} MWh</p>
            <p className="text-sm text-gray-400 mt-2">Total network energy consumption</p>
          </div>
        </div>
        
        {/* Blockchain Comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Blockchain Comparison</h2>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-4">Carbon Per Transaction (kg CO₂)</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Supernova
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      {environmentalData.comparisonStats.supernova.carbonPerTx} kg
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '0.022%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
                
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Cardano
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {environmentalData.comparisonStats.cardano.carbonPerTx} kg
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '0.14%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
                
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                      Ethereum
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      {environmentalData.comparisonStats.ethereum.carbonPerTx} kg
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '6.12%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
                
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                      Bitcoin
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-red-600">
                      {environmentalData.comparisonStats.bitcoin.carbonPerTx} kg
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                </div>
              </div>
            </div>
            
            <div className="mb-4 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Energy Per Transaction (kWh)</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Supernova
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      {environmentalData.comparisonStats.supernova.energyPerTx} kWh
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '0.014%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
                
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Cardano
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {environmentalData.comparisonStats.cardano.energyPerTx} kWh
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '0.043%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
                
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                      Ethereum
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      {environmentalData.comparisonStats.ethereum.energyPerTx} kWh
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '4.97%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
                
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                      Bitcoin
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-red-600">
                      {environmentalData.comparisonStats.bitcoin.energyPerTx} kWh
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Energy Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Energy Sources</h2>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              {environmentalData.energySources.map((source) => (
                <div key={source.source} className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    source.source === 'Solar' ? 'bg-yellow-500/20 text-yellow-400' :
                    source.source === 'Wind' ? 'bg-blue-500/20 text-blue-400' :
                    source.source === 'Hydro' ? 'bg-cyan-500/20 text-cyan-400' :
                    source.source === 'Nuclear' ? 'bg-purple-500/20 text-purple-400' :
                    source.source === 'Natural Gas' ? 'bg-gray-500/20 text-gray-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {source.source === 'Solar' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                    {source.source === 'Wind' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.752 3.751a8.999 8.999 0 10-7.6 13.173 1 1 0 111.39-.935h2.426a1 1 0 111.39.935A9.007 9.007 0 0115 13.5H9.752V9.75M9.75 15.75h.008v.008H9.75v-.008z" />
                      </svg>
                    )}
                    {source.source === 'Hydro' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    )}
                    {source.source === 'Nuclear' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {source.source === 'Natural Gas' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {source.source === 'Other' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-sm font-medium mt-2 text-white">{source.source}</h4>
                  <p className="text-xl font-semibold text-gray-300">{source.percentage}%</p>
                </div>
              ))}
            </div>
            
            <div className="h-8 rounded-full bg-gray-700 overflow-hidden">
              {environmentalData.energySources.map((source, index) => {
                // Calculate the starting position
                const previousWidth = environmentalData.energySources
                  .slice(0, index)
                  .reduce((sum, src) => sum + src.percentage, 0);
                
                return (
                  <div
                    key={source.source}
                    className={`h-full inline-block ${
                      source.source === 'Solar' ? 'bg-yellow-500' :
                      source.source === 'Wind' ? 'bg-blue-500' :
                      source.source === 'Hydro' ? 'bg-cyan-500' :
                      source.source === 'Nuclear' ? 'bg-purple-500' :
                      source.source === 'Natural Gas' ? 'bg-gray-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                );
              })}
            </div>
            
            <div className="text-center mt-4 text-sm text-gray-400">
              <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-1"></span> Solar
              <span className="ml-4 inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span> Wind
              <span className="ml-4 inline-block w-3 h-3 bg-cyan-500 rounded-full mr-1"></span> Hydro
              <span className="ml-4 inline-block w-3 h-3 bg-purple-500 rounded-full mr-1"></span> Nuclear
              <span className="ml-4 inline-block w-3 h-3 bg-gray-500 rounded-full mr-1"></span> Natural Gas
              <span className="ml-4 inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span> Other
            </div>
          </div>
        </div>
        
        {/* Carbon Offset Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Carbon Offset Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {environmentalData.offsetProjects.map((project) => (
              <div key={project.name} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 flex">
                <div className="mr-4 mt-1">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-gray-300">{project.location}</p>
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${project.contribution}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{project.contribution}%</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sustainable Development Goals */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Supporting UN Sustainable Development Goals</h2>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4">
                <div className="w-16 h-16 mx-auto rounded-lg bg-blue-900 flex items-center justify-center text-white font-bold">
                  7
                </div>
                <p className="mt-2 text-sm text-gray-300">Affordable and Clean Energy</p>
              </div>
              
              <div className="p-4">
                <div className="w-16 h-16 mx-auto rounded-lg bg-red-900 flex items-center justify-center text-white font-bold">
                  9
                </div>
                <p className="mt-2 text-sm text-gray-300">Industry, Innovation and Infrastructure</p>
              </div>
              
              <div className="p-4">
                <div className="w-16 h-16 mx-auto rounded-lg bg-amber-900 flex items-center justify-center text-white font-bold">
                  12
                </div>
                <p className="mt-2 text-sm text-gray-300">Responsible Consumption and Production</p>
              </div>
              
              <div className="p-4">
                <div className="w-16 h-16 mx-auto rounded-lg bg-green-900 flex items-center justify-center text-white font-bold">
                  13
                </div>
                <p className="mt-2 text-sm text-gray-300">Climate Action</p>
              </div>
            </div>
            
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
              Supernova contributes to multiple UN Sustainable Development Goals, focusing on building a sustainable blockchain infrastructure that puts environmental responsibility first.
            </p>
          </div>
        </div>
        
        {/* Environmental Policy */}
        <div className="bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-teal-900/30 p-8 rounded-lg border border-green-800">
          <h3 className="text-xl font-bold mb-4 text-center">Our Environmental Commitment</h3>
          <p className="text-gray-300 mb-6">
            Supernova is committed to running the world's most environmentally responsible blockchain network. Our environmental policy includes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Carbon Negative Operations</h4>
                <p className="text-sm text-gray-300">Offsetting 125% of our carbon emissions through verified projects.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Renewable Energy Partnerships</h4>
                <p className="text-sm text-gray-300">Partnering with validators to ensure renewable energy usage.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Continuous Efficiency Improvements</h4>
                <p className="text-sm text-gray-300">Ongoing optimization of our consensus algorithm to reduce energy usage.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Transparent Reporting</h4>
                <p className="text-sm text-gray-300">Real-time monitoring and reporting of our environmental impact.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a href="/docs/environmental/policy" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              Read Full Environmental Policy
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 