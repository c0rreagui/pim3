import React, { useState, useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { Eye, ShieldAlert, Radio, Check } from 'lucide-react';

export const AIShowroom: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'iot' | 'chat'>('vision');

  // WEGvision.AI Simulator State
  const [conveyorRunning, setConveyorRunning] = useState(false);
  const [bagStatus, setBagStatus] = useState<'ok' | 'scanning' | 'defect' | 'cleared'>('ok');
  
  // IoT WEGscan Simulator State
  const [temperature, setTemperature] = useState(48);
  const [vibration, setVibration] = useState(1.8);
  const [crmDispatched, setCrmDispatched] = useState(false);

  // Chatbot State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Olá! Sou o Assistente de Inteligência Artificial Generativa da WEG S.A. Como posso ajudar você hoje com dúvidas sobre inversores de frequência ou especificações de motores?' }
  ]);

  // WEGvision Simulator Loop
  useEffect(() => {
    let timer: any;
    if (conveyorRunning) {
      setBagStatus('scanning');
      timer = setTimeout(() => {
        setBagStatus('defect');
        setConveyorRunning(false);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [conveyorRunning]);

  // IoT sensor alarm trigger
  const isIotAnomaly = temperature > 80 || vibration > 5.5;

  useEffect(() => {
    if (isIotAnomaly && !crmDispatched) {
      const timer = setTimeout(() => {
        setCrmDispatched(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!isIotAnomaly && crmDispatched) {
      setCrmDispatched(false);
    }
  }, [isIotAnomaly, crmDispatched]);

  // Chatbot logic
  const handleChatQuestion = (question: string) => {
    setChatMessages((prev) => [...prev, { sender: 'user', text: question }]);
    
    let answer = '';
    if (question.includes('CFW500') || question.includes('inversor')) {
      answer = 'Para inversores de frequência da linha WEG CFW500, falhas comuns como "F021" (Sobrecarga de Corrente) ou "F022" (Sobredissipação Térmica) são comumente resolvidas avaliando-se a ventilação do painel e verificando as conexões do motor. Recomendo direcionar a telemetria do WEG Motion Fleet para avaliar se o inversor está dimensionado corretamente para a carga.';
    } else if (question.includes('IE4') || question.includes('IE5')) {
      answer = 'Os motores das linhas IE4 (Super Premium) e IE5 (Ultra Premium) reduzem as perdas internas de energia em até 20% e 40% respectivamente frente a motores padrão. Além de menor consumo térmico, garantem payback rápido e maior vida útil nos enrolamentos de cobre verticalizados da WEG.';
    } else {
      answer = 'Os sensores WEGscan medem a vibração mecânica triaxial e a temperatura superficial do motor elétrico. Os dados são enviados automaticamente via Bluetooth/Gateway para a nuvem WEG, permitindo que nossos modelos preditivos disparem alertas estruturais e evitem paradas não planejadas nas fábricas.';
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: 'ai', text: answer }]);
    }, 800);
  };

  return (
    <section id="inteligencia-artificial-marketing" style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border-subtle)' }}>
      <SectionHeader
        tag="TÓPICO 8"
        title="Inteligência Artificial Aplicada ao Marketing"
        subtitle="A revolução tecnológica da WEG: inteligência de visão integrada na produção, telemetria preditiva conectada ao CRM e IA conversacional de engenharia."
        accentColor="#3b82f6"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Texts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Eye size={18} style={{ color: 'var(--primary-light)' }} />
              Visão Computacional: WEGvision.AI
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Em parceria com a Intel, a WEG desenvolveu o <strong>WEGvision.AI</strong>, um sistema autônomo de visão computacional embarcado nas esteiras de produção. Aplicado em indústrias de cimento B2B, a IA monitora a esteira em alta velocidade e **detecta sacos rasgados** instantaneamente, elevando a **eficiência geral de ensaque em 4%** ao evitar paradas e perdas de material.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Radio size={18} style={{ color: 'var(--primary-light)' }} />
              CRM Preditivo Conectado ao IoT
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Os sensores inteligentes <strong>WEGscan</strong> monitoram vibração triaxial e temperatura diretamente na carcaça do motor em campo. Quando a IA em nuvem identifica anomalias ou degradação de rolamentos, ela se comunica diretamente com o **CRM da WEG**, disparando automaticamente campanhas hiperpersonalizadas e ofertas de troca técnica antes que o cliente sofra uma parada forçada.
            </p>
          </div>
        </div>

        {/* Dynamic AI Showroom Box */}
        <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border-active)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Tab selector */}
          <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.25rem', borderRadius: '10px' }}>
            <button 
              onClick={() => setActiveTab('vision')}
              style={{
                flex: 1,
                padding: '0.5rem',
                border: 'none',
                borderRadius: '8px',
                background: activeTab === 'vision' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'vision' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.2s'
              }}
            >
              WEGvision.AI
            </button>
            <button 
              onClick={() => setActiveTab('iot')}
              style={{
                flex: 1,
                padding: '0.5rem',
                border: 'none',
                borderRadius: '8px',
                background: activeTab === 'iot' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'iot' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.2s'
              }}
            >
              WEGscan IoT
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              style={{
                flex: 1,
                padding: '0.5rem',
                border: 'none',
                borderRadius: '8px',
                background: activeTab === 'chat' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'chat' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.2s'
              }}
            >
              Suporte Chat
            </button>
          </div>

          {/* TAB 1: WEGvision.AI */}
          {activeTab === 'vision' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', animation: 'fadeIn 0.3s' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Simulador de Esteira Industrial WEGvision.AI:</span>
              
              {/* Conveyor Belt Visual Box */}
              <div style={{
                height: '140px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {bagStatus === 'ok' && (
                  <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <span style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Pronto para Ensaque</span>
                    <button 
                      onClick={() => setConveyorRunning(true)}
                      style={{
                        background: 'var(--primary-light)',
                        border: 'none',
                        color: '#ffffff',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '0.75rem'
                      }}
                    >
                      Iniciar Scanner
                    </button>
                  </div>
                )}

                {bagStatus === 'scanning' && (
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '3px solid var(--primary-light)',
                      borderTopColor: 'transparent',
                      animation: 'spin 1s linear infinite',
                      marginBottom: '0.5rem'
                    }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 600, letterSpacing: '0.05em' }}>
                      ESCAN E ATIVO (INTEL INSIDE)...
                    </span>
                  </div>
                )}

                {bagStatus === 'defect' && (
                  <div style={{
                    width: '90%',
                    height: '90%',
                    border: '2px solid #ef4444',
                    background: 'rgba(239, 68, 68, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulseGlow 1.5s infinite',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ef4444' }}>⚠️ DETECTADO: SACO RASGADO</span>
                    <span style={{ fontSize: '0.75rem', color: '#fca5a5', marginTop: '0.25rem' }}>Esteira Interrompida Automaticamente</span>
                    <button 
                      onClick={() => setBagStatus('ok')}
                      style={{
                        background: '#ffffff',
                        border: 'none',
                        color: '#111827',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontSize: '0.7rem',
                        marginTop: '0.5rem'
                      }}
                    >
                      Limpar Alerta
                    </button>
                  </div>
                )}
              </div>

              <div style={{
                background: bagStatus === 'defect' ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255,255,255,0.02)',
                border: bagStatus === 'defect' ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(255,255,255,0.05)',
                padding: '0.75rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.4'
              }}>
                {bagStatus === 'defect' ? (
                  <>
                    <strong>Resultado prático da IA:</strong> Prevenção de desperdício imediato e garantia de <strong>+4% de ganho de eficiência operacional</strong> validado no projeto de marketing industrial.
                  </>
                ) : (
                  <span>Clique em "Iniciar Scanner" para ver a visão computacional WEGvision operando em tempo real na esteira virtual.</span>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: WEGscan IoT */}
          {activeTab === 'iot' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', animation: 'fadeIn 0.3s' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Telemetria do Sensor IoT WEGscan:</span>

              {/* Temperature Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  <span>Temperatura Superficial do Motor:</span>
                  <strong style={{ color: temperature > 80 ? '#ef4444' : '#ffffff' }}>{temperature} °C</strong>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="120" 
                  value={temperature} 
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  style={{ width: '100%', accentColor: temperature > 80 ? '#ef4444' : 'var(--primary-light)' }}
                />
              </div>

              {/* Vibration Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  <span>Vibração Triaxial (Rotor):</span>
                  <strong style={{ color: vibration > 5.5 ? '#ef4444' : '#ffffff' }}>{vibration.toFixed(1)} mm/s</strong>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="10.0" 
                  step="0.1"
                  value={vibration} 
                  onChange={(e) => setVibration(Number(e.target.value))}
                  style={{ width: '100%', accentColor: vibration > 5.5 ? '#ef4444' : 'var(--primary-light)' }}
                />
              </div>

              {/* CRM dispatched Alert */}
              <div style={{
                background: isIotAnomaly ? 'rgba(239, 68, 68, 0.08)' : 'rgba(16, 185, 129, 0.05)',
                border: isIotAnomaly ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(16, 185, 129, 0.15)',
                borderRadius: '8px',
                padding: '0.75rem',
                fontSize: '0.75rem',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                transition: 'all 0.3s'
              }}>
                {isIotAnomaly ? (
                  <>
                    <strong style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <ShieldAlert size={14} /> ALERTA DE DEGRADÇÃO ATIVO!
                    </strong>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {crmDispatched ? (
                        <span style={{ color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Check size={14} /> CRM: Campanha de troca enviada ao cliente!
                        </span>
                      ) : (
                        'Anomalia detectada. Comunicando com o CRM em nuvem...'
                      )}
                    </span>
                  </>
                ) : (
                  <>
                    <span style={{ color: 'var(--success)', fontWeight: 600 }}>🟢 Telemetria de Motor Estável</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Sem necessidade de intervenção preditiva. Aumente os sliders para causar uma anomalia!</span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: Generative AI Chatbot */}
          {activeTab === 'chat' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animation: 'fadeIn 0.3s' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>Assistente Conversacional de Engenharia:</span>

              {/* Chat messages viewport */}
              <div style={{
                height: '160px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '0.75rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.75rem'
              }}>
                {chatMessages.map((msg, idx) => (
                  <div key={idx} style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    background: msg.sender === 'user' ? 'var(--primary-light)' : 'rgba(255,255,255,0.05)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    maxWidth: '85%',
                    color: msg.sender === 'user' ? '#ffffff' : 'var(--text-secondary)',
                    lineHeight: '1.4'
                  }}>
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Clickable Quick Questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>PERGUNTE AO CHATBOT:</span>
                <button 
                  onClick={() => handleChatQuestion('Qual a diferença prática entre motores IE4 e IE5?')}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    padding: '0.4rem',
                    borderRadius: '6px',
                    textAlign: 'left',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  "Qual a diferença prática entre motores IE4 e IE5?"
                </button>
                <button 
                  onClick={() => handleChatQuestion('O que fazer se o inversor CFW500 der erro?')}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    padding: '0.4rem',
                    borderRadius: '6px',
                    textAlign: 'left',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  "O que fazer se o inversor CFW500 der erro?"
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Dynamic Keyframes inject */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
