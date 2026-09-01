import React from 'react';
import officialLogoImg from '../assets/images/ambnl_official_logo_1788218751915.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
  textColor?: 'light' | 'dark';
  variant?: 'full' | 'mark-only';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'dark',
  variant = 'full',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    custom: '',
  };

  const logoMark = (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-md shadow-xs bg-white border border-slate-200/80 p-0.5 ${sizeMap[size]} ${className}`}>
      <img
        src={officialLogoImg}
        alt="A.M.B.N.L Official Logo"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain"
      />
    </div>
  );

  if (variant === 'mark-only' || !showText) {
    return logoMark;
  }

  return (
    <div className="flex items-center gap-3.5 group text-left">
      {logoMark}
      <div className="flex flex-col">
        <span
          className={`font-black tracking-tight text-base sm:text-lg leading-tight uppercase font-display ${
            textColor === 'light' ? 'text-white' : 'text-slate-900'
          }`}
        >
          A.M. BIBIRE <span className="text-red-600">NIG LIMITED</span>
        </span>
        <span
          className={`text-[11px] sm:text-xs font-medium tracking-normal line-clamp-1 ${
            textColor === 'light' ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Industrial & Building Materials
        </span>
      </div>
    </div>
  );
};

export default Logo;
