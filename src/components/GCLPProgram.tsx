import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Coins, Database, RefreshCw, Milestone, Layers, ChevronDown, BookOpen } from 'lucide-react';

export const GCLPProgram: React.FC = () => {
  const [activeView, setActiveView] = useState<'concept' | 'simulator'>('concept');
  const [scrapTons, setScrapTons] = useState(75);
  const [isMinting, setIsMinting] = useState(false);
  const [mintedCertificate, setMintedCertificate] = useState<boolean>(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Constants
  const CO2_SAVED_PER_TON = 1.85; // 1.85 tons of CO2 saved per ton of recycled heavy copper/silicon steel
  const totalCo2Saved = scrapTons * CO2_SAVED_PER_TON;
  const tokensMinted = Math.round(totalCo2Saved * 10); // 10 tokens per ton of CO2 avoided

  const dictionaryItems = [
    {
      title: "Escopo 1 (Poluição Direta)",
      text: "São as emissões de poluentes que a própria empresa gera de forma direta. O maior exemplo é a fumaça que sai das chaminés da fábrica ou o combustível gasto pelos carros e caminhões que pertencem à frota da empresa."
    },
    {
      title: "Escopo 2 (Consumo de Energia)",
      text: "São as emissões indiretas ligadas à energia que a empresa compra para funcionar. O exemplo clássico é a poluição gerada pelas usinas elétricas para produzir a eletricidade que ilumina as instalações e liga as máquinas da fábrica."
    },
    {
      title: "Escopo 3 (Impacto Indireto da Cadeia)",
      text: "São as emissões que acontecem fora das fábricas da empresa, mas que são causadas por ela. O maior exemplo é o impacto gerado pelos fornecedores de matéria-prima, pelo transporte feito por terceiros e, principalmente, quando o cliente final usa ou descarta o produto."
    },
    {
      title: "RFID (Etiqueta Inteligente)",
      text: "É uma tecnologia de rastreamento por ondas de rádio, que funciona como um código de barras evoluído. O exemplo prático é uma etiqueta que permite identificar o produto à distância e de forma automática, sem precisar mirar um leitor direto nele, agilizando o controle do estoque e a reciclagem."
    }
  ];

  const handleMintTokens = () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      setMintedCertificate(true);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <SectionHeader
          tag="TÓPICO 9"
          title="Proposta de Intervenção: GCLP"
          subtitle="Global Circular Lifecycle Program: a inovação disruptiva de logística reversa B2B da WEG S.A."
          accentColor="#10b981"
        />

        {/* View Toggle */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.25rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <button
            onClick={() => setActiveView('concept')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'concept' ? 'var(--success)' : 'transparent',
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
            <Layers size={14} /> Conceito &amp; Metas
          </button>
          <button
            onClick={() => setActiveView('simulator')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              background: activeView === 'simulator' ? 'var(--success)' : 'transparent',
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
            <Coins size={14} /> Simulador &amp; Viabilidade
          </button>
        </div>
      </div>

      {activeView === 'concept' ? (
        /* Concept View */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Column 1: Problem & Solution */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Milestone size={16} style={{ color: '#ef4444' }} />
                O Problema: Logística Global e Emissões Indiretas
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                • <strong style={{ color: '#f87171' }}>Desafio da Cadeia (Escopo 3):</strong> Cerca de <strong style={{ color: '#ffffff' }}>85% do impacto ambiental</strong> de grandes equipamentos ocorre fora das fábricas (como no frete ou descarte).<br/>
                • <strong style={{ color: '#ffffff' }}>Frete Inviável:</strong> Trazer motores pesados usados de volta de outros países para reciclagem no Brasil é impedido por <strong style={{ color: '#ffffff' }}>altas tarifas alfandegárias</strong> e frete internacional caro.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <RefreshCw size={16} style={{ color: 'var(--success)' }} />
                A Solução: Reciclagem Inteligente Regional
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                • <strong style={{ color: '#34d399' }}>Rastreamento Inteligente (RFID &amp; Blockchain):</strong> Identificamos cada motor por ondas de rádio e registramos seu descarte em um livro digital seguro e inviolável.<br/>
                • <strong style={{ color: '#ffffff' }}>Reciclagem sem Viagens:</strong> Em vez de trazer o motor de volta, a WEG o encaminha para <strong style={{ color: '#ffffff' }}>fundições ecológicas parceiras no país do cliente</strong>, gerando créditos de carbono rápidos.
              </p>
            </div>
          </div>

          {/* Column 2: 5-Year Goals & Terminology Guides */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            {/* Metas Card */}
            <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Milestone size={16} style={{ color: 'var(--success)' }} />
                Metas do Programa em 5 Anos
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Meta de Reciclagem (Carcaças):</span>
                  <strong style={{ color: '#ffffff' }}>65.000t de Metais</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Redução de Poluição Indireta (Escopo 3):</span>
                  <strong style={{ color: 'var(--success)' }}>Corte de 12%</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Fidelização de Clientes (Selo Verde):</span>
                  <strong style={{ color: 'var(--primary-light)' }}>Retenção acima de 98,5%</strong>
                </div>
              </div>
            </div>

            {/* Glossary Dropdowns (Accordion) */}
            <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={16} style={{ color: 'var(--primary-light)' }} />
                Guia Rápido de Termos
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {dictionaryItems.map((item, index) => {
                  const isOpen = activeAccordion === index;
                  return (
                    <div 
                      key={index} 
                      style={{ 
                        border: '1px solid rgba(255, 255, 255, 0.05)', 
                        borderRadius: '8px', 
                        overflow: 'hidden',
                        background: isOpen ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                        transition: 'all 0.2s'
                      }}
                    >
                      <button
                        onClick={() => setActiveAccordion(isOpen ? null : index)}
                        style={{
                          width: '100%',
                          padding: '0.5rem 0.75rem',
                          background: 'none',
                          border: 'none',
                          color: isOpen ? '#ffffff' : 'var(--text-secondary)',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          textAlign: 'left',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{item.title}</span>
                        <ChevronDown size={14} style={{ 
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.2s',
                          color: isOpen ? 'var(--success)' : 'var(--text-secondary)'
                        }} />
                      </button>
                      
                      {isOpen && (
                        <div style={{ 
                          padding: '0 0.75rem 0.75rem 0.75rem', 
                          fontSize: '0.75rem', 
                          color: 'var(--text-secondary)', 
                          lineHeight: '1.45',
                          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                          paddingTop: '0.5rem',
                          animation: 'fadeIn 0.25s ease-out'
                        }}>
                          {item.text}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Simulator & Viability View */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Left: Token Simulator */}
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem', border: '1px solid var(--border-active)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>
                Simulador GCLP Carbon Tokenizer
              </strong>
              <span style={{ fontSize: '0.65rem', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--success)', padding: '0.2rem 0.5rem', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>
                BLOCKCHAIN CONTRACT
              </span>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                <span>Volume de Metais para Retorno:</span>
                <strong style={{ color: '#ffffff' }}>{scrapTons} Toneladas</strong>
              </div>
              <input 
                type="range" 
                min="5" 
                max="500" 
                step="5"
                value={scrapTons} 
                onChange={(e) => {
                  setScrapTons(Number(e.target.value));
                  setMintedCertificate(false);
                }}
                style={{ width: '100%', accentColor: 'var(--success)' }}
              />
            </div>

            {!mintedCertificate ? (
              <button
                onClick={handleMintTokens}
                disabled={isMinting}
                style={{
                  background: 'var(--success)',
                  border: 'none',
                  color: '#111827',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%'
                }}
              >
                {isMinting ? (
                  <>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #111827', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }} />
                    Gravando Bloco na Blockchain...
                  </>
                ) : (
                  <>
                    <Coins size={14} /> Emitir Tokens de Carbono Circular
                  </>
                )}
              </button>
            ) : (
              <div style={{
                background: 'rgba(16, 185, 129, 0.05)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '8px',
                padding: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                fontSize: '0.75rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>CO2 Evitado na Cadeia:</span>
                  <strong style={{ color: 'var(--success)' }}>{totalCo2Saved.toFixed(1)} tCO2e</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.4rem' }}>
                  <span>Tokens Emitidos (CCT):</span>
                  <strong style={{ color: 'var(--success)' }}>{tokensMinted} CCT</strong>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Meta Global de 65.000t:</span>
                <strong>{((scrapTons / 65000) * 100).toFixed(4)}%</strong>
              </div>
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (scrapTons / 65000) * 100 * 50)}%`, background: 'var(--success)', height: '100%' }} />
              </div>
            </div>
          </div>

          {/* Right: Feasibility */}
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={18} style={{ color: 'var(--primary-light)' }} />
              Viabilidade Financeira
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Investimento Inicial:</span>
                <strong style={{ color: '#ffffff' }}>R$ 32M (2,28% PD&amp;I)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Retorno (Payback):</span>
                <strong style={{ color: 'var(--success)' }}>Estimado em 3,5 Anos</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.25rem' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--primary-light)' }} />
                  Grau de Viabilidade:
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--success)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                  ALTA VIABILIDADE
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
