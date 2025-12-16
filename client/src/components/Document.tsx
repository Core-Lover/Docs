import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Network, 
  Cpu, 
  ShieldCheck, 
  Coins, 
  Users, 
  BarChart3, 
  Briefcase, 
  MessageCircle,
  Globe,
  Layers
} from 'lucide-react';
import ethicxLogo from '@assets/generated_images/file_00000000fefc7207b0b856440a0ea901_1765874535791.png';

export const Document = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="max-w-4xl mx-auto bg-white text-black p-8 md:p-12 shadow-2xl min-h-screen relative overflow-visible" id="pdf-content">
      {/* Header */}
      <header className="mb-12 border-b border-gray-300 pb-8 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={ethicxLogo}
                alt="EthicX Logo"
                className="h-12 w-12 object-contain"
              />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">EthicX</h1>
            </div>
            <h2 className="text-xl text-gray-600 font-light tracking-wide">Mining & On-Chain Infrastructure</h2>
          </div>
          <div className="text-right">
            <Badge variant="outline" className="border-blue-300 text-blue-600 mb-2">Project Overview</Badge>
            <p className="text-sm text-gray-600">Contributor Hiring Document</p>
            <p className="text-sm text-gray-600">December 2025</p>
          </div>
        </div>
      </header>

      {/* 1. Core System */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-5 w-5 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-900">1. Core System Description</h3>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-lg leading-relaxed text-gray-800">
            EIX is a mining-based blockchain ecosystem integrated with <span className="font-semibold text-blue-700">on-chain user verification</span> and <span className="font-semibold text-blue-700">multi-chain no-code blockchain tools</span>. 
            The system is designed to generate sustainable, recurring revenue while supporting long-term liquidity, listings, and ecosystem growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <ShieldCheck className="h-6 w-6 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900">User Verification</h4>
              <p className="text-sm text-gray-600">On-chain identity verification fees</p>
            </div>
            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <Layers className="h-6 w-6 text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-900">Utility Tools</h4>
              <p className="text-sm text-gray-600">Token deployment & smart contracts</p>
            </div>
            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <Cpu className="h-6 w-6 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900">App Mining</h4>
              <p className="text-sm text-gray-600">Staking & harvesting mechanisms</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Revenue Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">2. On-Chain Verification</h3>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
              <span className="text-gray-600">Fee per user</span>
              <span className="font-mono text-gray-900">0.01 ETH (~$30)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
              <span className="text-gray-600">Target Adoption</span>
              <span className="font-mono text-gray-900">100,000 Users</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
              <span className="text-gray-600">Total Collected</span>
              <span className="font-mono text-gray-900">~ $3,000,000</span>
            </div>
            <div className="mt-4 p-3 bg-blue-100 rounded border border-blue-300">
              <p className="text-sm text-blue-700 font-medium text-center">System Reserve (30-50%)</p>
              <p className="text-xl font-bold text-center text-blue-900">$900k - $1.5M</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">3. Multi-Chain Tools</h3>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-4">
              No-code tools for token deployment, minting, and configuration across 3 blockchains.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Daily Users</span>
                <span className="text-gray-900">~50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Avg Fee</span>
                <span className="text-gray-900">$20</span>
              </div>
              <Separator className="bg-gray-300 my-2" />
              <div className="flex justify-between font-medium">
                <span className="text-gray-700">Monthly Revenue</span>
                <span className="text-green-600">~$90,000</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-800">System Reserve (40%)</span>
                <span className="text-blue-600">~$36,000 / mo</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4 & 5. Total Reserve & Distribution */}
      <section className="mb-12 relative z-10">
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Financial Overview & Distribution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">Monthly System Reserve</h4>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-white rounded border border-gray-200">
                  <span className="text-gray-700">On-chain verification</span>
                  <span className="font-mono text-gray-900">~$120,000</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded border border-gray-200">
                  <span className="text-gray-700">Blockchain tools</span>
                  <span className="font-mono text-gray-900">~$36,000</span>
                </div>
                <div className="flex justify-between p-4 bg-blue-100 rounded border border-blue-300">
                  <span className="font-bold text-blue-900">Total Monthly</span>
                  <span className="font-bold font-mono text-blue-900">~$156,000</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">Distribution Model</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="bg-blue-200 text-blue-800 font-bold px-2 py-0.5 rounded text-xs mt-1">25%</span>
                  <span className="text-gray-700 text-sm">Distributed to active team members and contributors as revenue share.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded text-xs mt-1">75%</span>
                  <span className="text-gray-700 text-sm">Allocated to Liquidity Provisioning, Exchange Listings, and Buybacks.</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-sm text-center text-gray-600">Annual Liquidity & Growth Reserve</p>
                <p className="text-2xl font-bold text-center text-gray-900 mt-1">~$1.4 Million / Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tokenomics */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Coins className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">6. EIX Tokenomics</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "App Mining", val: "25%", count: "5,250,000" },
            { label: "Staking & Harvesting", val: "40%", count: "8,400,000" },
            { label: "Listing & Liquidity", val: "20%", count: "4,200,000" },
            { label: "Partnerships", val: "5%", count: "1,050,000" },
            { label: "Team & Contributors", val: "10%", count: "2,100,000" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-blue-600 mb-1">{item.val}</span>
              <span className="text-sm font-medium text-gray-900 mb-1">{item.label}</span>
              <span className="text-xs text-gray-600">{item.count} EIX</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-4 font-mono">Total Supply: 21,000,000 EIX</p>
      </section>

      {/* 7, 8, 9. Team & Hiring */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">7. Team & Partnership Opportunities</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Open Core Contributor Roles</h4>
            <div className="space-y-2">
              {[
                "Executive – Real-World Events & Marketing",
                "Designer – UI, Branding, and Visual Assets",
                "Social Media Manager – X, Telegram, Discord",
                "Accountant – Funding, Treasury, and Financial Management"
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded bg-gray-100 border border-gray-300">
                  <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-700">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-800">{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What Contributors Receive</h4>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Revenue share from monthly system income</li>
              <li>EIX token allocation from the team pool</li>
              <li>Long-term partnership position</li>
              <li><span className="text-blue-600 font-medium">No fixed salary</span> (performance & revenue based)</li>
            </ul>

            <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2 text-sm">Eligibility Options</h5>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-blue-700 font-bold block mb-1">Option A: Skills</span>
                  <span className="text-gray-600">Proven experience, Weekly KPIs, 3-month commitment</span>
                </div>
                <div>
                  <span className="text-green-700 font-bold block mb-1">Option B: Capital</span>
                  <span className="text-gray-600">$1k-$5k contribution for liquidity/listings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="mt-16 pt-8 border-t border-gray-300 text-center relative z-10">
        <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-white border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Apply As A Contributor</h3>
          <p className="text-gray-600 mb-6">Join the EIX Infrastructure</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-green-700" />
              </div>
              <div className="text-left">
                <span className="block text-xs text-gray-600 uppercase">WhatsApp</span>
                <span className="block text-lg font-mono text-gray-900">+92 316 669 8983</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-700" />
              </div>
              <div className="text-left">
                <span className="block text-xs text-gray-600 uppercase">Contact Person</span>
                <span className="block text-lg font-semibold text-gray-900">Bilawal Khan</span>
                <span className="block text-xs text-blue-600">Co-Founder EthicX</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">© 2025 EIX Mining & On-Chain Infrastructure. All Rights Reserved.</p>
      </footer>
    </div>
  );
});

Document.displayName = 'Document';
