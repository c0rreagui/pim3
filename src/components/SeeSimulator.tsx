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

  return (
    <section id="comportamento-consumidor-ux" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <SectionHeader
        tag="TÓPICO 2"
        title="Comportamento do Consumidor & UX"
        subtitle="Entenda a decisão racional no mercado B2B através do TCO e o software See+, além do Plano de Troca de Motores estruturado para fidelização."
        accentColor="#10b981"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Texts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} style={{ color: 'var(--success)' }} />
              Decisão Racional B2B & Software See+
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              No marketing industrial B2B, a compra não é motivada por impulsividade. Compradores e engenheiros tomam decisões extremamente lógicas avaliando o <strong>Custo Total de Propriedade (TCO)</strong> em vez de focar apenas no custo de aquisição (CAPEX). A WEG se posiciona como líder de valor ao demonstrar ROI com o <strong>Software See+</strong>, simulando economias energéticas e operacionais reais.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Scale size={18} style={{ color: 'var(--success)' }} />
              Plano de Troca de Motores (Switching Costs)
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Para vencer a barreira de marcas concorrentes e engajar clientes na sustentabilidade, a WEG aceita motores usados de <strong>qualquer marca</strong>. O cliente obtém um abatimento real de <strong>R$ 5,00 por kg</strong> ou de <strong>até 8% de desconto</strong> na compra dos modernos motores das linhas <strong>IE4 ou IE5</strong>.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                padding: '0.75rem',
                borderRadius: '8px',
                flex: 1,
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', fontWeight: 600 }}>Valor de Troca</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--success)' }}>R$ 5,00 / kg</span>
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                padding: '0.75rem',
                borderRadius: '8px',
                flex: 1,
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', fontWeight: 600 }}>Desconto Máximo</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--success)' }}>Até 8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* See+ Simulator Widget */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left', border: '1px solid var(--border-active)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
              Simulador de TCO & ROI "See+"
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
              SOFTWARE EMULATOR
            </span>
          </div>

          {/* Efficiency Selection */}
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
              Selecione o Motor WEG de Alta Eficiência
            </label>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                onClick={() => setMotorEfficiencyClass('IE4')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid',
                  borderColor: motorEfficiencyClass === 'IE4' ? 'var(--success)' : 'rgba(255,255,255,0.08)',
                  background: motorEfficiencyClass === 'IE4' ? 'rgba(16,185,129,0.1)' : 'transparent',
                  color: motorEfficiencyClass === 'IE4' ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
              >
                WEG W22 Magnet IE4 Super Premium
              </button>
              <button 
                onClick={() => setMotorEfficiencyClass('IE5')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid',
                  borderColor: motorEfficiencyClass === 'IE5' ? 'var(--success)' : 'rgba(255,255,255,0.08)',
                  background: motorEfficiencyClass === 'IE5' ? 'rgba(16,185,129,0.1)' : 'transparent',
                  color: motorEfficiencyClass === 'IE5' ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
              >
                WEG W22 Magnet IE5 Ultra Premium
              </button>
            </div>
          </div>

          {/* Running Hours Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
              <span>Peso do Motor Usado (para Plano de Troca):</span>
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
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Zap size={14} style={{ color: 'var(--accent)' }} />
                Economia de Energia:
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                {annualKwhSaved.toFixed(0)} kWh/ano
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <DollarSign size={14} style={{ color: 'var(--success)' }} />
                Economia Financeira Anual:
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--success)' }}>
                R$ {annualSavingsBrl.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Percent size={14} style={{ color: 'var(--primary-light)' }} />
                Abatimento no Plano de Troca:
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-light)' }}>
                - R$ {appliedDiscount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
              </span>
            </div>

            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '0.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <TrendingDown size={14} style={{ color: 'var(--accent)' }} />
                Payback do Investimento:
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent)' }}>
                {paybackMonths <= 0 ? 'Imediato' : `${paybackMonths.toFixed(1)} Meses`}
              </span>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
              borderRadius: '8px',
              padding: '0.75rem',
              textAlign: 'center',
              fontSize: '0.8rem',
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
