import React from 'react';

interface WegLogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export const WegLogo: React.FC<WegLogoProps> = ({
  width = 120,
  height = 80,
  color = '#00579e',
  className = ''
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 979.15 686.52" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <g transform="translate(137.74169, 1011.3389)">
        {/* Letter W part / Left Frame Part */}
        <polygon
          points="217.56,496.18 216.95,496.18 216.95,407.21 280.02,407.21 280.02,471.2 265.5,471.2 265.5,421.84 255.75,421.84 255.75,471.8 241.23,471.8 241.23,421.84 232.09,421.84 232.09,481.55 378.32,481.55 378.32,496.18 217.56,496.18"
          transform="matrix(6.067427, 0, 0, -6.0901238, -1454.07, 2010.4587)"
          fill={color}
        />
        {/* Letter G part / Right and Bottom Frame Part */}
        <path
          d="M 605.10596,-859.2258 L 605.10596,-469.45538 L 749.29051,-469.45538 L 749.29051,-406.4222 L -137.74169,-406.4222 L -137.74169,-324.81401 L 841.40423,-324.81401 L 841.40423,-859.2258 L 608.91231,-859.2258 L 605.10596,-859.2258 z M 693.56552,-766.35082 L 749.29051,-766.35082 L 749.29051,-554.86991 L 693.56552,-554.86991 L 693.56552,-766.35082 z"
          fill={color}
        />
        {/* Letter E part / Middle Part */}
        <path
          d="M 302.12032,-859.2258 L 302.12032,-469.45538 L 549.53322,-469.45538 L 549.53322,-554.86991 L 390.57997,-554.86991 L 390.57997,-614.249 L 553.18727,-614.249 L 553.18727,-859.2258 L 302.12032,-859.2258 z M 390.57997,-770.15717 L 460.92135,-770.15717 L 460.92135,-699.51128 L 390.57997,-699.51128 L 390.57997,-770.15717 z"
          fill={color}
        />
      </g>
    </svg>
  );
};

