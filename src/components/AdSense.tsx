
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSense({ 
  adSlot, 
  adFormat = 'auto',
  className = '',
  style = {}
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // Only push if ad hasn't been rendered yet
      if (adRef.current && !adRef.current.dataset.pushed) {
        const adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
        window.adsbygoogle = adsbygoogle;
        adRef.current.dataset.pushed = 'true';
      }
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={{
        display: 'block',
        ...style
      }}
      data-ad-client="ca-pub-3519251854950355"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}