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
    <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: accentColor,
          background: `${accentColor}1A`,
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          border: `1px solid ${accentColor}33`,
          fontFamily: 'var(--font-mono)'
        }}>
          PIM III • Marketing
        </span>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)'
        }}>
          {tag}
        </span>
      </div>
      <h2 style={{
        fontSize: '2.25rem',
        fontWeight: 800,
        lineHeight: 1.2,
        marginBottom: '0.5rem',
        background: 'linear-gradient(to right, var(--text-primary), var(--text-secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          lineHeight: 1.5
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
