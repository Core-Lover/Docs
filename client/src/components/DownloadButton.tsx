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
        title: "Downloading...",
        description: "Preparing your document...",
      });

      const element = targetRef.current;
      const htmlContent = element.innerHTML;

      // Create a complete HTML document with styles
      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EIX-Project-Overview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    @media print { body { margin: 0; padding: 0; } }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

      // Create blob and download
      const blob = new Blob([fullHtml], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'EIX-Project-Overview.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Success!",
        description: "Document downloaded successfully.",
      });
    } catch (error: any) {
      console.error('Download error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not download document. Please try again.",
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
    <div className="flex gap-2 justify-center pt-6 pb-4">
      <Button 
        onClick={handleDownload} 
        disabled={isGenerating}
        className="shadow-lg"
        size="lg"
        title="Download as HTML"
      >
        {isGenerating ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Download className="h-5 w-5" />
        )}
        <span className="ml-2 font-medium">Download</span>
      </Button>
    </div>
  );
};
