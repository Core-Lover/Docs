import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SalaryCalculator = () => {
  const [userContribution, setUserContribution] = useState<number>(1000);

  // System constraints
  const MIN_CONTRIBUTION = 100;
  const MAX_CONTRIBUTION = 500000;
  
  // Revenue phases
  const initialPhaseMonths = 3;
  const initialMonthlyRevenue = 156000; // First 3 months
  const matureMonthlyRevenue = 500000; // After 3 months (projected)

  // Distribution model
  const teamDistributionPercent = 25; // 25% to team members
  const aiqxHolderPercent = 20; // 20% to AIQX token holders
  const liquidityPercent = 55; // 55% for liquidity and growth

  // Validate and constrain input
  const validContribution = Math.max(MIN_CONTRIBUTION, Math.min(MAX_CONTRIBUTION, userContribution));

  // INITIAL PHASE CALCULATIONS (First 3 months)
  const initialTeamPool = (initialMonthlyRevenue * teamDistributionPercent) / 100;
  const initialAiqxPool = (initialMonthlyRevenue * aiqxHolderPercent) / 100;
  
  // Assuming equal distribution among all contributors in initial phase
  const initialMonthlyEarning = (validContribution / 100) * (initialTeamPool / 1560); // Normalized
  const initialPhaseTotal = initialMonthlyEarning * initialPhaseMonths;

  // MATURE PHASE CALCULATIONS (After system is stable)
  const matureTeamPool = (matureMonthlyRevenue * teamDistributionPercent) / 100;
  const matureAiqxPool = (matureMonthlyRevenue * aiqxHolderPercent) / 100;
  
  const matureMonthlyEarning = (validContribution / 100) * (matureTeamPool / 5000); // Normalized for mature phase
  const matureAnnualEarning = matureMonthlyEarning * 12;
  
  const initialMonthlyROI = validContribution > 0 ? (initialMonthlyEarning / validContribution) * 100 : 0;
  const matureMonthlyROI = validContribution > 0 ? (matureMonthlyEarning / validContribution) * 100 : 0;
  const matureAnnualROI = matureMonthlyROI * 12;

  const quickButtonClick = (amount: number) => {
    setUserContribution(Math.min(amount, MAX_CONTRIBUTION));
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-12 relative z-10">
      {/* Header */}
      <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
        <span>Investment Calculator</span>
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        See exactly how much you'll earn based on your contribution to EthicX
      </p>

      {/* Input Section */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
        <div className="mb-6">
          <Label className="text-gray-300 mb-2 block text-sm font-semibold uppercase tracking-wide">
            Your Contribution Amount (${MIN_CONTRIBUTION} - ${MAX_CONTRIBUTION.toLocaleString()})
          </Label>
          <Input
            type="number"
            value={userContribution}
            onChange={(e) => setUserContribution(Number(e.target.value))}
            min={MIN_CONTRIBUTION}
            max={MAX_CONTRIBUTION}
            className="bg-slate-700 border-slate-600 text-white text-lg font-bold mb-3"
            placeholder="Enter contribution amount"
            data-testid="input-contribution"
          />
          <p className="text-xs text-orange-400 font-semibold">
            {userContribution < MIN_CONTRIBUTION && `Minimum: $${MIN_CONTRIBUTION}`}
            {userContribution > MAX_CONTRIBUTION && `Maximum: $${MAX_CONTRIBUTION.toLocaleString()}`}
            {userContribution >= MIN_CONTRIBUTION && userContribution <= MAX_CONTRIBUTION && `✓ Valid contribution amount`}
          </p>
        </div>

        {/* Quick Select Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[100, 1000, 5000, 10000].map((amount) => (
            <button
              key={amount}
              onClick={() => quickButtonClick(amount)}
              className={`px-3 py-2 rounded text-sm font-semibold transition ${
                validContribution === amount
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
              data-testid={`btn-${amount}`}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Two Phase Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* INITIAL PHASE */}
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-lg p-6">
          <div className="mb-4">
            <p className="text-blue-400 text-xs uppercase font-bold tracking-wide mb-1">Phase 1: Initial Launch</p>
            <p className="text-white text-2xl font-bold mb-2">First 3 Months</p>
            <p className="text-gray-300 text-sm">System building phase with $156K/month revenue</p>
          </div>

          <div className="space-y-3 mt-4 pt-4 border-t border-blue-500/20">
            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Your Monthly Earning</p>
              <p className="text-xl font-bold text-blue-300" data-testid="result-initial-monthly">
                ${initialMonthlyEarning.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </p>
            </div>

            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Total for 3 Months</p>
              <p className="text-xl font-bold text-blue-300" data-testid="result-initial-total">
                ${initialPhaseTotal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>

            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Monthly ROI</p>
              <p className="text-xl font-bold text-blue-300" data-testid="result-initial-roi">
                {initialMonthlyROI.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        {/* MATURE PHASE */}
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-lg p-6">
          <div className="mb-4">
            <p className="text-orange-400 text-xs uppercase font-bold tracking-wide mb-1">Phase 2: Growth & Maturity</p>
            <p className="text-white text-2xl font-bold mb-2">Month 4 Onwards</p>
            <p className="text-gray-300 text-sm">Mature system with projected $500K/month revenue</p>
          </div>

          <div className="space-y-3 mt-4 pt-4 border-t border-orange-500/20">
            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Your Monthly Earning</p>
              <p className="text-xl font-bold text-orange-300" data-testid="result-mature-monthly">
                ${matureMonthlyEarning.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </p>
            </div>

            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Annual Earning (12 months)</p>
              <p className="text-xl font-bold text-orange-300" data-testid="result-mature-annual">
                ${matureAnnualEarning.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>

            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Monthly ROI</p>
              <p className="text-xl font-bold text-orange-300" data-testid="result-mature-roi">
                {matureMonthlyROI.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Distribution Breakdown */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
        <p className="text-white font-bold mb-4 flex items-center gap-2">
          <span className="text-orange-400">📊</span> How Revenue is Distributed
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 rounded p-4">
            <p className="text-green-400 text-2xl font-bold mb-1">25%</p>
            <p className="text-gray-400 text-sm">Distributed to Contributors</p>
            <p className="text-xs text-gray-500 mt-2">You receive from this pool</p>
          </div>
          <div className="bg-slate-900 rounded p-4">
            <p className="text-orange-400 text-2xl font-bold mb-1">20%</p>
            <p className="text-gray-400 text-sm">AIQX Token Holders Fund</p>
            <p className="text-xs text-gray-500 mt-2">Separate fund for AIQX holders</p>
          </div>
          <div className="bg-slate-900 rounded p-4">
            <p className="text-blue-400 text-2xl font-bold mb-1">55%</p>
            <p className="text-gray-400 text-sm">Liquidity & Growth</p>
            <p className="text-xs text-gray-500 mt-2">For listings and expansion</p>
          </div>
        </div>
      </div>

      {/* Simple Explanation */}
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          <span className="font-bold text-orange-400">How This Works:</span>
        </p>
        <ul className="text-gray-300 text-sm space-y-2 ml-4">
          <li className="list-disc">
            <span className="font-semibold">Months 1-3 (Initial Phase):</span> You'll earn <span className="text-blue-300 font-bold">${initialMonthlyEarning.toLocaleString('en-US', { maximumFractionDigits: 2 })}/month</span> as the system launches with lower initial revenue of $156K/month.
          </li>
          <li className="list-disc">
            <span className="font-semibold">Month 4+ (Mature Phase):</span> Once the system is fully operational, earnings increase to <span className="text-orange-300 font-bold">${matureMonthlyEarning.toLocaleString('en-US', { maximumFractionDigits: 2 })}/month</span> based on projected $500K/month revenue.
          </li>
          <li className="list-disc">
            <span className="font-semibold">Your Investment Recovery:</span> With your ${validContribution.toLocaleString()} contribution, you'll recover your investment in the mature phase within approximately <span className="text-indigo-300 font-bold">{Math.ceil(validContribution / matureMonthlyEarning)} months</span>.
          </li>
          <li className="list-disc">
            <span className="font-semibold">AIQX Holders:</span> A separate <span className="text-orange-300 font-bold">20% fund</span> goes to AIQX token holders, ensuring ecosystem growth.
          </li>
        </ul>
      </div>
    </div>
  );
};

SalaryCalculator.displayName = 'SalaryCalculator';
