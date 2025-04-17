
import { useEffect, useState } from "react";

export const GridOverlay = () => {
  const [scanlinePosition, setScanlinePosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#0EA5E9]/5" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(30,174,219,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/70 to-transparent" style={{ top: `${scanlinePosition}%` }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3)_0%,transparent_80%)]" />
    </div>
  );
};
