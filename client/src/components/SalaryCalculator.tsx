import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SalaryCalculator = () => {
  const [userContribution, setUserContribution] = useState<number>(100);

  // System metrics
  const monthlyRevenue = 156000;
  const distributionPercent = 25;
  const liquidityPercent = 75;

  // Calculations
  const monthlyDistribution = (monthlyRevenue * distributionPercent) / 100;
  
  // Assuming equal distribution among contributors (based on their share)
  // If user contributes, they get a proportional share of the distribution pool
  const userMonthlyReturn = (userContribution / 100) * (monthlyDistribution / 156); // Simplified ratio
  const userAnnualReturn = userMonthlyReturn * 12;
  const monthlyROI = userContribution > 0 ? (userMonthlyReturn / userContribution) * 100 : 0;
  const annualROI = monthlyROI * 12;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-12 relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
        <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
        <span>How Much Will You Earn?</span>
      </h3>
      <p className="text-gray-400 text-sm mb-8">
        See exactly how much you'll receive based on your contribution to the EthicX system
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <Label className="text-gray-300 mb-3 block text-sm font-semibold uppercase tracking-wide">
            Your Contribution ($)
          </Label>
          <div className="mb-4">
            <Input
              type="number"
              value={userContribution}
              onChange={(e) => setUserContribution(Math.max(0, Number(e.target.value)))}
              className="bg-slate-700 border-slate-600 text-white text-lg font-bold"
              placeholder="Enter amount"
              data-testid="input-contribution"
            />
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-gray-400">Example amounts:</span>
            </div>
            <button
              onClick={() => setUserContribution(100)}
              className={`w-full text-left px-3 py-2 rounded transition ${userContribution === 100 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'hover:bg-slate-700 text-gray-300'}`}
              data-testid="btn-100"
            >
              $100
            </button>
            <button
              onClick={() => setUserContribution(500)}
              className={`w-full text-left px-3 py-2 rounded transition ${userContribution === 500 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'hover:bg-slate-700 text-gray-300'}`}
              data-testid="btn-500"
            >
              $500
            </button>
            <button
              onClick={() => setUserContribution(1000)}
              className={`w-full text-left px-3 py-2 rounded transition ${userContribution === 1000 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'hover:bg-slate-700 text-gray-300'}`}
              data-testid="btn-1000"
            >
              $1,000
            </button>
            <button
              onClick={() => setUserContribution(5000)}
              className={`w-full text-left px-3 py-2 rounded transition ${userContribution === 5000 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'hover:bg-slate-700 text-gray-300'}`}
              data-testid="btn-5000"
            >
              $5,000
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-lg p-6">
            <p className="text-gray-300 text-sm font-semibold mb-1">Your Monthly Earnings</p>
            <p className="text-4xl font-bold text-orange-400" data-testid="result-monthly">
              ${userMonthlyReturn.toLocaleString('en-US', { maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-gray-400 mt-2">From your ${userContribution.toLocaleString()} contribution</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Annual Earnings</p>
              <p className="text-2xl font-bold text-blue-400" data-testid="result-annual">
                ${userAnnualReturn.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-xs text-gray-500 mt-1">12 months projected</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Monthly Return %</p>
              <p className="text-2xl font-bold text-green-400" data-testid="result-monthly-roi">
                {monthlyROI.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">on your investment</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Annual Return %</p>
              <p className="text-2xl font-bold text-purple-400" data-testid="result-annual-roi">
                {annualROI.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">yearly ROI</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Payback Period</p>
              <p className="text-2xl font-bold text-indigo-400" data-testid="result-payback">
                {userMonthlyReturn > 0 ? Math.ceil(userContribution / userMonthlyReturn) : '-'} mo
              </p>
              <p className="text-xs text-gray-500 mt-1">to recover investment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Explanation */}
      <div className="mt-8 pt-6 border-t border-slate-700 bg-slate-800/50 rounded-lg p-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          <span className="font-semibold text-orange-400">💡 How it works:</span> You contribute <span className="font-bold text-orange-400">${userContribution.toLocaleString()}</span> to the EthicX system. Each month, you receive <span className="font-bold text-green-400">${userMonthlyReturn.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span> from our revenue distribution. That's a <span className="font-bold text-blue-400">{monthlyROI.toFixed(2)}% monthly return</span>, meaning your investment would be fully recovered in approximately <span className="font-bold text-indigo-400">{userMonthlyReturn > 0 ? Math.ceil(userContribution / userMonthlyReturn) : '∞'} months</span>.
        </p>
      </div>
    </div>
  );
};

SalaryCalculator.displayName = 'SalaryCalculator';
