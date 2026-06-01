import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { RefreshCw, Milestone, ChevronDown, BookOpen } from 'lucide-react';

export const GCLPProgram: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <SectionHeader
          tag="TÓPICO 9"
          title="Proposta de Intervenção: GCLP"
          subtitle="Global Circular Lifecycle Program: a inovação disruptiva de logística reversa B2B da WEG S.A."
          accentColor="#10b981"
        />
      </div>

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

        {/* Column 2: Goals, Viability, Conclusion & Terminology Guides */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          {/* Metas, Viabilidade & Conclusão Card */}
          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Milestone size={16} style={{ color: 'var(--success)' }} />
              Viabilidade, Metas &amp; Conclusão
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Reciclagem Programada (Metas):</span>
                <strong style={{ color: '#ffffff' }}>65.000t de carcaças de metais</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Poluição Evitada (Escopo 3):</span>
                <strong style={{ color: 'var(--success)' }}>Corte de 12% nas emissões indiretas</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Investimento Estimado:</span>
                <strong style={{ color: '#ffffff' }}>R$ 32M (2,28% de PD&amp;I)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Retorno Financeiro (Payback):</span>
                <strong style={{ color: 'var(--success)' }}>3,5 Anos (ROI Elevado)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.2rem' }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Conclusão da Proposta:</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--success)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                  ALTAMENTE VIÁVEL &amp; RETORNO RÁPIDO
                </span>
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
    </div>
  );
};
