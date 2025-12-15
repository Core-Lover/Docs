import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
  Smartphone,
  Globe,
  Layers
} from 'lucide-react';

export const Document = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1000px] mx-auto bg-background text-foreground p-8 md:p-12 shadow-2xl min-h-screen relative overflow-hidden" id="pdf-content">
      {/* Watermark/Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Header */}
      <header className="mb-12 border-b border-border/50 pb-8 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold font-heading tracking-tight text-white">EIX</h1>
            </div>
            <h2 className="text-xl text-muted-foreground font-light tracking-wide">Mining & On-Chain Infrastructure</h2>
          </div>
          <div className="text-right">
            <Badge variant="outline" className="border-primary/50 text-primary mb-2">Project Overview</Badge>
            <p className="text-sm text-muted-foreground">Contributor Hiring Document</p>
            <p className="text-sm text-muted-foreground">December 2025</p>
          </div>
        </div>
      </header>

      {/* 1. Core System */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-5 w-5 text-primary" />
          <h3 className="text-2xl font-bold font-heading text-white">1. Core System Description</h3>
        </div>
        <Card className="bg-secondary/30 border-primary/10 backdrop-blur-sm">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed text-gray-300">
              EIX is a mining-based blockchain ecosystem integrated with <span className="text-primary font-medium">on-chain user verification</span> and <span className="text-primary font-medium">multi-chain no-code blockchain tools</span>. 
              The system is designed to generate sustainable, recurring revenue while supporting long-term liquidity, listings, and ecosystem growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <ShieldCheck className="h-6 w-6 text-blue-400 mb-2" />
                <h4 className="font-semibold text-white">User Verification</h4>
                <p className="text-sm text-muted-foreground">On-chain identity verification fees</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <Layers className="h-6 w-6 text-purple-400 mb-2" />
                <h4 className="font-semibold text-white">Utility Tools</h4>
                <p className="text-sm text-muted-foreground">Token deployment & smart contracts</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <Smartphone className="h-6 w-6 text-green-400 mb-2" />
                <h4 className="font-semibold text-white">App Mining</h4>
                <p className="text-sm text-muted-foreground">Staking & harvesting mechanisms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2 & 3. Revenue Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-heading text-white">2. On-Chain Verification</h3>
          </div>
          <Card className="bg-secondary/30 border-primary/10 h-full">
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Fee per user</span>
                <span className="font-mono text-white">0.01 ETH (~$30)</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Target Adoption</span>
                <span className="font-mono text-white">100,000 Users</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Total Collected</span>
                <span className="font-mono text-white">~ $3,000,000</span>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded border border-primary/20">
                <p className="text-sm text-primary font-medium text-center">System Reserve (30-50%)</p>
                <p className="text-xl font-bold text-center text-white">$900k - $1.5M</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-heading text-white">3. Multi-Chain Tools</h3>
          </div>
          <Card className="bg-secondary/30 border-primary/10 h-full">
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                No-code tools for token deployment, minting, and configuration across 3 blockchains.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Daily Users</span>
                  <span className="text-white">~50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Avg Fee</span>
                  <span className="text-white">$20</span>
                </div>
                <Separator className="bg-border/50" />
                <div className="flex justify-between font-medium">
                  <span className="text-gray-300">Monthly Revenue</span>
                  <span className="text-green-400">~$90,000</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-gray-200">System Reserve (40%)</span>
                  <span className="text-primary">~$36,000 / mo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 4 & 5. Total Reserve & Distribution */}
      <section className="mb-12 relative z-10">
        <Card className="bg-gradient-to-br from-secondary/50 to-background border-primary/20">
          <CardHeader>
             <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <CardTitle className="text-white">Financial Overview & Distribution</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Monthly System Reserve</h4>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-background/50 rounded border border-border/50">
                    <span>On-chain verification</span>
                    <span className="font-mono text-white">~$120,000</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background/50 rounded border border-border/50">
                    <span>Blockchain tools</span>
                    <span className="font-mono text-white">~$36,000</span>
                  </div>
                  <div className="flex justify-between p-4 bg-primary/10 rounded border border-primary/30">
                    <span className="font-bold text-primary">Total Monthly</span>
                    <span className="font-bold font-mono text-white">~$156,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Distribution Model</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="bg-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-xs mt-1">25%</span>
                    <span className="text-gray-300 text-sm">Distributed to active team members and contributors as revenue share.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded text-xs mt-1">75%</span>
                    <span className="text-gray-300 text-sm">Allocated to Liquidity Provisioning, Exchange Listings, and Buybacks.</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border/50">
                   <p className="text-sm text-center text-muted-foreground">Annual Liquidity & Growth Reserve</p>
                   <p className="text-2xl font-bold text-center text-white mt-1">~$1.4 Million / Year</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 6. Tokenomics */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Coins className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold font-heading text-white">6. EIX Tokenomics</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "App Mining", val: "25%", count: "5,250,000", color: "text-blue-400" },
            { label: "Staking & Harvesting", val: "40%", count: "8,400,000", color: "text-green-400" },
            { label: "Listing & Liquidity", val: "20%", count: "4,200,000", color: "text-purple-400" },
            { label: "Partnerships", val: "5%", count: "1,050,000", color: "text-yellow-400" },
            { label: "Team & Contributors", val: "10%", count: "2,100,000", color: "text-red-400" },
          ].map((item, i) => (
             <div key={i} className="bg-secondary/20 border border-border/50 p-4 rounded-lg flex flex-col items-center text-center">
                <span className={`text-2xl font-bold ${item.color} mb-1`}>{item.val}</span>
                <span className="text-sm font-medium text-white mb-1">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.count} EIX</span>
             </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4 font-mono">Total Supply: 21,000,000 EIX</p>
      </section>

      {/* 7, 8, 9. Team & Hiring */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold font-heading text-white">7. Team & Partnership Opportunities</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Open Core Contributor Roles</h4>
            <div className="space-y-2">
              {[
                "Executive – Real-World Events & Marketing",
                "Designer – UI, Branding, and Visual Assets",
                "Social Media Manager – X, Telegram, Discord",
                "Accountant – Funding, Treasury, and Financial Management"
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded bg-secondary/30 border border-border/30">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-200">{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
             <h4 className="text-lg font-semibold text-white mb-4">What Contributors Receive</h4>
             <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
               <li>Revenue share from monthly system income</li>
               <li>EIX token allocation from the team pool</li>
               <li>Long-term partnership position</li>
               <li><span className="text-primary">No fixed salary</span> (performance & revenue based)</li>
             </ul>

             <div className="mt-6 p-4 bg-secondary/30 rounded border border-border/30">
                <h5 className="font-semibold text-white mb-2 text-sm">Eligibility Options</h5>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-blue-400 font-bold block mb-1">Option A: Skills</span>
                    <span className="text-gray-400">Proven experience, Weekly KPIs, 3-month commitment</span>
                  </div>
                  <div>
                     <span className="text-green-400 font-bold block mb-1">Option B: Capital</span>
                     <span className="text-gray-400">$1k-$5k contribution for liquidity/listings</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="mt-16 pt-8 border-t border-border/50 text-center relative z-10">
        <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-secondary/50 to-background border border-primary/20">
          <h3 className="text-xl font-bold text-white mb-2">Apply As A Contributor</h3>
          <p className="text-muted-foreground mb-6">Join the EIX Infrastructure</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center">
                 <MessageCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="text-left">
                <span className="block text-xs text-muted-foreground uppercase">WhatsApp</span>
                <span className="block text-lg font-mono text-white">+92 316 669 8983</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                 <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-left">
                <span className="block text-xs text-muted-foreground uppercase">Contact Person</span>
                <span className="block text-lg font-semibold text-white">Bilawal Khan</span>
                <span className="block text-xs text-primary">Co-Founder EthicX</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground/50">© 2025 EIX Mining & On-Chain Infrastructure. All Rights Reserved.</p>
      </footer>
    </div>
  );
});

Document.displayName = 'Document';
