import { TrendingDown, ExternalLink } from 'lucide-react';

export const MarketComparison = () => {
  const competitors = [
    { name: 'Smithii Tools', price: '$100+', note: '0.1 SOL + fees per token' },
    { name: 'Coinfactory', price: '$100+', note: 'Per token deployment' },
    { name: 'DeployTokens', price: '$500-$2,000', note: 'Basic token creation' },
    { name: 'Token Tool (Bitbond)', price: '$100+', note: 'Plus gas fees' },
    { name: 'CryptoDo', price: '$500+', note: 'Smart contract generation' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-12 relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
        <h3 className="text-2xl font-bold text-white">Why EIX Has a Competitive Advantage</h3>
      </div>

      <p className="text-gray-300 mb-8">
        Most no-code blockchain platforms charge <span className="text-red-400 font-bold">$100 to $2,000+</span> per token deployment. 
        EIX disrupts the market by offering the same service for just <span className="text-green-400 font-bold">$20</span> - 
        making blockchain accessible to everyone.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Competitor Pricing */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-red-400 font-bold mb-4 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 rotate-180" />
            Competitor Pricing (2024-2025)
          </p>
          <div className="space-y-3">
            {competitors.map((comp, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-slate-900 rounded">
                <div>
                  <p className="text-white font-medium">{comp.name}</p>
                  <p className="text-gray-500 text-xs">{comp.note}</p>
                </div>
                <p className="text-red-400 font-bold">{comp.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EIX Pricing */}
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-lg p-6">
          <p className="text-green-400 font-bold mb-4 flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            EIX Platform Pricing
          </p>
          
          <div className="bg-slate-900 rounded-lg p-6 text-center mb-4">
            <p className="text-gray-400 text-sm mb-2">Token Deployment Fee</p>
            <p className="text-5xl font-bold text-green-400 mb-2">$20</p>
            <p className="text-gray-400 text-xs">+ blockchain gas fees (~$3)</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2 bg-slate-900/50 rounded">
              <span className="text-gray-400">Savings vs Smithii</span>
              <span className="text-green-400 font-bold">5x cheaper</span>
            </div>
            <div className="flex justify-between p-2 bg-slate-900/50 rounded">
              <span className="text-gray-400">Savings vs DeployTokens</span>
              <span className="text-green-400 font-bold">25-100x cheaper</span>
            </div>
            <div className="flex justify-between p-2 bg-slate-900/50 rounded">
              <span className="text-gray-400">Savings vs Enterprise</span>
              <span className="text-green-400 font-bold">Up to 500x cheaper</span>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Projection Logic */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <p className="text-white font-bold mb-4">How We Project Revenue</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-900 p-4 rounded">
            <p className="text-orange-400 font-bold mb-2">Conservative Estimate</p>
            <p className="text-gray-400">5,000 tokens/month × $20 = <span className="text-white font-bold">$100K/month</span></p>
          </div>
          <div className="bg-slate-900 p-4 rounded">
            <p className="text-blue-400 font-bold mb-2">Moderate Estimate</p>
            <p className="text-gray-400">10,000 tokens/month × $20 = <span className="text-white font-bold">$200K/month</span></p>
          </div>
          <div className="bg-slate-900 p-4 rounded">
            <p className="text-green-400 font-bold mb-2">Growth Estimate</p>
            <p className="text-gray-400">25,000 tokens/month × $20 = <span className="text-white font-bold">$500K/month</span></p>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-4">
          * Based on competitor volume data: Pump.fun launched 6M+ tokens in 2024. Even capturing 0.5% of market = significant revenue.
        </p>
      </div>
    </div>
  );
};

MarketComparison.displayName = 'MarketComparison';
