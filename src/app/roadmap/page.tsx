import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../components/layout/MainLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Supernova Roadmap | Security, Scalability, and Sustainability",
  description: "Explore Supernova's ambitious development roadmap focused on security, scalability, and sustainability for the next-generation blockchain platform.",
};

export default function RoadmapPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            Supernova Roadmap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to build the most secure, scalable, and sustainable blockchain platform
          </p>
        </div>

        {/* Phase 1 - Complete */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              1
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Phase 1: Core Blockchain Functionality</h2>
              <p className="text-green-400 font-medium">Q4 2024 - Q2 2025 (Complete)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2.5 py-1 rounded-bl">Complete</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Implement transaction creation and signing in the wallet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Complete UTXO tracking and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Implement comprehensive transaction verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Add support for multiple signature schemes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Implement block validation with Merkle tree verification</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2.5 py-1 rounded-bl">Complete</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Scalability</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Implement initial network protocol stack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Create foundation for block propagation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Implement proper chain state tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Add fork detection and reorganization handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">○</span>
                  <span>Implement UTXO set with database persistence</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2.5 py-1 rounded-bl">Complete</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Sustainability</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Implement emissions calculation framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Add energy usage tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Implement carbon footprint calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Add regional emissions factors database</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">○</span>
                  <span>Implement transaction-level emissions attribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical timeline divider */}
        <div className="hidden md:block w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 h-20 mx-auto my-8"></div>

        {/* Phase 2 - Current */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              2
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Phase 2: Network Infrastructure and API</h2>
              <p className="text-blue-400 font-medium">Q2 2025 - Q3 2025 (In Progress)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Update network API endpoints with actual implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Implement thread-safe transaction pool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Implement peer discovery and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Add network message handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">○</span>
                  <span>Implement block and transaction propagation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Scalability</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Complete remaining API endpoints (blockchain, wallet, mining)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Add proper error handling and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Implement headers-first synchronization protocol</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">○</span>
                  <span>Add parallel block downloading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">○</span>
                  <span>Implement peer synchronization coordination</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Sustainability</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Implement environmental API endpoints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Integrate with RECs and Carbon Credits registries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Add renewable energy percentage tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⟳</span>
                  <span>Develop and release sustainability reporting tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">○</span>
                  <span>Implement verification system for renewable energy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical timeline divider */}
        <div className="hidden md:block w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 h-20 mx-auto my-8"></div>

        {/* Future Phases */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/70 flex items-center justify-center text-white font-bold text-sm mr-3">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Wallet & UI</h3>
            </div>
            <p className="text-purple-400 text-sm mb-2">Q3 2025 - Q4 2025</p>
            <p className="text-gray-400 mb-4">
              HD wallet functionality, address management, command-line interfaces, and user dashboards for transaction and environmental impact management.
            </p>
            <Link 
              href="/docs/overview/roadmap" 
              className="text-purple-400 text-sm hover:underline inline-flex items-center group"
            >
              View details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500/70 flex items-center justify-center text-white font-bold text-sm mr-3">
                4
              </div>
              <h3 className="text-xl font-bold text-white">Advanced Features</h3>
            </div>
            <p className="text-indigo-400 text-sm mb-2">Q1 2026 - Q3 2026</p>
            <p className="text-gray-400 mb-4">
              Quantum-resistant signatures (Dilithium & Falcon), Lightning Network payment channels, and carbon-negative network operation.
            </p>
            <Link 
              href="/docs/overview/roadmap" 
              className="text-indigo-400 text-sm hover:underline inline-flex items-center group"
            >
              View details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/70 flex items-center justify-center text-white font-bold text-sm mr-3">
                5
              </div>
              <h3 className="text-xl font-bold text-white">Production & Ecosystem</h3>
            </div>
            <p className="text-blue-400 text-sm mb-2">Q3 2026 - Q1 2027</p>
            <p className="text-gray-400 mb-4">
              Production optimization, parallel verification, Docker/Kubernetes deployment, cross-chain interoperability, and renewable energy coordination.
            </p>
            <Link 
              href="/docs/overview/roadmap" 
              className="text-blue-400 text-sm hover:underline inline-flex items-center group"
            >
              View details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Risk Management */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-indigo-900/30 p-8 rounded-lg border border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Risk Management</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold text-blue-400 mb-4">Identified Risks</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⚠</span>
                  <span><strong>Transaction Validation Complexity</strong>: Implementing comprehensive validation may be more complex than anticipated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⚠</span>
                  <span><strong>Network Protocol Stability</strong>: Network protocols may have edge cases that cause instability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⚠</span>
                  <span><strong>Database Performance</strong>: Performance may degrade with large blockchain data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">⚠</span>
                  <span><strong>Environmental Calculation Accuracy</strong>: Impact calculations may not be precise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold text-indigo-400 mb-4">Mitigation Strategies</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Incremental approach to validation with comprehensive testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Extensive testing and simulation of network conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Proper indexing, pruning, and optimization from the start</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Using established methodologies with full transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-indigo-900/30 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Core Principles</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Security First</h4>
              <p className="text-gray-300">We will never sacrifice security for convenience or speed.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">Unlimited Scalability</h4>
              <p className="text-gray-300">We are committed to building systems that can scale to global needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-indigo-400 mb-2">Planetary Sustainability</h4>
              <p className="text-gray-300">We believe blockchain must be a force for environmental good.</p>
            </div>
          </div>
        </div>
        
        {/* Completion Criteria */}
        <div className="mt-16 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Completion Criteria</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                1
              </div>
              <span className="text-gray-300">All planned features implemented according to specifications</span>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                2
              </div>
              <span className="text-gray-300">Test coverage meets or exceeds 80% across all components</span>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                3
              </div>
              <span className="text-gray-300">All high-priority security risks mitigated</span>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                4
              </div>
              <span className="text-gray-300">Documentation is comprehensive and up-to-date</span>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                5
              </div>
              <span className="text-gray-300">Performance metrics meet or exceed target values</span>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                6
              </div>
              <span className="text-gray-300">Security audits completed with no critical issues</span>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/docs/overview/roadmap"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Read detailed roadmap
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
} 