import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Cpu, Zap, Car, ShieldCheck } from 'lucide-react';

export const ProductShowroom: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'industrial' | 'rejuvenescimento' | 'weco'>('industrial');

  const industrialProducts = [
    { name: 'Motores NEMA / IEC', desc: 'Liderança global de eficiência em motores elétricos induzidos industriais.' },
    { name: 'Redutores & Engrenagens', desc: 'Sistemas de transmissão mecânica robusta de alta precisão.' },
    { name: 'Drives & Painéis', desc: 'Inversores de frequência avançados para controle de velocidade e torque.' },
    { name: 'Automação Industrial', desc: 'CLPs, IHMs e softwares integrados para controle fabril inteligente.' },
    { name: 'Tintas Industriais', desc: 'Revestimentos de alta resistência química e anticorrosiva.' },
    { name: 'Subestações Inteligentes', desc: 'Soluções integradas de transmissão de energia prontas para smart grids.' }
  ];

  const wecoProducts = [
    { 
      name: 'Carregadores Veiculares (EV)', 
      icon: <Car size={20} />, 
      desc: 'Carregadores inteligentes de recarga rápida residenciais e corporativos para fomento da eletromobilidade.' 
    },
    { 
      name: 'Interruptores Residenciais', 
      icon: <Cpu size={20} />, 
      desc: 'Linhas modulares de design editorial refinado combinando automação doméstica e sofisticação estética.' 
    },
    { 
      name: 'Bombas Prediais Ecológicas', 
      icon: <Zap size={20} />, 
      desc: 'Sistemas de alta durabilidade e baixo consumo energético para condomínios e residências modernas.' 
    }
  ];

  return (
    <section id="gerenciamento-produtos-servicos-marcas" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <SectionHeader
        tag="TÓPICO 6"
        title="Gerenciamento de Produtos, Serviços e Marcas"
        subtitle="A expansão do brand equity da WEG: do domínio industrial absoluto B2B à consolidação tecnológica residencial sustentável com a linha W-Eco."
        accentColor="#3b82f6"
      />

      {/* Category Navigation */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingBottom: '0.75rem'
      }}>
        <button 
          onClick={() => setActiveCategory('industrial')}
          style={{
            background: 'none',
            border: 'none',
            color: activeCategory === 'industrial' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: 700,
            cursor: 'pointer',
            paddingBottom: '0.75rem',
            borderBottom: activeCategory === 'industrial' ? '2px solid var(--primary-light)' : '2px solid transparent',
            transition: 'all 0.2s',
            fontSize: '0.95rem'
          }}
        >
          One-Stop Shop Industrial B2B
        </button>
        <button 
          onClick={() => setActiveCategory('rejuvenescimento')}
          style={{
            background: 'none',
            border: 'none',
            color: activeCategory === 'rejuvenescimento' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: 700,
            cursor: 'pointer',
            paddingBottom: '0.75rem',
            borderBottom: activeCategory === 'rejuvenescimento' ? '2px solid var(--primary-light)' : '2px solid transparent',
            transition: 'all 0.2s',
            fontSize: '0.95rem'
          }}
        >
          Rejuvenescimento de Portfólio
        </button>
        <button 
          onClick={() => setActiveCategory('weco')}
          style={{
            background: 'none',
            border: 'none',
            color: activeCategory === 'weco' ? '#ffffff' : 'var(--text-secondary)',
            fontWeight: 700,
            cursor: 'pointer',
            paddingBottom: '0.75rem',
            borderBottom: activeCategory === 'weco' ? '2px solid var(--primary-light)' : '2px solid transparent',
            transition: 'all 0.2s',
            fontSize: '0.95rem'
          }}
        >
          Extensão de Marca B2C: Linha W-Eco
        </button>
      </div>

      {/* Content Render */}
      <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', minHeight: '380px' }}>
        {activeCategory === 'industrial' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                One-Stop Shop Industrial Completo
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A WEG constrói uma barreira competitiva de comodidade e integração sob o conceito de <strong>One-Stop Shop</strong>. O cliente industrial encontra toda a cadeia eletroeletrônica e de transmissão integrada em uma única marca, reduzindo fornecedores e atritos de compatibilidade técnica.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginTop: '1rem'
            }}>
              {industrialProducts.map((p, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  transition: 'transform 0.2s'
                }}>
                  <strong style={{ color: 'var(--primary-light)', fontSize: '0.95rem' }}>{p.name}</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.4' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'rejuvenescimento' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                Rejuvenescimento Estruturado do Portfólio
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Para evitar a obsolescência e proteger margens no mercado externo, a WEG classifica os motores <strong>IE2 / IE3 em fase de maturidade</strong> de ciclo de vida. O foco comercial e investimentos da companhia são inteiramente direcionados aos inovadores motores **IE5 / IE6** e à plataforma digital integrada **WEG Motion Fleet Management**, atendendo mercados regulatórios de altíssima exigência técnica como a União Europeia e os EUA.
              </p>
            </div>

            {/* Lifecycle Stages Visual Chart */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginTop: '1rem'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', display: 'block', marginBottom: '1rem' }}>
                Curva de Ciclo de Vida do Portfólio de Motores:
              </span>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.25rem'
              }}>
                {/* Stage 1 */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '10px', borderLeft: '3px solid var(--accent-purple)' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Crescimento / Inovação</span>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', margin: '0.25rem 0' }}>Motores IE5 / IE6</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Foco absoluto de investimentos e expansão tecnológica.</span>
                </div>

                {/* Stage 2 */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '10px', borderLeft: '3px solid var(--primary-light)' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Servitização Digital</span>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', margin: '0.25rem 0' }}>Motion Fleet Management</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Plataforma em nuvem B2B para telemetria avançada de ativos.</span>
                </div>

                {/* Stage 3 */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '10px', borderLeft: '3px solid var(--accent)' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Maturidade / Declínio</span>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem', margin: '0.25rem 0' }}>Linhas IE2 / IE3</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Fase madura de escoamento e substituição ativa pelo plano de troca.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'weco' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)' }}>
                <ShieldCheck size={18} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  W-Eco Line: B2C Brand Equity
                </span>
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>
                Conexão com a Nova Geração de Consumidores
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Como estratégia para diversificar riscos do mercado puramente industrial e rejuvenescer a marca perante a sociedade civil, a WEG expande seu portfólio para o segmento residencial B2C. A **linha W-Eco** é o vetor dessa mudança, levando a confiabilidade industrial para dentro dos lares de forma altamente sustentável.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginTop: '1rem'
            }}>
              {wecoProducts.map((p, idx) => (
                <div key={idx} style={{
                  background: 'rgba(16, 185, 129, 0.03)',
                  border: '1px solid rgba(16, 185, 129, 0.12)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    color: 'var(--success)',
                    background: 'rgba(16, 185, 129, 0.08)',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {p.icon}
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>{p.name}</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.4' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
