import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Shield, HeartHandshake, Leaf, TrendingUp, Info, Activity } from 'lucide-react';

export const ESGPillars: React.FC = () => {
  const [activeView, setActiveView] = useState<'pillars' | 'sbti'>('pillars');
  const [hoveredPoint, setHoveredPoint] = useState<'current' | '2030' | '2050' | null>(null);

  const pillars = [
    {
      title: 'Profit — Pilar Econômico',
      icon: <TrendingUp size={20} />,
      color: 'var(--primary-light)',
      accentBg: 'rgba(59, 130, 246, 0.1)',
      stats: 'R$ 1,4B Reinvestidos',
      subStats: '71% Receita Descarbonização',
      description: 'Reinvestimento massivo em Pesquisa, Desenvolvimento e Inovação (PD&I) em 2025. O crescimento financeiro é integrado a soluções ambientais, garantindo que a maior parte da receita venha de produtos de eficiência ecológica.'
    },
    {
      title: 'People — Pilar Social',
      icon: <HeartHandshake size={20} />,
      color: 'var(--accent-purple)',
      accentBg: 'rgba(139, 92, 246, 0.1)',
      stats: '335 Projetos em 2025',
      subStats: '778 Mil Pessoas Beneficiadas',
      description: 'Programas de inclusão ativa com foco em educação técnica, atividades esportivas e promoção da saúde nas comunidades globais onde a WEG opera. Impacto real na qualidade de vida local e consolidação do laço social.'
    },
    {
      title: 'Planet — Pilar Ambiental',
      icon: <Leaf size={20} />,
      color: 'var(--success)',
      accentBg: 'rgba(16, 185, 129, 0.1)',
      stats: '31,9% Redução Emissões',
      subStats: 'Metas Validadas pela SBTi',
      description: 'Redução agressiva de emissões de Escopos 1 e 2 em toda a operação global. Planejamento científico voltado ao cumprimento de metas mundiais sob o respaldo científico internacional.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <SectionHeader
          tag="TÓPICO 5"
          title="Ética, Cidadania e Sustentabilidade"
          subtitle="O modelo ESG Triple Bottom Line da WEG S.A.: integrando rentabilidade, comunidade e descarbonização científica."
          accentColor="#10b981"
        />

        {/* View Toggle */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.25rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <button
            onClick={() => setActiveView('pillars')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'pillars' ? 'var(--success)' : 'transparent',
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
            <Leaf size={14} /> Três Pilares ESG
          </button>
          <button
            onClick={() => setActiveView('sbti')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'sbti' ? 'var(--success)' : 'transparent',
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
            <Activity size={14} /> Trajetória SBTi
          </button>
        </div>
      </div>

      {activeView === 'pillars' ? (
        /* Pillars View */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
          textAlign: 'left',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {pillars.map((p, idx) => (
            <div key={idx} className="glass-panel" style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  color: p.color,
                  background: p.accentBg,
                  padding: '0.4rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {p.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{p.title}</h4>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', flexGrow: 1 }}>
                {p.description}
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '0.5rem 0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.15rem',
                marginTop: '0.25rem'
              }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: p.color }}>{p.stats}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{p.subStats}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* SBTi Graph View */
        <div className="glass-panel" style={{
          padding: '1.75rem',
          textAlign: 'left',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {/* SVG Line Graph */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1rem',
              position: 'relative'
            }}>
              <svg viewBox="0 0 500 200" width="100%" height="auto" style={{ overflow: 'visible' }}>
                <line x1="50" y1="30" x2="450" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                <line x1="50" y1="100" x2="450" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                <line x1="50" y1="170" x2="450" y2="170" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                
                <path
                  d="M 50 40 L 220 100 L 450 170"
                  fill="none"
                  stroke="var(--success)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.3))' }}
                />

                {/* Data points */}
                <circle
                  cx="50"
                  cy="40"
                  r={hoveredPoint === 'current' ? '8' : '5'}
                  fill="#ffffff"
                  stroke="var(--success)"
                  strokeWidth="3"
                  style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                  onMouseEnter={() => setHoveredPoint('current')}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                <circle
                  cx="220"
                  cy="100"
                  r={hoveredPoint === '2030' ? '8' : '5'}
                  fill="#ffffff"
                  stroke="var(--success)"
                  strokeWidth="3"
                  style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                  onMouseEnter={() => setHoveredPoint('2030')}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                <circle
                  cx="450"
                  cy="170"
                  r={hoveredPoint === '2050' ? '8' : '5'}
                  fill="#ffffff"
                  stroke="var(--success)"
                  strokeWidth="3"
                  style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                  onMouseEnter={() => setHoveredPoint('2050')}
                  onMouseLeave={() => setHoveredPoint(null)}
                />

                <text x="50" y="195" fill="var(--text-secondary)" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="var(--font-mono)">REAL (2025)</text>
                <text x="220" y="195" fill="var(--text-secondary)" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="var(--font-mono)">META 2030</text>
                <text x="450" y="195" fill="var(--text-secondary)" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="var(--font-mono)">META 2050</text>

                <text x="50" y="20" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="700">-31,9%</text>
                <text x="220" y="80" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="700">-52%</text>
                <text x="450" y="150" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="700">NET-ZERO</text>
              </svg>
            </div>

            {/* Interactive Info Explainer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '1rem',
                borderRadius: '10px',
                minHeight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}>
                {!hoveredPoint ? (
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem' }}>
                      <Info size={14} style={{ color: 'var(--success)' }} />
                      Auditoria Científica
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Passe o mouse ou toque nos pontos do gráfico para revelar os detalhes operacionais de cada marco de emissões da WEG validados pela **SBTi**.
                    </span>
                  </div>
                ) : hoveredPoint === 'current' ? (
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--success)', display: 'block', marginBottom: '0.25rem' }}>Status Atual: -31,9% nas Emissões</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Resultados consolidados em 2025 para emissões de Escopo 1 (diretas) e Escopo 2 (energia adquirida). Indica a substituição massiva por fontes limpas internas.
                    </span>
                  </div>
                ) : hoveredPoint === '2030' ? (
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--success)', display: 'block', marginBottom: '0.25rem' }}>Meta Intermediária 2030: -52%</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Compromisso robusto e intermediário de redução absoluta de emissões de carbono operacionais de forma auditável e científica global.
                    </span>
                  </div>
                ) : (
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--success)', display: 'block', marginBottom: '0.25rem' }}>Fronteira 2050: Net-Zero Total</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Neutralização absoluta de toda a cadeia produtiva (incluindo fornecedores e logística - Escopo 3), validando o pioneirismo ecológico global da WEG S.A.
                    </span>
                  </div>
                )}
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Shield size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                  <strong>Metas SBTi:</strong> A Science Based Targets initiative garante que os cortes da WEG estão alinhados ao Acordo de Paris para limitação climática global.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
