import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Shuffle, Sliders } from 'lucide-react';

export const CompetitorMatrix: React.FC = () => {
  const [tariffProb, setTariffProb] = useState(65.38);

  const isCriticalThreshold = tariffProb >= 50;

  const competitors = [
    {
      name: 'WEG S.A.',
      roic: '32,5%',
      strategy: 'Foco em hardware altamente verticalizado, controle total de insumos e manufatura de extrema eficiência (Estratégia Modular).',
      strength: 'Fios de cobre, chapas de aço silício e tintas provetivas fabricados internamente.'
    },
    {
      name: 'Siemens AG',
      roic: '17,8% (ROCE)',
      strategy: 'Transição estratégica de frentes de hardware para software, promovendo o Ecosistema Digital Xcelerator.',
      strength: 'Líder em digital twins, software de CLP e sistemas em nuvem industrial.'
    },
    {
      name: 'ABB Ltd',
      roic: 'N/D',
      strategy: 'Automação digital robusta e expansão recente através da aquisição da divisão de motores NEMA da Siemens.',
      strength: 'Liderança global em robótica de braço mecânico e drives digitais.'
    }
  ];

  return (
    <section id="estrategia-competitiva" style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border-subtle)' }}>
      <SectionHeader
        tag="TÓPICO 4"
        title="Estratégia Competitiva"
        subtitle="Entenda como a WEG supera gigantes globais através de verticalização e agilidade estratégica sustentada pela Teoria dos Jogos e Análise Bayesiana."
        accentColor="#3b82f6"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        marginBottom: '3rem'
      }}>
        {/* Left Section: Competitor Cards & M&A */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} style={{ color: 'var(--primary-light)' }} />
              Verticalização como Vantagem Competitiva
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Diferente de Siemens e ABB, que terceirizam insumos básicos, a WEG fabrica internamente seus <strong>fios de cobre, chapas de aço silício e tintas protetivas</strong>. Esse domínio completo da cadeia protege as margens e a entrega contra crises logísticas globais, impulsionando o **ROIC de 32,5%** da WEG vs. **17,8% (ROCE)** da Siemens.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shuffle size={18} style={{ color: 'var(--primary-light)' }} />
              M&A Regal Rexnord & Equilíbrio de Nash
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Em 2024, a WEG adquiriu a divisão de motores industriais e geradores da **Regal Rexnord por ~US$ 400 milhões**, consolidando de vez sua capacidade produtiva e capilaridade comercial nos EUA, México e China. A transação representa um **Equilíbrio de Nash de concorrência não destrutiva**, onde a WEG absorve capacidade instalada física sem disparar uma guerra fratricida de preços com concorrentes ocidentais.
            </p>
          </div>
        </div>

        {/* Right Section: Bayesian Tariff Interactive Decision Simulator */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left', border: '1px solid var(--border-active)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
              Decisão Bayesiana & Análise de Risco
            </h4>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(59, 130, 246, 0.15)',
              color: 'var(--primary-light)',
              padding: '0.2rem 0.5rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)'
            }}>
              BAYESIAN TREE
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4' }}>
            Ao detectar sinais político-econômicos de tarifas severas nos EUA, a WEG recalculou a probabilidade condicionada de impacto alfandegário, que **saltou de 40% para 65,38%**. Isso ativou instantaneamente a expansão modular local. Use o controle abaixo para simular este cálculo:
          </p>

          {/* Interactive Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
              <span>Probabilidade de Tarifas Severas (P):</span>
              <strong style={{ color: tariffProb === 65.38 ? 'var(--primary-light)' : '#ffffff', fontSize: '0.95rem' }}>
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
              style={{
                width: '100%',
                accentColor: 'var(--primary-light)',
                background: 'rgba(255, 255, 255, 0.1)',
                height: '4px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              <span>40% (Risco Inicial)</span>
              <span 
                onClick={() => setTariffProb(65.38)}
                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'var(--primary-light)' }}
              >
                Reset para 65,38%
              </span>
              <span>100% (Certeza)</span>
            </div>
          </div>

          {/* Interactive Graph Decision Tree */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sliders size={16} style={{ color: 'var(--primary-light)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Estado de Risco Bayesiano:</span>
            </div>

            {/* Tree branches */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8rem' }}>
              {/* Branch 1: Export Strategy */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem',
                borderRadius: '8px',
                background: !isCriticalThreshold ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                border: !isCriticalThreshold ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                opacity: !isCriticalThreshold ? 1 : 0.4,
                transition: 'all 0.3s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: !isCriticalThreshold ? '#ffffff' : 'var(--text-muted)' }} />
                  <span>Risco Baixo (&lt;50%): Exportação Direta</span>
                </div>
                <span>Manter Fluxo do BR</span>
              </div>

              {/* Branch 2: Modular Local strategy */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem',
                borderRadius: '8px',
                background: isCriticalThreshold ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                border: isCriticalThreshold ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid transparent',
                opacity: isCriticalThreshold ? 1 : 0.4,
                boxShadow: isCriticalThreshold ? '0 0 15px rgba(59, 130, 246, 0.15)' : 'none',
                transition: 'all 0.3s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isCriticalThreshold ? 'var(--primary-light)' : 'var(--text-muted)' }} />
                  <strong>Risco Crítico (&ge;50%): Expansão Local</strong>
                </div>
                <strong>ATIVAR M&amp;A LOCAL</strong>
              </div>
            </div>

            {/* Strategic Decision Result Alert */}
            <div style={{
              background: isCriticalThreshold ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.02)',
              border: isCriticalThreshold ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '0.75rem',
              fontSize: '0.8rem',
              color: isCriticalThreshold ? '#ffffff' : 'var(--text-secondary)',
              textAlign: 'center',
              fontWeight: 500,
              transition: 'all 0.3s'
            }}>
              {isCriticalThreshold ? (
                <span>
                  🚨 <strong>Ação Ativada:</strong> Expansão modular acelerada no México/EUA. Aquisição da **Regal Rexnord** concretizada por **~US$ 400M** para blindagem tarifária.
                </span>
              ) : (
                <span>
                  💡 <strong>Ação Recomendada:</strong> Manter exportações centralizadas do Brasil sem custos adicionais de fusões locais.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Comparison Grid */}
      <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.25rem', textAlign: 'left', fontWeight: 700 }}>
        Matriz Competitiva de Posicionamento B2B
      </h4>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        textAlign: 'left'
      }}>
        {competitors.map((comp, idx) => (
          <div 
            key={idx} 
            className="glass-panel" 
            style={{ 
              padding: '1.75rem', 
              borderTop: comp.name === 'WEG S.A.' ? '3px solid var(--primary-light)' : '1px solid var(--glass-border)' 
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{comp.name}</span>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                color: comp.name === 'WEG S.A.' ? 'var(--success)' : 'var(--text-secondary)'
              }}>
                ROIC: {comp.roic}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600 }}>Estratégia</span>
                <p style={{ color: 'var(--text-secondary)' }}>{comp.strategy}</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 600 }}>Vantagem Operacional</span>
                <p style={{ color: 'var(--text-secondary)' }}>{comp.strength}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
