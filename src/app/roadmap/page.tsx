import React from 'react';
import { Metadata } from 'next';
import MainLayout from '../../../components/layout/MainLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Supernova Roadmap | Security, Scalability, and Sustainability",
  description: "Explore Supernova's development roadmap from beta to mainnet launch, featuring quantum resistance, Lightning Network, and environmental tracking.",
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
            Our journey to build the most secure, environmentally-conscious, and quantum-resistant blockchain
          </p>
          <p className="text-md text-green-400 mt-4 max-w-3xl mx-auto">
            Current Status: Version 0.9.0-BETA - Mainnet Launch Targeted for Q3 2025
          </p>
        </div>

        {/* Phase 1 - Current Phase */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              1
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Phase 1: Final Component Development</h2>
              <p className="text-blue-400 font-medium">Q2 2025 (In Progress)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2.5 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Network Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Finalize remaining networking components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Complete RPC API implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Enhance wallet functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Optimize Lightning Network implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Finalize quantum-resistant key management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2.5 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Performance Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Optimize transaction processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Enhance block validation performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Improve database query efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Reduce memory usage across components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Implement advanced caching mechanisms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2.5 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Edge Case Handling</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Address remaining edge cases in transaction processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Enhance error recovery mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Improve handling of network partitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Enhance security under extreme conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Finalize environmental tracking edge cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical timeline divider */}
        <div className="hidden md:block w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 h-20 mx-auto my-8"></div>

        {/* Phase 2 - Upcoming */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-xl mr-4">
              2
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Phase 2: Comprehensive Testing</h2>
              <p className="text-gray-400 font-medium">Q2 2025 (Upcoming)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-gray-600 text-white text-xs px-3 py-1 rounded-bl">Planned</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Testing Infrastructure</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Complete end-to-end testing framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Implement comprehensive unit tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Develop integration testing suite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Create performance benchmarking tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Establish continuous integration pipeline</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-gray-600 text-white text-xs px-3 py-1 rounded-bl">Planned</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Security Audits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Conduct extensive security audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Perform penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Verify quantum resistance implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Test Lightning Network security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Address all identified issues and vulnerabilities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-gray-600 text-white text-xs px-3 py-1 rounded-bl">Planned</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Documentation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Finalize documentation for all components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Create developer guides and tutorials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Document API endpoints and interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Prepare node operator documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">○</span>
                  <span>Create user guides for all features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical timeline divider */}
        <div className="hidden md:block w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 h-20 mx-auto my-8"></div>

        {/* Future phases summary */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Future Phases</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Phase 3: Testnet</h3>
              <p className="text-gray-300 mb-2">Q2 2025</p>
              <p className="text-gray-400">Complete testnet deployment with all features, community testing, and integration with third-party services.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Phase 4: Mainnet Launch</h3>
              <p className="text-gray-300 mb-2">Q3 2025</p>
              <p className="text-gray-400">Genesis block creation, validator onboarding, exchange integrations, and full ecosystem activation.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-indigo-400 mb-2">Phase 5: Ecosystem Growth</h3>
              <p className="text-gray-300 mb-2">Q4 2025</p>
              <p className="text-gray-400">Developer ecosystem expansion, additional chain integrations, and further protocol enhancements.</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join us on our journey</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Supernova is committed to building a quantum-secure, environmentally conscious blockchain platform for the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://github.com/mjohnson518/supernova"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View on GitHub
            </a>
            <Link
              href="/docs"
              className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 