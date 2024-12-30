import React from 'react';
import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Rocket className="w-6 h-6" />
      <span className="text-xl font-bold">BrandBoost</span>
    </div>
  );
};

export default Logo;