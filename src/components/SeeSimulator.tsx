import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Sparkles, Scale, Percent, Zap, TrendingDown, DollarSign } from 'lucide-react';

export const SeeSimulator: React.FC = () => {
  // Inputs
  const [runningHours, setRunningHours] = useState(6000);
  const [energyTariff, setEnergyTariff] = useState(0.80);
  const [motorWeight, setMotorWeight] = useState(150);
  const [motorEfficiencyClass, setMotorEfficiencyClass] = useState<'IE4' | 'IE5'>('IE5');

  // Constants
  const MOTOR_POWER_KW = 37; // Standard 50HP motor
  const IE2_EFFICIENCY = 0.915; // 91.5% efficiency
  const IE4_EFFICIENCY = 0.952; // 95.2% efficiency
  const IE5_EFFICIENCY = 0.966; // 96.6% efficiency
  
  const selectedEfficiency = motorEfficiencyClass === 'IE4' ? IE4_EFFICIENCY : IE5_EFFICIENCY;
  
  // Costs
  const IE2_PURCHASE_PRICE = 15000;
  const HIGH_EFFICIENCY_BASE_PRICE = motorEfficiencyClass === 'IE4' ? 18500 : 21000;

  // Trade-in Discount: R$ 5.00/kg
  const tradeInValue = motorWeight * 5;
  // 8% max discount on high efficiency motor
  const maxPercentDiscount = HIGH_EFFICIENCY_BASE_PRICE * 0.08;
  // Apply the best discount for customer
  const appliedDiscount = Math.max(tradeInValue, maxPercentDiscount);
  const highEfficiencyFinalPrice = HIGH_EFFICIENCY_BASE_PRICE - appliedDiscount;

  // Energy Consumptions per Year (kWh = kW * hours / efficiency)
  const ie2Consumption = (MOTOR_POWER_KW * runningHours) / IE2_EFFICIENCY;
  const highEffConsumption = (MOTOR_POWER_KW * runningHours) / selectedEfficiency;
  
  const annualKwhSaved = ie2Consumption - highEffConsumption;
  const annualSavingsBrl = annualKwhSaved * energyTariff;

  // Payback in months: (Difference in purchase price) / (Annual savings / 12)
  const priceDifference = highEfficiencyFinalPrice - IE2_PURCHASE_PRICE;
  const paybackMonths = annualSavingsBrl > 0 
    ? Math.max(0, (priceDifference / (annualSavingsBrl / 12)))
    : 0;

  // TCO data points for 10 years
  const getTcoData = (years: number) => {
    const data = [];
    for (let i = 0; i <= years; i++) {
      const ie2Tco = IE2_PURCHASE_PRICE + (ie2Consumption * energyTariff * i);
      const highEffTco = highEfficiencyFinalPrice + (highEffConsumption * energyTariff * i);
      data.push({
        year: i,
        ie2: ie2Tco,
        highEff: highEffTco,
        savings: ie2Tco - highEffTco
      });
    }
    return data;
  };

  const tcoData10Years = getTcoData(10);
  const tenYearSavings = tcoData10Years[10].savings;

  const [activeTab, setActiveTab] = useState<'b2b' | 'trade'>('b2b');

  return (
    <section id="comportamento-consumidor-ux" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.25rem' }}>
      <SectionHeader
        tag="TÓPICO 2"
        title="Comportamento do Consumidor & UX"
        subtitle="Entenda a decisão racional no mercado B2B através do TCO e o software See+, além do Plano de Troca de Motores estruturado para fidelização."
        accentColor="#10b981"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.25rem',
        marginBottom: '0.5rem',
        flex: 1
      }}>
        {/* Texts with interactive Tab Toggle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          {/* Tab Selector */}
          <div style={{
            display: 'flex',
            background: 'rgba(10, 15, 36, 0.6)',
            padding: '0.25rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            gap: '0.25rem'
          }}>
            <button
              onClick={() => setActiveTab('b2b')}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'b2b' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: activeTab === 'b2b' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <Sparkles size={14} style={{ color: activeTab === 'b2b' ? 'var(--success)' : 'var(--text-muted)' }} />
              Decisão B2B & See+
            </button>
            <button
              onClick={() => setActiveTab('trade')}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'trade' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: activeTab === 'trade' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <Scale size={14} style={{ color: activeTab === 'trade' ? 'var(--success)' : 'var(--text-muted)' }} />
              Plano de Troca (TCO)
            </button>
          </div>

          {/* Active Tab Panel */}
          {activeTab === 'b2b' ? (
            <div className="glass-panel" style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', animation: 'fadeIn 0.3s ease-out' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} style={{ color: 'var(--success)' }} />
                Decisão Racional B2B & Software See+
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                No marketing industrial B2B, a compra não é motivada por impulsividade. Compradores e engenheiros tomam decisões extremamente lógicas avaliando o <strong>Custo Total de Propriedade (TCO)</strong> em vez de focar apenas no custo de aquisição (CAPEX). A WEG se posiciona como líder de valor ao demonstrar ROI com o <strong>Software See+</strong>, simulando economias energéticas e operacionais reais.
              </p>
            </div>
          ) : (
            <div className="glass-panel" style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', animation: 'fadeIn 0.3s ease-out' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Scale size={18} style={{ color: 'var(--success)' }} />
                Plano de Troca de Motores (Switching Costs)
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                Para vencer a barreira de marcas concorrentes e engajar clientes na sustentabilidade, a WEG aceita motores usados de <strong>qualquer marca</strong>. O cliente obtém um abatimento real de <strong>R$ 5,00 por kg</strong> ou de <strong>até 8% de desconto</strong> na compra dos modernos motores das linhas <strong>IE4 ou IE5</strong>.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.75rem'
              }}>
                <div style={{
                  background: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  flex: 1,
                  textAlign: 'center'
                }}>
                  <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', fontWeight: 600 }}>Valor de Troca</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--success)' }}>R$ 5,00 / kg</span>
                </div>
                <div style={{
                  background: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  flex: 1,
                  textAlign: 'center'
                }}>
                  <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', fontWeight: 600 }}>Desconto Máximo</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--success)' }}>Até 8%</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* See+ Simulator Widget */}
        <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', border: '1px solid var(--border-active)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
              Simulador de TCO & ROI "See+"
            </h4>
            <span style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              background: 'rgba(59, 130, 246, 0.15)',
              color: 'var(--primary-light)',
              padding: '0.15rem 0.4rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)'
            }}>
              SOFTWARE EMULATOR
            </span>
          </div>

          {/* Efficiency Selection */}
          <div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => setMotorEfficiencyClass('IE4')}
                style={{
                  flex: 1,
                  padding: '0.4rem',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: motorEfficiencyClass === 'IE4' ? 'var(--success)' : 'rgba(255,255,255,0.06)',
                  background: motorEfficiencyClass === 'IE4' ? 'rgba(16,185,129,0.1)' : 'transparent',
                  color: motorEfficiencyClass === 'IE4' ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  transition: 'all 0.2s'
                }}
              >
                WEG W22 Magnet IE4
              </button>
              <button 
                onClick={() => setMotorEfficiencyClass('IE5')}
                style={{
                  flex: 1,
                  padding: '0.4rem',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: motorEfficiencyClass === 'IE5' ? 'var(--success)' : 'rgba(255,255,255,0.06)',
                  background: motorEfficiencyClass === 'IE5' ? 'rgba(16,185,129,0.1)' : 'transparent',
                  color: motorEfficiencyClass === 'IE5' ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  transition: 'all 0.2s'
                }}
              >
                WEG W22 Magnet IE5
              </button>
            </div>
          </div>

          {/* Running Hours Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
              <span>Horas de Funcionamento Anual:</span>
              <strong style={{ color: '#ffffff' }}>{runningHours} h/ano</strong>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="8760" 
              step="100"
              value={runningHours} 
              onChange={(e) => setRunningHours(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--success)',
                background: 'rgba(255,255,255,0.1)',
                height: '4px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Energy Price Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
              <span>Tarifa de Energia Elétrica:</span>
              <strong style={{ color: '#ffffff' }}>R$ {energyTariff.toFixed(2)} / kWh</strong>
            </div>
            <input 
              type="range" 
              min="0.30" 
              max="1.80" 
              step="0.05"
              value={energyTariff} 
              onChange={(e) => setEnergyTariff(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--success)',
                background: 'rgba(255,255,255,0.1)',
                height: '4px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Motor Weight Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
              <span>Peso do Motor Usado:</span>
              <strong style={{ color: '#ffffff' }}>{motorWeight} kg</strong>
            </div>
            <input 
              type="range" 
              min="50" 
              max="1500" 
              step="10"
              value={motorWeight} 
              onChange={(e) => setMotorWeight(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--success)',
                background: 'rgba(255,255,255,0.1)',
                height: '4px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Outputs Panel */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255,255,255,0.04)',
            borderRadius: '10px',
            padding: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Zap size={12} style={{ color: 'var(--accent)' }} />
                Economia de Energia:
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                {annualKwhSaved.toFixed(0)} kWh/ano
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <DollarSign size={12} style={{ color: 'var(--success)' }} />
                Economia Anual:
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--success)' }}>
                R$ {annualSavingsBrl.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Percent size={12} style={{ color: 'var(--primary-light)' }} />
                Abatimento no Plano de Troca:
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-light)' }}>
                - R$ {appliedDiscount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
              </span>
            </div>

            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              paddingTop: '0.4rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <TrendingDown size={12} style={{ color: 'var(--accent)' }} />
                Payback do Investimento:
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent)' }}>
                {paybackMonths <= 0 ? 'Imediato' : `${paybackMonths.toFixed(1)} Meses`}
              </span>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.04)',
              border: '1px solid rgba(16, 185, 129, 0.12)',
              borderRadius: '6px',
              padding: '0.4rem',
              textAlign: 'center',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)'
            }}>
              Economia total em 10 anos estimada em{' '}
              <strong style={{ color: 'var(--success)' }}>
                R$ {tenYearSavings.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
