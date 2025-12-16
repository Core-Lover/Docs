import { useRef } from 'react';
import { Document } from '@/components/Document';
import { DownloadButton } from '@/components/DownloadButton';
import { MarketComparison } from '@/components/MarketComparison';
import { SalaryCalculator } from '@/components/SalaryCalculator';
import { FAQSection } from '@/components/FAQSection';
import { ContributorAgreement } from '@/components/ContributorAgreement';

export default function Home() {
  const documentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start py-8 md:py-12 px-4 md:px-6 relative">
      {/* Content Layer */}
      <div className="w-full flex flex-col items-center">
        {/* Download Button at Top */}
        <DownloadButton targetRef={documentRef} />
        
        <p className="text-muted-foreground mb-4 text-sm font-mono uppercase tracking-widest opacity-70">
          Official Documentation
        </p>
        
        {/* The Printable Document */}
        <Document ref={documentRef} />
        
        {/* Additional Sections - Full Width Container */}
        <div className="w-full max-w-4xl mt-8">
          {/* Market Comparison - Why EIX is Better */}
          <MarketComparison />
          
          {/* Earnings Calculator with Consent Gate */}
          <SalaryCalculator />
          
          {/* FAQ Section */}
          <FAQSection />
          
          {/* Contributor Agreement Form */}
          <ContributorAgreement />
        </div>
      </div>
    </div>
  );
}
