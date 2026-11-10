import React, { useEffect, useState } from 'react';

interface CrumbItem {
  id: number;
  char?: string;
  size: number;
  left: number;
  duration: number;
  delay: number;
  isDot: boolean;
}

interface CrumbsBackgroundProps {
  enabled: boolean;
}

export const CrumbsBackground: React.FC<CrumbsBackgroundProps> = ({ enabled }) => {
  const [crumbs, setCrumbs] = useState<CrumbItem[]>([]);

  useEffect(() => {
    if (!enabled) {
      setCrumbs([]);
      return;
    }

    const crumbChars = ['🌾', '✨', '🍞', '🥖', '🥐', '✨', '✨', '🍯'];
    const generated: CrumbItem[] = [];

    for (let i = 0; i < 40; i++) {
      const isChar = Math.random() > 0.45;
      const char = isChar ? crumbChars[Math.floor(Math.random() * crumbChars.length)] : undefined;
      const size = isChar ? Math.floor(Math.random() * 12 + 10) : Math.random() * 5 + 2;

      generated.push({
        id: i,
        char,
        size,
        left: Math.random() * 98,
        duration: Math.random() * 12 + 12,
        delay: Math.random() * 14,
        isDot: !isChar,
      });
    }

    setCrumbs(generated);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {crumbs.map((crumb) => (
        <div
          key={crumb.id}
          className="crumb-particle opacity-0"
          style={{
            left: `${crumb.left}%`,
            animationDuration: `${crumb.duration}s`,
            animationDelay: `${crumb.delay}s`,
            fontSize: crumb.char ? `${crumb.size}px` : undefined,
            width: crumb.isDot ? `${crumb.size}px` : undefined,
            height: crumb.isDot ? `${crumb.size}px` : undefined,
            borderRadius: crumb.isDot ? '50%' : undefined,
            background: crumb.isDot
              ? 'radial-gradient(circle, rgba(254, 240, 138, 0.8) 0%, rgba(234, 179, 8, 0.15) 60%, transparent 100%)'
              : undefined,
            filter: crumb.isDot ? 'blur(0.5px)' : 'drop-shadow(0 0 6px rgba(254, 240, 138, 0.4))',
          }}
        >
          {crumb.char}
        </div>
      ))}
    </div>
  );
};
