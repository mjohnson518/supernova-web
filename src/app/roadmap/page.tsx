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
            Current Status: Version v1.0.0-BETA - Mainnet Launch Targeted for Q3 2025
          </p>
        </div>

        {/* Phase 1 - Production Beta Complete */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              ✓
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Phase 1: Production Beta Complete</h2>
              <p className="text-green-400 font-medium">Q4 2024 - Q1 2025 (Complete)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2.5 py-1 rounded-bl">Complete</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Core Implementation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>All core blockchain functionality production-ready</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Complete quantum-resistant cryptography implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Full environmental tracking and offsetting system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Lightning Network production deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Enterprise security and monitoring systems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2.5 py-1 rounded-bl">Complete</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Performance & Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Comprehensive performance optimization complete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Enterprise-grade security hardening implemented</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Advanced threat detection and mitigation systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Production-ready deployment infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Comprehensive disaster recovery systems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2.5 py-1 rounded-bl">Complete</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Testing & Documentation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Comprehensive testing framework implemented</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Complete API documentation and examples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Production deployment guides and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Developer integration resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Community testnet deployment complete</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical timeline divider */}
        <div className="hidden md:block w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 h-20 mx-auto my-8"></div>

        {/* Phase 2 - Current Phase */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              2
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Phase 2: Security Audits & Final Optimization</h2>
              <p className="text-blue-400 font-medium">Q4 2024 - Q2 2025 (In Progress)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2.5 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Security Audits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Third-party security audits by leading firms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Comprehensive penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Quantum resistance formal verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Lightning Network security validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Environmental system audit and verification</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2.5 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Performance Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Stress testing and bottleneck identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>High-throughput optimization for enterprise use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Memory and resource usage optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Network latency and bandwidth optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Mining and consensus performance tuning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2.5 py-1 rounded-bl">In Progress</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Infrastructure Preparation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Production infrastructure deployment and testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Genesis block preparation and configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Validator network setup and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Exchange partnership negotiations and testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">◎</span>
                  <span>Community governance framework implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical timeline divider */}
        <div className="hidden md:block w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 h-20 mx-auto my-8"></div>

        {/* Future phases summary */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Upcoming Phases</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Phase 3: Release Candidate</h3>
              <p className="text-gray-300 mb-2">Q2 2025</p>
              <p className="text-gray-400">Final security audit resolution, stress testing completion, and production infrastructure finalization.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Phase 4: Mainnet Launch</h3>
              <p className="text-gray-300 mb-2">Q3 2025</p>
              <p className="text-gray-400">Genesis block creation, validator onboarding, exchange integrations, and full ecosystem activation.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-indigo-400 mb-2">Phase 5: Ecosystem Growth</h3>
              <p className="text-gray-300 mb-2">Q4 2025+</p>
              <p className="text-gray-400">Developer ecosystem expansion, additional protocol enhancements, and global adoption initiatives.</p>
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