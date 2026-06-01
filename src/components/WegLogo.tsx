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
      viewBox="0 0 150 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* 
        Official Geometric WEG Logo Grid Representation (15x9 Grid)
        Each cell unit is 10x10 pixels.
        Color represents the corporate WEG Blue (or theme color).
      */}
      
      {/* 1. Top border horizontal line (Row 0, Cols 0 to 13) */}
      <rect x="0" y="0" width="140" height="10" fill={color} />
      
      {/* 2. Left border vertical line (Col 0, Rows 1 to 6) - stops before Row 7 (the gap) */}
      <rect x="0" y="10" width="10" height="50" fill={color} />
      
      {/* 3. Bottom border horizontal line (Row 8, Cols 0 to 14) */}
      <rect x="0" y="80" width="150" height="10" fill={color} />
      
      {/* 4. Right border & G right line vertical connector (Col 14, Rows 2 to 7) */}
      <rect x="140" y="20" width="10" height="60" fill={color} />

      {/* --- LETTER W --- */}
      {/* W Leg 1 (Col 2) */}
      <rect x="20" y="20" width="10" height="50" fill={color} />
      {/* W Leg 2 (Col 4) */}
      <rect x="40" y="20" width="10" height="50" fill={color} />
      {/* W Leg 3 (Col 6) */}
      <rect x="60" y="20" width="10" height="50" fill={color} />
      {/* W Bottom Connector (Cols 2 to 6, Row 6) */}
      <rect x="20" y="60" width="50" height="10" fill={color} />

      {/* --- LETTER E --- */}
      {/* E Back vertical (Col 8) */}
      <rect x="80" y="20" width="10" height="50" fill={color} />
      {/* E Top horizontal bar (Row 2, Cols 9 to 10) */}
      <rect x="90" y="20" width="20" height="10" fill={color} />
      {/* E Middle horizontal bar (Row 4, Cols 9 to 10) */}
      <rect x="90" y="40" width="20" height="10" fill={color} />
      {/* E Bottom horizontal bar (Row 6, Cols 9 to 10) */}
      <rect x="90" y="60" width="20" height="10" fill={color} />

      {/* --- LETTER G --- */}
      {/* G Left vertical (Col 12) */}
      <rect x="110" y="20" width="10" height="50" fill={color} />
      {/* G Top horizontal bar (Row 2, Cols 13 to 14) */}
      <rect x="120" y="20" width="30" height="10" fill={color} />
      {/* G Middle horizontal bar (Row 4, Cols 13 to 14) */}
      <rect x="120" y="40" width="20" height="10" fill={color} />
      {/* G Bottom horizontal bar (Row 6, Cols 13 to 14) */}
      <rect x="120" y="60" width="30" height="10" fill={color} />
      {/* G Right vertical bar (Col 14, Rows 3 to 5) - connects with G's top/bottom and right border */}
      <rect x="140" y="30" width="10" height="30" fill={color} />
    </svg>
  );
};
