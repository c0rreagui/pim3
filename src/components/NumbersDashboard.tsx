import React, { useState, useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { Landmark, TrendingUp, Cpu, Leaf, Info } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext: string;
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  subtext,
  targetNumber,
  prefix = '',
  suffix = '',
  decimals = 0
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const stepTime = 16; // ~60fps
    const totalSteps = duration / stepTime;
    const increment = targetNumber / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber]);

  const formattedCount = count.toFixed(decimals).replace('.', ',');

  return (
    <div className="glass-panel" style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        opacity: 0.03,
        transform: 'scale(4)'
      }}>
        {icon}
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {label}
        </span>
        <div style={{
          color: 'var(--primary-light)',
          background: 'rgba(59, 130, 246, 0.1)',
          padding: '0.5rem',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </div>
      </div>
      <div>
        <h3 style={{
          fontSize: 'var(--text-3xl)',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          color: '#ffffff',
          lineHeight: '1',
          marginBottom: '0.25rem'
        }}>
          {prefix}{formattedCount}{suffix}
        </h3>
        <p style={{
          fontSize: 'var(--text-base)',
          color: 'var(--text-secondary)',
          fontWeight: 500
        }}>
          {value}
        </p>
      </div>
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '0.75rem',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }}>
        {subtext}
      </div>
    </div>
  );
};

export const NumbersDashboard: React.FC = () => {
  return (
    <section id="weg-em-numeros" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <SectionHeader 
        tag="TÓPICO 1" 
        title="WEG em Números — 2025" 
        subtitle="Uma visão geral da força financeira, inovação estruturada e comprometimento sustentável da líder global em eletroeletrônica."
        accentColor="#3b82f6"
      />

      <div className="mobile-carousel" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1rem',
        marginBottom: 'clamp(0.5rem, 2vh, 1.5rem)'
      }}>
        <MetricCard 
          icon={<Landmark size={20} />}
          label="Receita Operacional"
          value="R$ 40,8 Bilhões"
          subtext="Receita líquida registrada em 2025 com expansão global robusta."
          targetNumber={40.8}
          prefix="R$ "
          suffix="B"
          decimals={1}
        />
        <MetricCard 
          icon={<TrendingUp size={20} />}
          label="ROIC"
          value="32,5%"
          subtext="Retorno sobre o Capital Investido que demonstra eficiência ímpar."
          targetNumber={32.5}
          suffix="%"
          decimals={1}
        />
        <MetricCard 
          icon={<Cpu size={20} />}
          label="Investimento em PD&I"
          value="R$ 1,4 Bilhão"
          subtext="Pesquisa, Desenvolvimento e Inovação para antecipar o mercado."
          targetNumber={1.4}
          prefix="R$ "
          suffix="B"
          decimals={1}
        />
        <MetricCard 
          icon={<Leaf size={20} />}
          label="Faturamento Sustentável"
          value="71%"
          subtext="Receita inteiramente gerada por soluções sustentáveis da marca."
          targetNumber={71}
          suffix="%"
          decimals={0}
        />
      </div>

      <div className="glass-panel" style={{
        padding: '2.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', marginBottom: '0.75rem' }}>
            <Leaf size={18} />
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              ESG & Descarbonização
            </span>
          </div>
          <h4 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
            A Força do Faturamento Sustentável
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
            A WEG direciona seu portfólio estrategicamente para o futuro sustentável. Hoje, <strong style={{ color: '#ffffff' }}>71% da receita operacional</strong> da companhia vem de produtos de descarbonização e eficiência energética. Na WEG, o crescimento e o <strong style={{ color: 'var(--success)' }}>impacto ecológico positivo</strong> andam sempre juntos.
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '1rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <Info size={16} style={{ color: 'var(--primary-light)', marginTop: '0.2rem', flexShrink: 0 }} />
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              <strong>Nota PIM III:</strong> Este percentual de 71% valida o posicionamento competitivo verde frente a exigências rigorosas de reguladores europeus e norte-americanos.
            </span>
          </div>
        </div>
 
        <div className="mobile-hide" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {/* Radial Graph */}
          <svg width="220" height="220" viewBox="0 0 220 220" style={{ transform: 'rotate(-90deg)' }}>
            <circle 
              cx="110" 
              cy="110" 
              r="85" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.04)" 
              strokeWidth="20" 
            />
            <circle 
              cx="110" 
              cy="110" 
              r="85" 
              fill="none" 
              stroke="url(#gradient-success)" 
              strokeWidth="20" 
              strokeDasharray={2 * Math.PI * 85}
              strokeDashoffset={2 * Math.PI * 85 * (1 - 0.71)}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
              }}
            />
            <defs>
              <linearGradient id="gradient-success" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#ffffff',
              lineHeight: '1'
            }}>
              71%
            </span>
            <span style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--text-secondary)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginTop: '0.25rem'
            }}>
              Sustentável
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
