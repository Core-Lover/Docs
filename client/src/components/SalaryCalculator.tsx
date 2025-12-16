import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SalaryCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(156000);
  const [distributionPercent, setDistributionPercent] = useState<number>(25);
  const [teamMembers, setTeamMembers] = useState<number>(1);
  const [contributedAmount, setContributedAmount] = useState<number>(0);

  // Calculations
  const totalToDistribute = (monthlyIncome * distributionPercent) / 100;
  const salaryPerMember = teamMembers > 0 ? totalToDistribute / teamMembers : 0;
  
  // Additional metrics
  const systemReserve = monthlyIncome - totalToDistribute;
  const annualSalaryPerMember = salaryPerMember * 12;
  const investmentReturn = contributedAmount > 0 ? (totalToDistribute / contributedAmount) * 100 : 0;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-12 relative z-10">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
        <span>Salary & Revenue Calculator</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Input Parameters</h4>
          
          <div>
            <Label className="text-gray-300 mb-2 block text-sm font-medium">
              Monthly System Revenue ($)
            </Label>
            <Input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="bg-slate-800 border-slate-600 text-white"
              data-testid="input-monthly-income"
            />
            <p className="text-xs text-gray-400 mt-1">Current: ${monthlyIncome.toLocaleString()}</p>
          </div>

          <div>
            <Label className="text-gray-300 mb-2 block text-sm font-medium">
              Distribution to Team (%)
            </Label>
            <Input
              type="number"
              value={distributionPercent}
              onChange={(e) => setDistributionPercent(Number(e.target.value))}
              max="100"
              min="0"
              className="bg-slate-800 border-slate-600 text-white"
              data-testid="input-distribution-percent"
            />
            <p className="text-xs text-gray-400 mt-1">Current: {distributionPercent}% of revenue</p>
          </div>

          <div>
            <Label className="text-gray-300 mb-2 block text-sm font-medium">
              Total Team Members
            </Label>
            <Input
              type="number"
              value={teamMembers}
              onChange={(e) => setTeamMembers(Number(e.target.value))}
              min="1"
              className="bg-slate-800 border-slate-600 text-white"
              data-testid="input-team-members"
            />
            <p className="text-xs text-gray-400 mt-1">Current: {teamMembers} members</p>
          </div>

          <div>
            <Label className="text-gray-300 mb-2 block text-sm font-medium">
              Total Contributed Capital ($)
            </Label>
            <Input
              type="number"
              value={contributedAmount}
              onChange={(e) => setContributedAmount(Number(e.target.value))}
              className="bg-slate-800 border-slate-600 text-white"
              data-testid="input-contributed-amount"
            />
            <p className="text-xs text-gray-400 mt-1">Optional: For ROI calculation</p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Calculated Results</h4>

          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-gray-300 text-sm">Monthly Distribution Pool</p>
            <p className="text-2xl font-bold text-orange-400" data-testid="result-total-distribute">
              ${totalToDistribute.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-gray-400 mt-1">{distributionPercent}% of ${monthlyIncome.toLocaleString()}</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-gray-300 text-sm">Salary Per Team Member (Monthly)</p>
            <p className="text-2xl font-bold text-green-400" data-testid="result-salary-per-member">
              ${salaryPerMember.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-gray-400 mt-1">÷ {teamMembers} members</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-gray-300 text-sm">Annual Salary Per Member</p>
            <p className="text-2xl font-bold text-blue-400" data-testid="result-annual-salary">
              ${annualSalaryPerMember.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-gray-400 mt-1">12-month projected</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-gray-300 text-sm">Monthly System Reserve</p>
            <p className="text-2xl font-bold text-purple-400" data-testid="result-system-reserve">
              ${systemReserve.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-gray-400 mt-1">{100 - distributionPercent}% for liquidity & growth</p>
          </div>

          {contributedAmount > 0 && (
            <div className="bg-slate-800 rounded-lg p-4 border border-orange-500/30 bg-orange-500/10">
              <p className="text-gray-300 text-sm">Monthly ROI on Contributed Capital</p>
              <p className="text-2xl font-bold text-orange-300" data-testid="result-roi">
                {investmentReturn.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-400 mt-1">Based on ${contributedAmount.toLocaleString()} contribution</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <p className="text-gray-300 text-sm mb-3">
          With <span className="font-semibold text-orange-400">{teamMembers} team member{teamMembers !== 1 ? 's' : ''}</span>, each would earn approximately{' '}
          <span className="font-semibold text-green-400">
            ${salaryPerMember.toLocaleString('en-US', { maximumFractionDigits: 0 })}/month
          </span>{' '}
          or{' '}
          <span className="font-semibold text-blue-400">
            ${annualSalaryPerMember.toLocaleString('en-US', { maximumFractionDigits: 0 })}/year
          </span>{' '}
          from the revenue distribution system.
        </p>
      </div>
    </div>
  );
};

SalaryCalculator.displayName = 'SalaryCalculator';
