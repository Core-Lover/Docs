import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DownloadButtonProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ targetRef }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!targetRef.current) return;

    try {
      setIsGenerating(true);
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your document.",
      });

      // Dynamic import to avoid issues
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;

      const element = targetRef.current;
      
      // Render canvas with improved settings
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 1000,
        windowHeight: element.scrollHeight,
        allowTaint: true,
        onclone: (clonedDocument) => {
          // Ensure proper styling in cloned doc
          const clonedElement = clonedDocument.getElementById('pdf-content');
          if (clonedElement) {
            clonedElement.style.boxShadow = 'none';
          }
        }
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let position = 0;

      // Add image in pages
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      let remainingHeight = imgHeight - pageHeight;

      while (remainingHeight > 0) {
        position = remainingHeight * -1;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        remainingHeight -= pageHeight;
      }

      pdf.save('EIX-Project-Overview.pdf');

      toast({
        title: "Success!",
        description: "PDF downloaded successfully.",
      });

    } catch (error) {
      console.error('PDF Generation Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      disabled={isGenerating}
      className="fixed bottom-8 right-8 z-50 shadow-lg rounded-full h-14 w-14 md:w-auto md:h-12 md:px-6 md:rounded-lg animate-in slide-in-from-bottom-5"
      size="lg"
    >
      {isGenerating ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Download className="h-5 w-5" />
      )}
      <span className="hidden md:inline ml-2 font-medium">Download PDF</span>
    </Button>
  );
};
