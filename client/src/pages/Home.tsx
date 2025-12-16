import { useRef } from 'react';
import { Document } from '@/components/Document';
import { DownloadButton } from '@/components/DownloadButton';

export default function Home() {
  const documentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start py-8 md:py-12 px-4 md:px-6 relative">
      {/* Content Layer */}
      <div className="w-full flex flex-col items-center">
        <p className="text-muted-foreground mb-4 text-sm font-mono uppercase tracking-widest opacity-70">
          Official Documentation
        </p>
        
        {/* The Printable Document */}
        <Document ref={documentRef} />
        
        {/* Floating Action Button */}
        <DownloadButton targetRef={documentRef} />
      </div>
    </div>
  );
}
