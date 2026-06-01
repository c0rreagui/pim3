import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Shuffle, Sliders, Layers } from 'lucide-react';
import { WegLogo } from './WegLogo';

export const CompetitorMatrix: React.FC = () => {
  const [activeView, setActiveView] = useState<'decision' | 'matrix'>('decision');
  const [tariffProb, setTariffProb] = useState(65.38);

  const isCriticalThreshold = tariffProb >= 50;

  const competitors = [
    {
      name: 'WEG S.A.',
      logo: <WegLogo width={50} height={34} color="#004b93" />,
      roic: '32,5%',
      strategy: 'Foco em hardware altamente verticalizado, controle total de insumos e manufatura de extrema eficiência (Estratégia Modular).',
      strength: 'Fios de cobre, chapas de aço silício e tintas protetivas fabricados internamente.'
    },
    {
      name: 'Siemens AG',
      logo: <div style={{ background: '#009999', width: '50px', height: '34px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: '#ffffff' }}>SIEMENS</div>,
      roic: '17,8% (ROCE)',
      strategy: 'Transição estratégica de frentes de hardware para software, promovendo o Ecosistema Digital Xcelerator.',
      strength: 'Líder em digital twins, software de CLP e sistemas em nuvem industrial.'
    },
    {
      name: 'ABB Ltd',
      logo: <div style={{ background: '#ff0000', width: '50px', height: '34px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>ABB</div>,
      roic: 'N/D',
      strategy: 'Automação digital robusta e expansão recente através da aquisição da divisão de motores NEMA da Siemens.',
      strength: 'Liderança global em robótica de braço mecânico e drives digitais.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <SectionHeader
          tag="TÓPICO 4"
          title="Estratégia Competitiva & Risco"
          subtitle="A agilidade da WEG S.A. sob a perspectiva da Teoria dos Jogos e Análise Bayesiana de mercado."
          accentColor="#3b82f6"
        />

        {/* View Toggle */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.25rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <button
            onClick={() => setActiveView('decision')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'decision' ? 'var(--primary-light)' : 'transparent',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'all 0.2s'
            }}
          >
            <Sliders size={14} /> Decisão Bayesiana
          </button>
          <button
            onClick={() => setActiveView('matrix')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'matrix' ? 'var(--primary-light)' : 'transparent',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'all 0.2s'
            }}
          >
            <Layers size={14} /> Matriz Competitiva
          </button>
        </div>
      </div>

      {activeView === 'decision' ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Left: Competitor cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--primary-light)' }} />
                Verticalização como Defesa Operacional
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5' }}>
                Para se blindar contra quebras de cadeias logísticas externas, a **WEG fabrica internamente seus fios de cobre, chapas de aço silício e tintas protetivas**. Esse domínio completo de insumos protege a produção contra flutuações e garante um **ROIC extraordinário de 32,5%** da WEG vs. **17,8% (ROCE)** da Siemens.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shuffle size={16} style={{ color: 'var(--primary-light)' }} />
                M&amp;A Regal Rexnord & Teoria dos Jogos
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5' }}>
                Em 2024, a WEG adquiriu a divisão de motores e geradores da **Regal Rexnord por ~US$ 400 milhões**, consolidando posições fabris cruciais nos EUA, México e China. A transação opera em um **Equilíbrio de Nash de concorrência não destrutiva**, onde a WEG absorve ativos físicos estratégicos sem desatar guerras tarifárias de preços com rivais ocidentais.
              </p>
            </div>
          </div>

          {/* Right: Bayesian Risk Simulator */}
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left', border: '1px solid var(--border-active)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>
                Simulador Bayesiano de Expansão Local
              </strong>
              <span style={{ fontSize: '0.65rem', background: 'rgba(59,130,246,0.15)', color: 'var(--primary-light)', padding: '0.2rem 0.5rem', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>
                RISK PROBABILITY
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.4' }}>
              A WEG avaliou os sinais macroeconômicos e revisou a probabilidade de tarifas americanas severas, que **saltou de 40% para 65,38%**. Isso ativou a produção local. Mova o slider abaixo para simular a tomada de decisão:
            </p>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                <span>Probabilidade de Tarifas Severas (P):</span>
                <strong style={{ color: tariffProb === 65.38 ? 'var(--primary-light)' : '#ffffff' }}>
                  {tariffProb.toFixed(2)}% {tariffProb === 65.38 ? '(DADO DO PDF)' : ''}
                </strong>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="0.01"
                value={tariffProb} 
                onChange={(e) => setTariffProb(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary-light)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                <span>40% (Risco Inicial)</span>
                <span onClick={() => setTariffProb(65.38)} style={{ cursor: 'pointer', textDecoration: 'underline', color: 'var(--primary-light)' }}>
                  Reset para 65,38%
                </span>
                <span>100% (Certeza)</span>
              </div>
            </div>

            {/* Tree Branch */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.75rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                background: !isCriticalThreshold ? 'rgba(255,255,255,0.03)' : 'transparent',
                border: !isCriticalThreshold ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
                opacity: !isCriticalThreshold ? 1 : 0.4
              }}>
                <span>Risco Controlável (&lt;50%): Exportações</span>
                <strong>Foco Centralizado BR</strong>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                background: isCriticalThreshold ? 'rgba(59,130,246,0.08)' : 'transparent',
                border: isCriticalThreshold ? '1px solid rgba(59,130,246,0.25)' : '1px solid transparent',
                opacity: isCriticalThreshold ? 1 : 0.4
              }}>
                <span>Risco Elevado (&ge;50%): Produção Modular</span>
                <strong>ATIVAR EXPANSÃO LOCAL</strong>
              </div>
            </div>

            <div style={{
              background: isCriticalThreshold ? 'rgba(59,130,246,0.08)' : 'rgba(255,255,255,0.02)',
              border: isCriticalThreshold ? '1px solid rgba(59,130,246,0.18)' : '1px solid rgba(255,255,255,0.04)',
              borderRadius: '8px',
              padding: '0.6rem',
              fontSize: '0.75rem',
              color: isCriticalThreshold ? '#ffffff' : 'var(--text-secondary)',
              textAlign: 'center'
            }}>
              {isCriticalThreshold ? (
                <span>
                  🚨 <strong>Decisão Ativada:</strong> Expansão modular no México/EUA. Aquisição de <strong>~US$ 400M</strong> concretizada para blindar a cadeia produtiva da WEG.
                </span>
              ) : (
                <span>
                  💡 <strong>Decisão Recomendada:</strong> Manter exportações diretas do Brasil sem alocação local de capital físico.
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Competitor Comparison View */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          textAlign: 'left',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {competitors.map((comp, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                padding: '1.25rem', 
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                borderTop: comp.name === 'WEG S.A.' ? '3px solid var(--primary-light)' : '1px solid var(--glass-border)' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {comp.logo}
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>{comp.name}</span>
                </div>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px',
                  color: comp.name === 'WEG S.A.' ? 'var(--success)' : 'var(--text-secondary)'
                }}>
                  ROIC: {comp.roic}
                </span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 600 }}>Estratégia de Posicionamento</span>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{comp.strategy}</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: 600 }}>Diferencial / Força</span>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{comp.strength}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
