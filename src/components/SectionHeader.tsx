import React from 'react';

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  accentColor = '#3b82f6'
}) => {
  return (
    <div style={{ marginBottom: 'clamp(0.5rem, 2vh, 2rem)', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'clamp(0.2rem, 1vh, 0.5rem)' }}>
        <span style={{
          fontSize: 'var(--text-xs)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: accentColor,
          background: `${accentColor}1A`,
          padding: '0.2rem 0.6rem',
          borderRadius: '20px',
          border: `1px solid ${accentColor}33`,
          fontFamily: 'var(--font-mono)'
        }}>
          PIM III • Marketing
        </span>
        <span style={{
          fontSize: 'var(--text-xs)',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)'
        }}>
          {tag}
        </span>
      </div>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 800,
        lineHeight: 1.2,
        marginBottom: '0.25rem',
        background: 'linear-gradient(to right, var(--text-primary), var(--text-secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 'var(--text-base)',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          lineHeight: 1.4,
          margin: 0
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
