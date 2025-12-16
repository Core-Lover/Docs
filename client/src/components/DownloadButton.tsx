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
    if (!targetRef.current) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Document not found.",
      });
      return;
    }

    try {
      setIsGenerating(true);
      toast({
        title: "Generating PDF...",
        description: "Opening print dialog...",
      });

      const element = targetRef.current;
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;

      // Render the element to canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        windowWidth: 1000,
        windowHeight: element.scrollHeight,
      });

      // Get canvas data
      const imageData = canvas.toDataURL('image/png');
      
      // Create PDF
      const pdfDoc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdfDoc.internal.pageSize.getWidth();
      const pdfHeight = pdfDoc.internal.pageSize.getHeight();
      const imageWidth = pdfWidth;
      const imageHeight = (canvas.height * imageWidth) / canvas.width;

      let position = 0;
      pdfDoc.addImage(imageData, 'PNG', 0, position, imageWidth, imageHeight);

      position = imageHeight;
      while (position > pdfHeight) {
        pdfDoc.addPage();
        position = imageHeight - pdfHeight * (Math.floor(position / pdfHeight) - 1);
        pdfDoc.addImage(
          imageData,
          'PNG',
          0,
          -position + pdfHeight,
          imageWidth,
          imageHeight
        );
        position += pdfHeight;
      }

      pdfDoc.save('EIX-Project-Overview.pdf');

      toast({
        title: "Success!",
        description: "PDF downloaded successfully.",
      });
    } catch (error: any) {
      console.error('Full error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not generate PDF. Try using your browser's print function instead.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrintToPDF = () => {
    if (!targetRef.current) return;
    
    const printWindow = window.open('', '', 'height=800,width=1000');
    if (!printWindow) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not open print window. Check your popup settings.",
      });
      return;
    }

    const content = targetRef.current.innerHTML;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>EIX-Project-Overview</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: white; color: black; }
            @media print { body { margin: 0; padding: 20px; } }
            h1 { color: #1e40af; margin-top: 0; }
            h3 { color: #1e40af; }
            .bg-blue-50 { background-color: #f0f4ff; padding: 16px; border-radius: 8px; border: 1px solid #bfdbfe; margin: 16px 0; }
            .bg-gray-50 { background-color: #f9fafb; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb; }
            table { width: 100%; border-collapse: collapse; }
            tr { border-bottom: 1px solid #e5e7eb; }
            td { padding: 8px; }
            .text-blue-600 { color: #2563eb; }
            @page { size: A4; margin: 15mm; }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `);
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 250);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex gap-2">
      <Button 
        onClick={handleDownload} 
        disabled={isGenerating}
        className="shadow-lg rounded-full h-14 w-14 md:w-auto md:h-12 md:px-6 md:rounded-lg"
        size="lg"
        title="Download as PDF"
      >
        {isGenerating ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Download className="h-5 w-5" />
        )}
        <span className="hidden md:inline ml-2 font-medium">Download</span>
      </Button>
      <Button 
        onClick={handlePrintToPDF}
        variant="outline"
        className="shadow-lg rounded-full h-14 w-14 md:w-auto md:h-12 md:px-6 md:rounded-lg"
        size="lg"
        title="Print/Save as PDF"
      >
        <span className="text-lg">🖨️</span>
        <span className="hidden md:inline ml-2 font-medium">Print</span>
      </Button>
    </div>
  );
};
