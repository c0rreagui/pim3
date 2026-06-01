import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ToggleLeft, ToggleRight, Info } from 'lucide-react';

export const CostParadox: React.FC = () => {
  const [costingMethod, setCostingMethod] = useState<'absorption' | 'abc'>('abc');
  const [customPdi, setCustomPdi] = useState(1.4); // Billions of R$

  // Lei do Bem calculation: up to 60% of fiscal exclusion on PD&I
  const taxSavings = customPdi * 0.60 * 0.34; // 34% represents typical IRPJ/CSLL combined rate

  return (
    <section id="gestao-estrategica-custos-formacao-precos" style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border-subtle)' }}>
      <SectionHeader
        tag="TÓPICO 7"
        title="Gestão Estratégica de Custos e Formação de Preços"
        subtitle="A engenharia financeira da WEG: margens robustas suportadas por precificação baseada em valor, custeio ABC de alta fidelidade e incentivos fiscais."
        accentColor="#10b981"
      />

      {/* Financial Health Margins Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>Margem Bruta</span>
          <h5 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--success)', margin: '0.25rem 0' }}>33%</h5>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Consolidada e resiliente globalmente</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>Margem EBITDA</span>
          <h5 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--success)', margin: '0.25rem 0' }}>22%</h5>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Alta eficiência operacional fabril</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>Margem Líquida</span>
          <h5 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--success)', margin: '0.25rem 0' }}>16,7%</h5>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Retorno sobre o PL (ROE) de 35,2%</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        marginBottom: '3rem'
      }}>
        {/* Value-Based Pricing TCO Paradox */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Precificação Baseada em Valor & O Paradoxo do TCO
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>
              A WEG adota a precificação baseada em valor (<strong>Value-Based Pricing</strong>). O preço premium de seus motores de alta eficiência é plenamente aceito no mercado porque o motor elétrico representa apenas **5% a 10% do TCO** total. Os outros **90% a 95% do custo** correspondem à energia elétrica consumida pelo equipamento ao longo de sua vida útil.
            </p>
          </div>

          {/* Dynamic Paradox Chart */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>
              Distribuição Média de Custos Vitalícios do Motor (TCO):
            </span>

            {/* Visual Bar representation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8rem' }}>
              {/* Motor bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span>Custo de Aquisição (CAPEX)</span>
                  <strong>5% a 10%</strong>
                </div>
                <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '14px', borderRadius: '7px', overflow: 'hidden' }}>
                  <div style={{ width: '8%', background: 'var(--primary-light)', height: '100%', borderRadius: '7px' }} />
                </div>
              </div>

              {/* Energy bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span>Custo de Energia Consumida (OPEX)</span>
                  <strong>90% a 95%</strong>
                </div>
                <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '14px', borderRadius: '7px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', background: 'var(--success)', height: '100%', borderRadius: '7px' }} />
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
              <strong>Conclusão de Marketing:</strong> Pequenos aumentos de eficiência de 3-4% no motor geram economias elétricas massivas que superam rapidamente qualquer diferença de preço de aquisição.
            </div>
          </div>
        </div>

        {/* Costing Methods: ABC vs Absorption */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
              Método de Custeio Industrial
            </h4>
            <button
              onClick={() => setCostingMethod(costingMethod === 'absorption' ? 'abc' : 'absorption')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary-light)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              {costingMethod === 'abc' ? (
                <>
                  <ToggleRight size={24} /> Ativo: Custeio ABC
                </>
              ) : (
                <>
                  <ToggleLeft size={24} /> Ativo: Custeio Absorção
                </>
              )}
            </button>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>
            Para garantir precisão cirúrgica de formação de preços, a WEG cruza o método tradicional de **Custeio por Absorção** com o **Custeio Baseado em Atividades (ABC)**. Enquanto a absorção garante a correta apropriação dos materiais e mão de obra diretos, o método ABC aloca custos indiretos (overhead) de engenharia e fabricação com base em direcionadores reais de consumo.
          </p>

          {/* Interactive Costing Graph representation */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '1.25rem',
            fontSize: '0.8rem'
          }}>
            <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.75rem' }}>
              Modelo de Alocação de Overhead ({costingMethod === 'abc' ? 'ABC' : 'Absorção'}):
            </strong>

            {costingMethod === 'abc' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                  <span>Setups de Linha:</span>
                  <strong style={{ color: '#ffffff' }}>Direcionador: Nº Setups</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                  <span>Usinagem do Rotor:</span>
                  <strong style={{ color: '#ffffff' }}>Direcionador: Horas Máquina</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                  <span>Controle de Qualidade:</span>
                  <strong style={{ color: '#ffffff' }}>Direcionador: Nº Inspeções</strong>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', textAlign: 'center' }}>
                  <span style={{ width: '100%' }}>
                    ⚠️ Todo o overhead e custos indiretos industriais são rateados de forma simplificada e uniforme com base em <strong>Mão de Obra Direta</strong> ou <strong>Volume Produzido</strong>.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tax impact & Lei do Bem */}
      <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left' }}>
        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
          Impacto dos Tributos & Otimização Fiscal (Lei do Bem)
        </h4>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              A complexidade tributária brasileira (ICMS, IPI, PIS, COFINS, IRPJ, CSLL) incide severamente na formação de preços. No entanto, a WEG aproveita ativamente a <strong>Lei do Bem (Lei 11.196/05)</strong> para amortecer esse impacto, obtendo **até 60% de exclusão fiscal** das bases de cálculo do IRPJ e da CSLL sobre seu orçamento de inovação e pesquisa.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.02)',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              <Info size={14} style={{ color: 'var(--primary-light)', marginTop: '0.1rem', flexShrink: 0 }} />
              <span>
                <strong>Tributos afetados:</strong> A isenção sobre investimentos de PD&I alivia o capital circulante, permitindo reinvestir continuamente R$ 1,4B por ano.
              </span>
            </div>
          </div>

          {/* Interactive Lei do Bem Calculator */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
              Simulador Fiscal - Exclusão por Lei do Bem:
            </span>

            {/* Input Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
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
                style={{
                  width: '100%',
                  accentColor: 'var(--primary-light)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  height: '4px',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Calculations outputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Exclusão Fiscal da Base de Cálculo (60%):</span>
                <strong style={{ color: '#ffffff' }}>R$ {(customPdi * 0.6).toFixed(2)}B</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Redução de Imposto Estimada (IRPJ/CSLL):</span>
                <strong style={{ color: 'var(--success)' }}>R$ {taxSavings.toFixed(2)}B (R$ {(taxSavings * 1000).toFixed(0)}M)</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
