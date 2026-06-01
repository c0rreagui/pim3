import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ToggleLeft, ToggleRight, Info, Award, Landmark } from 'lucide-react';

export const CostParadox: React.FC = () => {
  const [activeView, setActiveView] = useState<'tco' | 'fiscal'>('tco');
  const [costingMethod, setCostingMethod] = useState<'absorption' | 'abc'>('abc');
  const [customPdi, setCustomPdi] = useState(1.4); // Billions of R$
  const [tcoTab, setTcoTab] = useState<'paradox' | 'costing'>('paradox');
  const [fiscalTab, setFiscalTab] = useState<'info' | 'calculator'>('info');

  // Lei do Bem calculation: up to 60% of fiscal exclusion on PD&I
  const taxSavings = customPdi * 0.60 * 0.34; // 34% represents typical IRPJ/CSLL combined rate

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <SectionHeader
          tag="TÓPICO 7"
          title="Gestão de Custos & Formação de Preço"
          subtitle="A engenharia financeira da WEG S.A.: precificação baseada em valor no mercado industrial e otimizações tributárias."
          accentColor="#10b981"
        />

        {/* View Toggle */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.25rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <button
            onClick={() => setActiveView('tco')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'tco' ? 'var(--success)' : 'transparent',
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
            <Landmark size={14} /> TCO &amp; Custeio ABC
          </button>
          <button
            onClick={() => setActiveView('fiscal')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'fiscal' ? 'var(--success)' : 'transparent',
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
            <Award size={14} /> Incentivos &amp; Tributos
          </button>
        </div>
      </div>

      {/* Financial Health Margins Header - mobile-carousel enabled */}
      <div className="mobile-carousel" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '0.75rem',
        marginBottom: '1rem'
      }}>
        <div className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 600 }}>Margem Bruta WEG:</span>
          <strong style={{ fontSize: 'var(--text-md)', fontWeight: 800, color: 'var(--success)' }}>33%</strong>
        </div>
 
        <div className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 600 }}>Margem EBITDA:</span>
          <strong style={{ fontSize: 'var(--text-md)', fontWeight: 800, color: 'var(--success)' }}>22%</strong>
        </div>
 
        <div className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 600 }}>Margem Líquida (ROE 35,2%):</span>
          <strong style={{ fontSize: 'var(--text-md)', fontWeight: 800, color: 'var(--success)' }}>16,7%</strong>
        </div>
      </div>
 
      {activeView === 'tco' ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Sub-tab Selector for Mobile */}
          <div className="desktop-hide" style={{
            display: 'flex',
            background: 'rgba(10, 15, 36, 0.6)',
            padding: '0.25rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            gap: '0.25rem',
            gridColumn: '1 / -1',
            marginBottom: '0.25rem',
            width: '100%'
          }}>
            <button
              onClick={() => setTcoTab('paradox')}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                border: 'none',
                background: tcoTab === 'paradox' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: tcoTab === 'paradox' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: 'var(--text-sm)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Paradoxo do TCO
            </button>
            <button
              onClick={() => setTcoTab('costing')}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                border: 'none',
                background: tcoTab === 'costing' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: tcoTab === 'costing' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: 'var(--text-sm)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Custeio ABC
            </button>
          </div>

          {/* TCO Paradox */}
          <div 
            className={`glass-panel ${tcoTab !== 'paradox' ? 'mobile-hide' : ''}`}
            style={{ padding: '1.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}
          >
            <div>
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                Precificação Baseada no Paradoxo do TCO
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: '1.5', margin: 0 }}>
                • <strong style={{ color: 'var(--success)' }}>Value-Based Pricing:</strong> A WEG cobra um preço premium justificado pela eficiência extrema e durabilidade.<br/>
                • <strong style={{ color: '#ffffff' }}>Paradoxo do TCO:</strong> O valor de aquisição do motor representa apenas <strong style={{ color: '#ffffff' }}>5% a 10%</strong> do seu custo total de propriedade (TCO). Os outros <strong style={{ color: 'var(--success)' }}>90% a 95%</strong> referem-se à energia elétrica consumida durante sua operação vitalícia.
              </p>
            </div>
 
            {/* Paradox Bar */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              padding: '0.75rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', marginBottom: '0.2rem' }}>
                  <span>Custo de Aquisição (CAPEX)</span>
                  <strong>5% - 10%</strong>
                </div>
                <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '8%', background: 'var(--primary-light)', height: '100%' }} />
                </div>
              </div>
 
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', marginBottom: '0.2rem' }}>
                  <span>Custo de Operação (Energia OPEX)</span>
                  <strong>90% - 95%</strong>
                </div>
                <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', background: 'var(--success)', height: '100%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Costing Methods */}
          <div 
            className={`glass-panel ${tcoTab !== 'costing' ? 'mobile-hide' : ''}`}
            style={{ padding: '1.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: '#ffffff' }}>
                Método de Custeio Industrial ABC
              </h4>
              <button
                onClick={() => setCostingMethod(costingMethod === 'absorption' ? 'abc' : 'absorption')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-light)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  minWidth: '44px',
                  minHeight: '44px',
                  padding: '8px'
                }}
              >
                {costingMethod === 'abc' ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
              </button>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: '1.4' }}>
              A WEG apropria seus custos de fabricação cruzando o <strong style={{ color: '#ffffff' }}>Custeio por Absorção</strong> (matéria-prima e mão de obra diretos) com o <strong style={{ color: '#ffffff' }}>Custeio Baseado em Atividades (ABC)</strong> para alocação precisa dos custos indiretos.
            </p>

            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              padding: '0.75rem',
              fontSize: '0.75rem'
            }}>
              {costingMethod === 'abc' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                    <span>Setups de Linha:</span>
                    <strong>Nº de Setups</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                    <span>Usinagem do Rotor:</span>
                    <strong>Horas Máquina</strong>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '0.25rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  <span>Overhead rateado uniformemente com base em Mão de Obra Direta.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Fiscal/Tax View */
        <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left', animation: 'fadeIn 0.3s ease-out', flex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            alignItems: 'center'
          }}>
            {/* Sub-tab Selector for Mobile */}
            <div className="desktop-hide" style={{
              display: 'flex',
              background: 'rgba(10, 15, 36, 0.6)',
              padding: '0.25rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              gap: '0.25rem',
              gridColumn: '1 / -1',
              marginBottom: '0.25rem',
              width: '100%'
            }}>
              <button
                onClick={() => setFiscalTab('info')}
                style={{
                  flex: 1,
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: fiscalTab === 'info' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                  color: fiscalTab === 'info' ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: 'var(--text-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                Incentivo Fiscal
              </button>
              <button
                onClick={() => setFiscalTab('calculator')}
                style={{
                  flex: 1,
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: fiscalTab === 'calculator' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                  color: fiscalTab === 'calculator' ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: 'var(--text-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                Simulador Lei do Bem
              </button>
            </div>

            <div className={fiscalTab !== 'info' ? 'mobile-hide' : ''}>
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Otimizações Fiscais sob a Lei do Bem
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                A complexidade tributária (ICMS, IPI, PIS, COFINS, IRPJ, CSLL) afeta diretamente o preço final. Para amortecer esse impacto, a WEG aproveita estrategicamente os benefícios fiscais da <strong style={{ color: '#ffffff' }}>Lei do Bem (Lei 11.196/05)</strong>, excluindo <strong style={{ color: 'var(--primary-light)' }}>até 60%</strong> dos investimentos em PD&I das bases do imposto corporativo.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                fontSize: 'var(--text-xs)',
                color: 'var(--text-secondary)'
              }}>
                <Info size={14} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                <span>
                  Isenção fiscal alivia o caixa sobre o orçamento de R$ 1,4 bilhão em PD&I.
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div 
              className={fiscalTab !== 'calculator' ? 'mobile-hide' : ''}
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                flex: 1
              }}
            >
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#ffffff' }}>
                Simulador Fiscal da Lei do Bem:
              </span>
 
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
                  <span>Orçamento de PD&I da WEG:</span>
                  <strong style={{ color: 'var(--primary-light)' }}>R$ {customPdi.toFixed(1)} Bilhão</strong>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2.5" 
                  step="0.1"
                  value={customPdi} 
                  onChange={(e) => setCustomPdi(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary-light)', height: '6px' }}
                />
              </div>
 
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: 'var(--text-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Exclusão Fiscal da Base de Cálculo (60%):</span>
                  <strong style={{ color: '#ffffff' }}>R$ {(customPdi * 0.6).toFixed(2)}B</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.4rem', marginTop: '0.1rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Redução de Imposto (IRPJ/CSLL):</span>
                  <strong style={{ color: 'var(--success)' }}>R$ {taxSavings.toFixed(2)}B (~R$ {(taxSavings * 1000).toFixed(0)}M)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
