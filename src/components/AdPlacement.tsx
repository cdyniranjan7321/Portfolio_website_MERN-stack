
import AdSense from './AdSense';

interface AdPlacementProps {
  position: 'top' | 'middle' | 'bottom' | 'sidebar';
  adSlot: string;
}

export default function AdPlacement({ position, adSlot }: AdPlacementProps) {
  const getContainerStyles = (): string => {
    const base = "w-full flex justify-center";
    switch (position) {
      case 'top':
        return `${base} mb-8`;
      case 'bottom':
        return `${base} mt-8`;
      case 'middle':
        return `${base} my-8`;
      case 'sidebar':
        return `${base} mx-4 max-w-[300px]`;
      default:
        return base;
    }
  };

  const getAdStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {
      maxWidth: '100%',
      minHeight: '90px', // Minimum height to prevent layout shift
    };

    if (position === 'sidebar') {
      styles.width = '300px';
      styles.minHeight = '250px';
    }

    return styles;
  };

  return (
    <div className={getContainerStyles()}>
      <div style={{ width: '100%', maxWidth: '728px' }}>
        <AdSense 
          adSlot={adSlot} 
          adFormat="auto"
          style={getAdStyles()}
        />
      </div>
    </div>
  );
}