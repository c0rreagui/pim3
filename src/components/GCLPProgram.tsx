import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Coins, Database, RefreshCw, Milestone, FileCheck } from 'lucide-react';

export const GCLPProgram: React.FC = () => {
  const [scrapTons, setScrapTons] = useState(75);
  const [isMinting, setIsMinting] = useState(false);
  const [mintedCertificate, setMintedCertificate] = useState<boolean>(false);

  // Constants
  const CO2_SAVED_PER_TON = 1.85; // 1.85 tons of CO2 saved per ton of recycled heavy copper/silicon steel
  const totalCo2Saved = scrapTons * CO2_SAVED_PER_TON;
  const tokensMinted = Math.round(totalCo2Saved * 10); // 10 tokens per ton of CO2 avoided

  const handleMintTokens = () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      setMintedCertificate(true);
    }, 1500);
  };

  return (
    <section id="proposta-intervencao-gclp" style={{ padding: '4rem 2rem', paddingBottom: '6rem' }}>
      <SectionHeader
        tag="TÓPICO 9"
        title="Proposta de Intervenção: GCLP"
        subtitle="Global Circular Lifecycle Program: a inovação disruptiva de logística reversa B2B unindo rastreamento por RFID, reciclagem em fundições verdes locais e blockchain."
        accentColor="#10b981"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        marginBottom: '3rem'
      }}>
        {/* The Problem & Solution text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Milestone size={18} style={{ color: '#ef4444' }} />
              O Problema: Barreiras Globais & Escopo 3
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              As emissões de **Escopo 3** (cadeia de suprimentos e ciclo de descarte de terceiros) representam até **85% do impacto ecológico total** de bens de capital como motores industriais. Trazer carcaças de motores pesados de volta para reciclagem no Brasil enfrenta barreiras logísticas gigantescas e elevadas tarifas aduaneiras globais.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RefreshCw size={18} style={{ color: 'var(--success)' }} />
              A Solução: Logística Reversa Regionalizada
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              A WEG propõe o **GCLP**. Utilizando tags **RFID** nas carcaças e uma plataforma segura em **Blockchain**, a WEG encaminha os motores descartados a **fundições verdes locais parceiras** em cada região econômica do globo (EUA, Europa, Ásia). Os metais nobres são reciclados localmente e, em contrapartida, a plataforma emite **Tokens de Crédito de Carbono Circular** diretamente à carteira digital do cliente B2B.
            </p>
          </div>
        </div>

        {/* Dynamic Blockchain Tokenizer Simulator */}
        <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border-active)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
              Simulador GCLP Carbon Tokenizer
            </h4>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--success)',
              padding: '0.2rem 0.5rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)'
            }}>
              BLOCKCHAIN CONTRACT
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4' }}>
            Simule o retorno de um volume de carcaças industriais B2B para uma fundição verde autorizada e veja a IA processar a economia ecológica e mintar os tokens na blockchain:
          </p>

          {/* Scrap tons slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
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
              style={{
                width: '100%',
                accentColor: 'var(--success)',
                background: 'rgba(255, 255, 255, 0.1)',
                height: '4px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Minting Action */}
          {!mintedCertificate ? (
            <button
              onClick={handleMintTokens}
              disabled={isMinting}
              style={{
                background: 'var(--success)',
                border: 'none',
                color: '#111827',
                padding: '0.75rem',
                borderRadius: '10px',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'center',
                fontSize: '0.85rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              {isMinting ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: '2px solid #111827',
                    borderTopColor: 'transparent',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Gravando Bloco na Blockchain...
                </>
              ) : (
                <>
                  <Coins size={16} /> Emitir Tokens de Carbono Circular
                </>
              )}
            </button>
          ) : (
            /* Digital Blockchain Certificate */
            <div style={{
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              animation: 'fadeIn 0.3s ease-out',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)' }}>
                <FileCheck size={18} />
                <strong style={{ fontSize: '0.85rem' }}>CERTIFICADO BLOCKCHAIN EMITIDO</strong>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Metais Reciclados:</span>
                  <strong style={{ color: '#ffffff' }}>{scrapTons} Toneladas</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>CO2 Evitado na Cadeia:</span>
                  <strong style={{ color: 'var(--success)' }}>{totalCo2Saved.toFixed(1)} tCO2e</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.4rem', marginTop: '0.2rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Coins size={12} style={{ color: 'var(--success)' }} />
                    Tokens Emitidos (CCT):
                  </span>
                  <strong style={{ color: 'var(--success)', fontSize: '0.95rem' }}>{tokensMinted} CCT</strong>
                </div>
              </div>

              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '0.4rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                HASH: 0x9f5a7b{scrapTons}d8{tokensMinted}e1f40b8c9d03a11b22e33f44e
              </div>
            </div>
          )}

          {/* Goal 5 years Progress */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Contribuição para a Meta Global:</span>
              <strong>{((scrapTons / 65000) * 100).toFixed(4)}% da Meta</strong>
            </div>
            <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{
                width: `${Math.min(100, (scrapTons / 65000) * 100 * 50)}%`, // Amplified visual representation for demo
                background: 'var(--success)',
                height: '100%'
              }} />
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'right' }}>
              Meta GCLP 5 Anos: 65.000 Toneladas
            </div>
          </div>
        </div>
      </div>

      {/* 5-Year Goals & Financial Viability */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        textAlign: 'left'
      }}>
        {/* Metas em 5 anos */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Milestone size={18} style={{ color: 'var(--success)' }} />
            Metas do Programa em 5 Anos
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Meta de Processamento:</span>
              <strong style={{ color: '#ffffff' }}>65.000 Toneladas de Metais Nobres</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Redução Escopo 3 Downstream:</span>
              <strong style={{ color: 'var(--success)' }}>Redução de 12% nas emissões</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Retenção de Clientes B2B:</span>
              <strong style={{ color: 'var(--primary-light)' }}>Retenção acima de 98,5%</strong>
            </div>
          </div>
        </div>

        {/* Viabilidade e Payback */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={18} style={{ color: 'var(--primary-light)' }} />
            Viabilidade e Planejamento Financeiro
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Investimento Inicial:</span>
              <strong style={{ color: '#ffffff' }}>R$ 32 Milhões (2,28% do Orçamento de PD&amp;I)</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Retorno de Investimento (Payback):</span>
              <strong style={{ color: 'var(--success)' }}>Estimado em 3,5 Anos</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <ShieldCheck size={14} style={{ color: 'var(--primary-light)' }} />
                Viabilidade Operacional:
              </span>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--success)',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '0.2rem 0.5rem',
                borderRadius: '6px'
              }}>
                ALTA VIABILIDADE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
