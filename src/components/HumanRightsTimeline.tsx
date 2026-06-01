import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Globe, Users, Heart, Briefcase, Award } from 'lucide-react';

export const HumanRightsTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'etica' | 'dei' | 'saude' | 'trabalho' | 'racismo'>('etica');

  const tabs = [
    { id: 'etica', label: 'Código de Ética', icon: <Globe size={18} /> },
    { id: 'dei', label: 'Inclusão & DEI', icon: <Users size={18} /> },
    { id: 'saude', label: 'Saúde Mental', icon: <Heart size={18} /> },
    { id: 'trabalho', label: 'Relações Trabalhistas', icon: <Briefcase size={18} /> },
    { id: 'racismo', label: 'Combate ao Racismo', icon: <Award size={18} /> }
  ] as const;

  return (
    <section id="direitos-humanos" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
      <SectionHeader
        tag="TÓPICO 3"
        title="Direitos Humanos & Governança Social"
        subtitle="A sustentabilidade da WEG em sua dimensão humana. Políticas robustas que asseguram integridade, equidade, saúde e inclusão global."
        accentColor="#8b5cf6"
      />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '0.75rem'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === tab.id ? 'var(--accent-purple)' : 'transparent',
                color: activeTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '0.9rem'
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', minHeight: '320px' }}>
          {activeTab === 'etica' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-purple)' }}>
                <Globe size={24} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>Código de Ética Global</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                Traduzido em <strong>5 idiomas</strong>, o Código de Ética Global da WEG unifica os padrões comportamentais e éticos da empresa em todas as suas filiais mundiais. A admissão de qualquer colaborador exige o treinamento mandatório no documento, que prega o total <strong>repúdio a qualquer tipo de discriminação</strong>.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginTop: '1rem'
              }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Globalização</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>5 Idiomas Oficiais</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Integração</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Admissão Mandatória</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dei' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-purple)' }}>
                <Users size={24} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>Inclusão & Diversidade</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                A governança em diversidade é gerida de forma estruturada através de um <strong>Comitê de DEI (Diversidade, Equidade e Inclusão)</strong> dedicado. A WEG implementa o <strong>Programa QPCD (Qualificação de Pessoas com Deficiência)</strong>, promovendo capacitação técnica e inserção profissional de PcDs, além de vagas afirmativas estratégicas em seus processos de recrutamento.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginTop: '1rem'
              }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Governança</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Comitê DEI Ativo</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Foco Profissional</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Programa QPCD</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'saude' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-purple)' }}>
                <Heart size={24} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>Saúde Mental & Bem-estar</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                Entendendo que a mente saudável é o alicerce do sucesso organizacional, a WEG disponibiliza a <strong>Plataforma +Saúde (2025)</strong>, facilitando consultas ágeis com psicólogos diretamente via aplicativo móvel. O cuidado é integrado ao <strong>Programa ViverBem</strong>, focado em palestras, dinâmicas e workshops informativos sobre combate ao estresse e ansiedade cotidianos.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginTop: '1rem'
              }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Telemecidina Ativa</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Plataforma +Saúde (2025)</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Prevenção</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Programa ViverBem</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trabalho' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-purple)' }}>
                <Briefcase size={24} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>Relações Trabalhistas de Excelência</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                A harmonia trabalhista é um valor inegociável na WEG. Atualmente, **95% da força global** é amparada por acordos sindicais estruturados. Além disso, a companhia garante a **igualdade salarial rigorosa entre gêneros** para as mesmas funções e disponibiliza **licença-maternidade de 120 dias**, valorizando o equilíbrio de vida e carreira.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginTop: '1rem'
              }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Cobertura Sindical</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>95% da Força Global</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Igualdade Social</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Igualdade Salarial de Gênero</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'racismo' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-purple)' }}>
                <Award size={24} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>Combate ao Racismo & Inclusão Racial</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                O programa **WEG pela Igualdade Racial** estabelece metas diretas para a ampliação da representatividade: elevar a presença de pessoas negras em cargos de liderança para **30% até 2027**. A empresa conduz processos de recrutamento afirmativo dedicados a profissionais negros, trilhas de desenvolvimento estruturadas para aceleração de talentos pretos, treinamento antirracista de caráter mandatório para líderes e equipes seletivas, além de auditorias trimestrais de metas.
              </p>
              
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span>Meta de Liderança Negra:</span>
                  <strong style={{ color: '#ffffff' }}>30% até 2027</strong>
                </div>
                {/* Custom Progress Bar */}
                <div style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.1)',
                  height: '10px',
                  borderRadius: '5px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '30%',
                    background: 'var(--accent-purple)',
                    height: '100%',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
                    borderRadius: '5px',
                    transition: 'width 1s ease-in-out'
                  }} />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                  Acompanhamento com revisão trimestral de metas e ações corretivas
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
