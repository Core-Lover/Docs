import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle, CheckCircle, Users, Coins, TrendingUp } from 'lucide-react';

export const SalaryCalculator = () => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [userContribution, setUserContribution] = useState<number>(1000);
  const [teamMembers, setTeamMembers] = useState<number>(50);
  const [aiqxHolders, setAiqxHolders] = useState<number>(1000);

  // System constraints
  const MIN_CONTRIBUTION = 100;
  const MAX_CONTRIBUTION = 500000;
  
  // Revenue projections (ESTIMATES)
  const initialMonthlyRevenue = 156000; // First 3 months
  const matureMonthlyRevenue = 500000; // After system matures

  // Distribution model
  const contributorPercent = 25;
  const aiqxHolderPercent = 20;
  const liquidityPercent = 55;

  // Validate inputs
  const validContribution = Math.max(MIN_CONTRIBUTION, Math.min(MAX_CONTRIBUTION, userContribution));
  const validTeamMembers = Math.max(1, teamMembers);
  const validAiqxHolders = Math.max(1, aiqxHolders);

  // INITIAL PHASE (First 3 months) - Lower revenue
  const initialContributorPool = (initialMonthlyRevenue * contributorPercent) / 100;
  const initialAiqxPool = (initialMonthlyRevenue * aiqxHolderPercent) / 100;
  
  // Calculate user's share based on contribution weight
  const totalTeamInvestment = validTeamMembers * 2500; // Average $2500 per team member
  const userSharePercent = (validContribution / (totalTeamInvestment + validContribution)) * 100;
  const initialUserEarning = (initialContributorPool * userSharePercent) / 100;
  const initialAiqxPerHolder = initialAiqxPool / validAiqxHolders;

  // MATURE PHASE (Month 4+) - Higher revenue
  const matureContributorPool = (matureMonthlyRevenue * contributorPercent) / 100;
  const matureAiqxPool = (matureMonthlyRevenue * aiqxHolderPercent) / 100;
  
  const matureUserEarning = (matureContributorPool * userSharePercent) / 100;
  const matureAiqxPerHolder = matureAiqxPool / validAiqxHolders;

  // ROI calculations
  const paybackMonths = matureUserEarning > 0 ? Math.ceil(validContribution / matureUserEarning) : 0;

  if (!hasAgreed) {
    return (
      <div className="bg-slate-900 border border-orange-500/30 rounded-lg p-8 mb-12 relative z-10">
        <div className="text-center mb-8">
          <AlertTriangle className="h-16 w-16 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Important: Read Before Proceeding</h3>
          <p className="text-gray-300 text-lg mb-6">
            The earnings calculator shows <span className="text-orange-400 font-bold">ESTIMATED PROJECTIONS</span> only.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            Please Acknowledge the Following:
          </h4>
          <ul className="text-gray-300 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">1.</span>
              All earnings shown are <span className="text-orange-400 font-semibold">ESTIMATES and EXPECTATIONS</span> based on projected platform revenue.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">2.</span>
              There is <span className="text-orange-400 font-semibold">NO FIXED SALARY</span>. Earnings are performance and revenue-based.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">3.</span>
              First 3 months are the <span className="text-blue-400 font-semibold">Initial Phase</span> with lower projected revenue as the system launches.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">4.</span>
              Month 4 onwards is the <span className="text-green-400 font-semibold">Mature Phase</span> with higher projected earnings.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">5.</span>
              Your earnings depend on: total team size, your contribution amount, and actual platform revenue.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">6.</span>
              AIQX token holders receive a separate <span className="text-purple-400 font-semibold">20% revenue fund</span>.
            </li>
          </ul>
        </div>

        <div className="flex items-start gap-3 mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
          <Checkbox 
            id="agree" 
            checked={checkboxChecked}
            onCheckedChange={(checked) => setCheckboxChecked(checked === true)}
            className="mt-1"
            data-testid="checkbox-agree"
          />
          <label htmlFor="agree" className="text-gray-300 text-sm cursor-pointer">
            I understand that all figures shown are <span className="text-orange-400 font-bold">ESTIMATED PROJECTIONS</span> based on expected platform performance. I acknowledge that actual earnings may vary based on real platform revenue, team participation, and market conditions. I am joining as an early-stage contributor to support the EthicX ecosystem.
          </label>
        </div>

        <Button 
          onClick={() => setHasAgreed(true)}
          disabled={!checkboxChecked}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3"
          data-testid="btn-show-calculator"
        >
          I Agree - Show Me the Earnings Calculator
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-12 relative z-10">
      {/* Header with Warning */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">Earnings Calculator</h3>
        </div>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded px-4 py-2 inline-block">
          <p className="text-orange-400 text-sm font-bold flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            All figures are ESTIMATED PROJECTIONS only
          </p>
        </div>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Your Contribution */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <Coins className="h-5 w-5 text-orange-400" />
            <Label className="text-gray-300 text-sm font-semibold uppercase">Your Contribution ($)</Label>
          </div>
          <Input
            type="number"
            value={userContribution}
            onChange={(e) => setUserContribution(Number(e.target.value))}
            min={MIN_CONTRIBUTION}
            max={MAX_CONTRIBUTION}
            className="bg-slate-700 border-slate-600 text-white text-lg font-bold"
            data-testid="input-contribution"
          />
          <p className="text-xs text-gray-500 mt-2">Min: ${MIN_CONTRIBUTION} | Max: ${MAX_CONTRIBUTION.toLocaleString()}</p>
        </div>

        {/* Team Members */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-blue-400" />
            <Label className="text-gray-300 text-sm font-semibold uppercase">Total Team Members</Label>
          </div>
          <Input
            type="number"
            value={teamMembers}
            onChange={(e) => setTeamMembers(Math.max(1, Number(e.target.value)))}
            min={1}
            className="bg-slate-700 border-slate-600 text-white text-lg font-bold"
            data-testid="input-team"
          />
          <p className="text-xs text-gray-500 mt-2">Expected contributors in the system</p>
        </div>

        {/* AIQX Holders */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-purple-400" />
            <Label className="text-gray-300 text-sm font-semibold uppercase">AIQX Token Holders</Label>
          </div>
          <Input
            type="number"
            value={aiqxHolders}
            onChange={(e) => setAiqxHolders(Math.max(1, Number(e.target.value)))}
            min={1}
            className="bg-slate-700 border-slate-600 text-white text-lg font-bold"
            data-testid="input-aiqx"
          />
          <p className="text-xs text-gray-500 mt-2">Holders receiving 20% revenue fund</p>
        </div>
      </div>

      {/* Your Share Info */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-8">
        <p className="text-gray-300 text-sm">
          Based on your <span className="text-orange-400 font-bold">${validContribution.toLocaleString()}</span> contribution with <span className="text-blue-400 font-bold">{validTeamMembers}</span> team members, your estimated share of the contributor pool is approximately <span className="text-green-400 font-bold">{userSharePercent.toFixed(2)}%</span>
        </p>
      </div>

      {/* Two Phase Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Initial Phase */}
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-lg p-6">
          <p className="text-blue-400 text-xs uppercase font-bold tracking-wide mb-1">Phase 1: Initial Launch</p>
          <p className="text-white text-xl font-bold mb-1">First 3 Months</p>
          <p className="text-gray-400 text-sm mb-4">Based on ~$156K/month estimated revenue</p>

          <div className="space-y-3">
            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Your Monthly Earning (Est.)</p>
              <p className="text-2xl font-bold text-blue-300" data-testid="result-initial-user">
                ~${initialUserEarning.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">AIQX Holder Earning (Est.)</p>
              <p className="text-lg font-bold text-purple-300" data-testid="result-initial-aiqx">
                ~${initialAiqxPerHolder.toLocaleString('en-US', { maximumFractionDigits: 2 })}/holder
              </p>
            </div>
          </div>
        </div>

        {/* Mature Phase */}
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-lg p-6">
          <p className="text-orange-400 text-xs uppercase font-bold tracking-wide mb-1">Phase 2: System Mature</p>
          <p className="text-white text-xl font-bold mb-1">Month 4 Onwards</p>
          <p className="text-gray-400 text-sm mb-4">Based on ~$500K/month projected revenue</p>

          <div className="space-y-3">
            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Your Monthly Earning (Est.)</p>
              <p className="text-2xl font-bold text-orange-300" data-testid="result-mature-user">
                ~${matureUserEarning.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">AIQX Holder Earning (Est.)</p>
              <p className="text-lg font-bold text-purple-300" data-testid="result-mature-aiqx">
                ~${matureAiqxPerHolder.toLocaleString('en-US', { maximumFractionDigits: 2 })}/holder
              </p>
            </div>
            <div className="bg-slate-900/50 rounded p-3">
              <p className="text-gray-400 text-xs mb-1">Est. Investment Recovery</p>
              <p className="text-lg font-bold text-green-300" data-testid="result-payback">
                ~{paybackMonths} months
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Distribution */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
        <p className="text-white font-bold mb-4">Revenue Distribution Model</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-slate-900 rounded">
            <p className="text-green-400 text-2xl font-bold">{contributorPercent}%</p>
            <p className="text-gray-400 text-xs">Contributors Pool</p>
          </div>
          <div className="text-center p-3 bg-slate-900 rounded">
            <p className="text-purple-400 text-2xl font-bold">{aiqxHolderPercent}%</p>
            <p className="text-gray-400 text-xs">AIQX Holders Fund</p>
          </div>
          <div className="text-center p-3 bg-slate-900 rounded">
            <p className="text-blue-400 text-2xl font-bold">{liquidityPercent}%</p>
            <p className="text-gray-400 text-xs">Liquidity & Growth</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
        <p className="text-red-300 text-xs font-semibold flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          DISCLAIMER: These are estimated projections only. Actual earnings depend on real platform revenue, user adoption, and market conditions. Past projections do not guarantee future results.
        </p>
      </div>
    </div>
  );
};

SalaryCalculator.displayName = 'SalaryCalculator';
