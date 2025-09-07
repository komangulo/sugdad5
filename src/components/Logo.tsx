import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-pink-500 tracking-wider">
        Sugar Daddy Madrid
      </h1>
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent my-2"></div>
      <p className="text-sm text-gray-400 tracking-widest">ELEGANCIA • DISCRECIÓN • EXCLUSIVIDAD</p>
    </div>
  );
};

export default Logo;
