import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const faqs = [
    {
      question: "What exactly is a 'Contributor' role at EthicX?",
      answer: "As a Contributor, you are joining EthicX as an early-stage supporter - similar to an early employee or investor in a startup. You provide capital and/or skills to help build the platform, and in return, you receive a share of the platform's revenue based on your contribution level and the total team size. This is NOT traditional employment with a fixed salary."
    },
    {
      question: "Is there a fixed salary or guaranteed income?",
      answer: "NO. There is absolutely NO fixed salary or guaranteed income. All earnings are based on actual platform revenue. The calculator shows ESTIMATED PROJECTIONS based on expected performance. Your actual earnings will depend on: (1) Real platform revenue, (2) Number of contributors in the system, (3) Your contribution amount relative to others, (4) Market conditions and user adoption."
    },
    {
      question: "How is the revenue distributed?",
      answer: "Revenue is distributed as follows: 25% goes to the Contributors Pool (shared among all contributors based on their investment weight), 20% goes to the AIQX Token Holders Fund (distributed among AIQX token holders), and 55% goes to Liquidity & Growth (for exchange listings, marketing, development, and platform expansion)."
    },
    {
      question: "What is the difference between Initial Phase and Mature Phase?",
      answer: "Initial Phase (Months 1-3): The platform is launching and building user base. Expected revenue is lower (~$156K/month estimate). Your earnings will be lower during this period. Mature Phase (Month 4+): The platform has established users and revenue streams. Expected revenue grows significantly (~$500K/month projection). Your earnings increase proportionally."
    },
    {
      question: "How is my share calculated?",
      answer: "Your share is calculated based on your contribution weight. Formula: (Your Contribution / Total Team Investment) × 25% of Monthly Revenue. For example, if you contribute $1,000 and total team investment is $100,000, your share is 1%. If monthly revenue is $200,000, the contributor pool is $50,000 (25%), and your share would be ~$500/month."
    },
    {
      question: "What do AIQX token holders receive?",
      answer: "AIQX token holders receive a separate 20% of all platform revenue, distributed among all token holders. This is separate from the contributor pool. If you are both a contributor AND an AIQX holder, you can earn from both pools."
    },
    {
      question: "When will I receive my first payment?",
      answer: "Your first payment will be based on the actual revenue generated in the first 3 months (Initial Phase). Payments are distributed monthly after the platform begins generating revenue. The exact amount will be calculated based on real revenue, not projections."
    },
    {
      question: "Can I lose my contribution?",
      answer: "Like any early-stage venture, there are risks involved. Your contribution is used to build and grow the platform. While we project positive returns, actual performance depends on market adoption. We strongly recommend only contributing what you can afford to invest in an early-stage project."
    },
    {
      question: "Why is EIX so much cheaper than competitors?",
      answer: "EIX charges only $20 per token deployment while competitors charge $100-$2,000+. This aggressive pricing strategy is designed to capture significant market share. Lower prices + higher volume = sustainable revenue. We prioritize accessibility over premium pricing."
    },
    {
      question: "How do I become a Contributor?",
      answer: "To become a contributor: (1) Review all information and understand that earnings are estimates, (2) Download and complete the Contributor Agreement form, (3) Contact us via WhatsApp with your completed form, (4) Make your contribution, (5) Receive confirmation and onboarding details."
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-12 relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-blue-400" />
          Frequently Asked Questions
        </h3>
      </div>

      <p className="text-gray-400 mb-6">
        Please read all FAQs carefully before becoming a contributor. Understanding these points prevents any future misunderstandings about earnings.
      </p>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 data-[state=open]:border-orange-500/50"
          >
            <AccordionTrigger className="text-white text-left hover:no-underline py-4" data-testid={`faq-trigger-${index}`}>
              <span className="flex items-start gap-3">
                <span className="text-orange-400 font-bold text-sm mt-0.5">{index + 1}.</span>
                <span className="text-sm font-medium">{faq.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm pb-4 pl-7">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Final Warning */}
      <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
        <p className="text-orange-400 font-bold mb-2">Important Reminder</p>
        <p className="text-gray-300 text-sm">
          By becoming a contributor, you acknowledge that all earnings shown are ESTIMATES based on projected platform performance. 
          EthicX makes no guarantees about actual returns. You are joining as an early-stage supporter, not as a traditional employee. 
          Please only contribute what you can afford to invest in an early-stage blockchain project.
        </p>
      </div>
    </div>
  );
};

FAQSection.displayName = 'FAQSection';
