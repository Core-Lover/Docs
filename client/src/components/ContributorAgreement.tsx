import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Download, MessageCircle, FileText, CheckCircle } from 'lucide-react';

export const ContributorAgreement = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    contributionAmount: '',
    country: '',
  });

  const [agreements, setAgreements] = useState({
    estimatesOnly: false,
    noFixedSalary: false,
    earlyStage: false,
    revenueBasedOnly: false,
    readFAQ: false,
  });

  const allAgreed = Object.values(agreements).every(v => v);
  const formFilled = formData.fullName && formData.email && formData.whatsapp && formData.contributionAmount;

  const generateAgreementHTML = () => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EthicX Contributor Agreement - ${formData.fullName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body class="bg-slate-900 text-white min-h-screen p-8">
  <div class="max-w-3xl mx-auto bg-slate-800 rounded-lg p-8 border border-slate-700">
    <!-- Header -->
    <div class="text-center mb-8 pb-6 border-b border-slate-600">
      <h1 class="text-3xl font-bold text-orange-400 mb-2">EthicX (EIX)</h1>
      <h2 class="text-xl text-white">Early-Stage Contributor Agreement</h2>
      <p class="text-gray-400 text-sm mt-2">Document Generated: ${today}</p>
    </div>

    <!-- Contributor Information -->
    <div class="mb-8">
      <h3 class="text-lg font-bold text-orange-400 mb-4 border-l-4 border-orange-400 pl-3">Contributor Information</h3>
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="bg-slate-900 p-3 rounded">
          <p class="text-gray-400">Full Legal Name</p>
          <p class="font-bold">${formData.fullName || '________________________'}</p>
        </div>
        <div class="bg-slate-900 p-3 rounded">
          <p class="text-gray-400">Email Address</p>
          <p class="font-bold">${formData.email || '________________________'}</p>
        </div>
        <div class="bg-slate-900 p-3 rounded">
          <p class="text-gray-400">WhatsApp Number</p>
          <p class="font-bold">${formData.whatsapp || '________________________'}</p>
        </div>
        <div class="bg-slate-900 p-3 rounded">
          <p class="text-gray-400">Contribution Amount</p>
          <p class="font-bold text-green-400">$${formData.contributionAmount || '________'} USD</p>
        </div>
        <div class="bg-slate-900 p-3 rounded col-span-2">
          <p class="text-gray-400">Country of Residence</p>
          <p class="font-bold">${formData.country || '________________________'}</p>
        </div>
      </div>
    </div>

    <!-- Terms and Conditions -->
    <div class="mb-8">
      <h3 class="text-lg font-bold text-orange-400 mb-4 border-l-4 border-orange-400 pl-3">Terms and Acknowledgments</h3>
      <div class="space-y-4 text-sm">
        <div class="bg-slate-900 p-4 rounded border-l-4 border-orange-500">
          <p class="font-bold text-orange-400 mb-2">1. ESTIMATED PROJECTIONS ONLY</p>
          <p class="text-gray-300">I understand that all earnings figures, calculations, and projections shown by EthicX are ESTIMATES and EXPECTATIONS only. These are based on projected platform performance and are not guaranteed. Actual earnings may be higher or lower depending on real platform revenue.</p>
        </div>

        <div class="bg-slate-900 p-4 rounded border-l-4 border-blue-500">
          <p class="font-bold text-blue-400 mb-2">2. NO FIXED SALARY OR GUARANTEED INCOME</p>
          <p class="text-gray-300">I acknowledge that there is NO fixed salary, guaranteed income, or employment contract associated with this contribution. I am joining as an early-stage contributor/supporter, NOT as a traditional employee. My earnings are entirely dependent on actual platform revenue.</p>
        </div>

        <div class="bg-slate-900 p-4 rounded border-l-4 border-green-500">
          <p class="font-bold text-green-400 mb-2">3. REVENUE DISTRIBUTION MODEL</p>
          <p class="text-gray-300">I understand the revenue distribution: 25% to Contributors Pool (my share based on contribution weight), 20% to AIQX Token Holders Fund, and 55% to Liquidity & Growth. My individual earnings depend on my contribution relative to total team investment.</p>
        </div>

        <div class="bg-slate-900 p-4 rounded border-l-4 border-purple-500">
          <p class="font-bold text-purple-400 mb-2">4. EARLY-STAGE RISK ACKNOWLEDGMENT</p>
          <p class="text-gray-300">I understand that EthicX is an early-stage blockchain project. Like any startup or early-stage venture, there are inherent risks. I am contributing funds that I can afford to invest, understanding that returns are not guaranteed.</p>
        </div>

        <div class="bg-slate-900 p-4 rounded border-l-4 border-red-500">
          <p class="font-bold text-red-400 mb-2">5. PHASED EARNINGS UNDERSTANDING</p>
          <p class="text-gray-300">I understand that earnings are phased: Initial Phase (Months 1-3) will have lower earnings as the platform launches. Mature Phase (Month 4+) projects higher earnings as the platform grows. First payment is based on actual first 3 months revenue, not projections.</p>
        </div>
      </div>
    </div>

    <!-- Signature Section -->
    <div class="mb-8">
      <h3 class="text-lg font-bold text-orange-400 mb-4 border-l-4 border-orange-400 pl-3">Agreement Confirmation</h3>
      <div class="bg-slate-900 p-6 rounded">
        <p class="text-gray-300 text-sm mb-6">By signing below, I confirm that I have read, understood, and agree to all terms and acknowledgments stated in this Contributor Agreement. I understand that all earnings are estimates and I am joining as an early-stage contributor to support the EthicX ecosystem.</p>
        
        <div class="grid grid-cols-2 gap-8 mt-8">
          <div>
            <p class="text-gray-400 text-sm mb-2">Contributor Signature</p>
            <div class="border-b-2 border-gray-600 h-12"></div>
            <p class="text-gray-400 text-xs mt-2">Date: _______________</p>
          </div>
          <div>
            <p class="text-gray-400 text-sm mb-2">EthicX Representative</p>
            <div class="border-b-2 border-gray-600 h-12"></div>
            <p class="text-gray-400 text-xs mt-2">Date: _______________</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 text-center">
      <p class="text-orange-400 font-bold mb-2">Submit This Agreement</p>
      <p class="text-gray-300 text-sm mb-4">After signing, send this completed form via WhatsApp to:</p>
      <p class="text-2xl font-bold text-white mb-2">+1 (XXX) XXX-XXXX</p>
      <p class="text-gray-400 text-xs">Or email: contributors@ethicx.io</p>
    </div>

    <!-- Footer -->
    <div class="mt-8 pt-6 border-t border-slate-600 text-center text-gray-500 text-xs">
      <p>EthicX (EIX) - Mining & On-Chain Infrastructure</p>
      <p class="mt-1">This document is for contributor onboarding purposes only.</p>
      <p class="mt-1">Document ID: EIX-CONTRIB-${Date.now()}</p>
    </div>
  </div>
</body>
</html>`;
  };

  const handleDownload = () => {
    const html = generateAgreementHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EthicX_Contributor_Agreement_${formData.fullName.replace(/\s+/g, '_') || 'Form'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I want to become an EthicX Contributor.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nContribution: $${formData.contributionAmount}\nCountry: ${formData.country}\n\nI have read and agree to the contributor terms.`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-12 relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="h-6 w-6 text-purple-400" />
          Contributor Agreement Form
        </h3>
      </div>

      <p className="text-gray-400 mb-8">
        Complete this form to become an EthicX early-stage contributor. Download the agreement and contact us via WhatsApp to proceed.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Fields */}
        <div className="space-y-4">
          <h4 className="text-white font-bold mb-4">Your Information</h4>
          
          <div>
            <Label className="text-gray-300 mb-2 block">Full Legal Name *</Label>
            <Input
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="bg-slate-800 border-slate-600 text-white"
              placeholder="Enter your full name"
              data-testid="input-name"
            />
          </div>

          <div>
            <Label className="text-gray-300 mb-2 block">Email Address *</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-slate-800 border-slate-600 text-white"
              placeholder="your@email.com"
              data-testid="input-email"
            />
          </div>

          <div>
            <Label className="text-gray-300 mb-2 block">WhatsApp Number *</Label>
            <Input
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              className="bg-slate-800 border-slate-600 text-white"
              placeholder="+1234567890"
              data-testid="input-whatsapp"
            />
          </div>

          <div>
            <Label className="text-gray-300 mb-2 block">Contribution Amount (USD) *</Label>
            <Input
              type="number"
              value={formData.contributionAmount}
              onChange={(e) => setFormData({...formData, contributionAmount: e.target.value})}
              className="bg-slate-800 border-slate-600 text-white"
              placeholder="1000"
              min="100"
              data-testid="input-amount"
            />
          </div>

          <div>
            <Label className="text-gray-300 mb-2 block">Country of Residence</Label>
            <Input
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              className="bg-slate-800 border-slate-600 text-white"
              placeholder="Your country"
              data-testid="input-country"
            />
          </div>
        </div>

        {/* Agreements */}
        <div className="space-y-4">
          <h4 className="text-white font-bold mb-4">Required Acknowledgments</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-slate-800 rounded border border-slate-700">
              <Checkbox
                id="ack1"
                checked={agreements.estimatesOnly}
                onCheckedChange={(checked) => setAgreements({...agreements, estimatesOnly: checked === true})}
                data-testid="checkbox-estimates"
              />
              <label htmlFor="ack1" className="text-gray-300 text-sm cursor-pointer">
                I understand all earnings are <span className="text-orange-400 font-bold">ESTIMATES ONLY</span>
              </label>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-800 rounded border border-slate-700">
              <Checkbox
                id="ack2"
                checked={agreements.noFixedSalary}
                onCheckedChange={(checked) => setAgreements({...agreements, noFixedSalary: checked === true})}
                data-testid="checkbox-no-salary"
              />
              <label htmlFor="ack2" className="text-gray-300 text-sm cursor-pointer">
                I understand there is <span className="text-red-400 font-bold">NO FIXED SALARY</span> guaranteed
              </label>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-800 rounded border border-slate-700">
              <Checkbox
                id="ack3"
                checked={agreements.earlyStage}
                onCheckedChange={(checked) => setAgreements({...agreements, earlyStage: checked === true})}
                data-testid="checkbox-early-stage"
              />
              <label htmlFor="ack3" className="text-gray-300 text-sm cursor-pointer">
                I am joining as an <span className="text-blue-400 font-bold">early-stage contributor</span>, not employee
              </label>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-800 rounded border border-slate-700">
              <Checkbox
                id="ack4"
                checked={agreements.revenueBasedOnly}
                onCheckedChange={(checked) => setAgreements({...agreements, revenueBasedOnly: checked === true})}
                data-testid="checkbox-revenue-based"
              />
              <label htmlFor="ack4" className="text-gray-300 text-sm cursor-pointer">
                I understand earnings are <span className="text-green-400 font-bold">revenue-based only</span>
              </label>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-800 rounded border border-slate-700">
              <Checkbox
                id="ack5"
                checked={agreements.readFAQ}
                onCheckedChange={(checked) => setAgreements({...agreements, readFAQ: checked === true})}
                data-testid="checkbox-faq"
              />
              <label htmlFor="ack5" className="text-gray-300 text-sm cursor-pointer">
                I have <span className="text-purple-400 font-bold">read all FAQs</span> and understand the terms
              </label>
            </div>
          </div>

          {allAgreed && (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-green-400 text-sm font-medium">All acknowledgments confirmed</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={handleDownload}
            disabled={!allAgreed || !formFilled}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 disabled:opacity-50"
            data-testid="btn-download-agreement"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Agreement Form
          </Button>

          <Button
            onClick={handleWhatsApp}
            disabled={!allAgreed || !formFilled}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 disabled:opacity-50"
            data-testid="btn-whatsapp"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact via WhatsApp
          </Button>
        </div>

        {(!allAgreed || !formFilled) && (
          <p className="text-orange-400 text-sm text-center mt-4">
            Please fill all required fields (*) and check all acknowledgment boxes to proceed
          </p>
        )}
      </div>
    </div>
  );
};

ContributorAgreement.displayName = 'ContributorAgreement';
