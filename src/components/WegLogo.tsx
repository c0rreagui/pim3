import React from 'react';

interface WegLogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  letterColor?: string;
  className?: string;
}

export const WegLogo: React.FC<WegLogoProps> = ({
  width = 120,
  height = 80,
  color = '#004b93',
  letterColor,
  className = ''
}) => {
  // Dynamically contrast letter color if not explicitly provided
  const finalLetterColor = letterColor 
    ? letterColor 
    : (color === '#ffffff' || color === 'white' ? '#030712' : '#ffffff');

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 68" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: '4px' }}
    >
      {/* Outer block paths representing the official geometric WEG logo */}
      <path 
        d="M 0 0 L 100 0 L 100 68 L 0 68 Z" 
        fill={color} 
      />
      {/* Inner space lines that form the letters "weg" */}
      {/* Letter W paths */}
      <path 
        d="M 12 12 L 19 12 L 19 46 L 25 46 L 25 12 L 32 12 L 32 46 L 38 46 L 38 12 L 45 12 L 45 56 L 12 56 Z" 
        fill={finalLetterColor} 
      />
      {/* Letter E paths */}
      <path 
        d="M 51 12 L 67 12 L 67 21 L 58 21 L 58 29 L 66 29 L 66 38 L 58 38 L 58 47 L 67 47 L 67 56 L 51 56 Z" 
        fill={finalLetterColor} 
      />
      {/* Letter G paths */}
      <path 
        d="M 72 12 L 88 12 L 88 29 L 80 29 L 80 21 L 79 21 L 79 47 L 88 47 L 88 38 L 82 38 L 82 29 L 95 29 L 95 56 L 72 56 Z" 
        fill={finalLetterColor} 
      />
    </svg>
  );
};
