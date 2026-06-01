import { useState, useEffect } from 'react';
import { NumbersDashboard } from './components/NumbersDashboard';
import { SeeSimulator } from './components/SeeSimulator';
import { HumanRightsTimeline } from './components/HumanRightsTimeline';
import { CompetitorMatrix } from './components/CompetitorMatrix';
import { ESGPillars } from './components/ESGPillars';
import { ProductShowroom } from './components/ProductShowroom';
import { CostParadox } from './components/CostParadox';
import { AIShowroom } from './components/AIShowroom';
import { GCLPProgram } from './components/GCLPProgram';
import { WegLogo } from './components/WegLogo';
import { GraduationCap, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const TOTAL_SLIDES = 11;

  const navItems = [
    { index: 0, label: 'Capa' },
    { index: 1, id: 'weg-em-numeros', label: '1. Números' },
    { index: 2, id: 'comportamento-consumidor-ux', label: '2. UX & See+' },
    { index: 3, id: 'direitos-humanos', label: '3. Social' },
    { index: 4, id: 'estrategia-competitiva', label: '4. Estratégia' },
    { index: 5, id: 'etica-cidadania-sustentabilidade', label: '5. ESG' },
    { index: 6, id: 'gerenciamento-produtos-servicos-marcas', label: '6. Produtos' },
    { index: 7, id: 'gestao-estrategica-custos-formacao-precos', label: '7. Custos' },
    { index: 8, id: 'inteligencia-artificial-marketing', label: '8. I.A.' },
    { index: 9, id: 'proposta-intervencao-gclp', label: '9. GCLP' },
    { index: 10, label: 'Fim' }
  ];

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'Space') {
        event.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
      } else if (event.key === 'ArrowLeft' || event.key === 'Backspace') {
        event.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="presentation-container">
      <div className="top-energy-bar" />
      
      {/* Floating Header */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '75px',
        background: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem'
      }}>
        {/* WEG Brand with Official Vector Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <WegLogo width={36} height={25} color="#00579e" />
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center'
          }}>
            WEG S.A.
          </div>
          <span style={{
            fontSize: '0.65rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            padding: '0.2rem 0.5rem',
            borderRadius: '6px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--primary-light)',
            marginLeft: '0.25rem'
          }}>
            PIM III
          </span>
        </div>

        {/* Desktop Presentation Nav */}
        <nav style={{ display: 'none', gap: '0.25rem' }} className="desktop-nav-container">
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => {
                setCurrentSlide(item.index);
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: currentSlide === item.index ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                background: currentSlide === item.index ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
                outline: 'none',
                padding: '0.4rem 0.65rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-sans)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: currentSlide === item.index ? 'rgba(59, 130, 246, 0.3)' : 'transparent'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action / Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontSize: '0.7rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '0.3rem 0.75rem',
            borderRadius: '20px',
            color: 'var(--success)',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            display: 'none'
          }} className="vercel-badge">
            DEPLOY SLIDES ACTIVE
          </span>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '75px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg-deep)',
          zIndex: 99,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          overflowY: 'auto'
        }}>
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => {
                setCurrentSlide(item.index);
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: currentSlide === item.index ? 'var(--primary-light)' : '#ffffff',
                border: 'none',
                textAlign: 'left',
                padding: '0.6rem 1rem',
                borderRadius: '10px',
                background: currentSlide === item.index ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: currentSlide === item.index ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* 3D Robot Arm: viewport-level overlay, only on cover slide */}
      {currentSlide === 0 && (
        <div style={{
          position: 'absolute',
          top: '75px',
          right: 0,
          bottom: 0,
          left: '55%',
          zIndex: 3,
          pointerEvents: 'auto',
          overflow: 'hidden'
        }} className="hero-spline-overlay">
          <div
            style={{ width: '100%', height: '100%', transform: 'scale(0.82)', transformOrigin: 'top right' }}
            dangerouslySetInnerHTML={{
              __html: '<spline-viewer url="https://prod.spline.design/ry6aYkpkn76CYg4N/scene.splinecode" loading="eager" width="100%" height="100%" style="background:transparent"></spline-viewer>'
            }}
          />
        </div>
      )}

      {/* Fullscreen Slide Viewport Canvas */}
      <div className="slide-canvas">
        <div className="slide-active" key={currentSlide} style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* Cover Slide (0) */}
          {currentSlide === 0 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              height: '100%'
            }} className="hero-slide-grid">
              
              {/* Left Column: Text & Content */}
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2, position: 'relative', maxWidth: '50%' }} className="hero-left-col">
                {/* WEG Slogan */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  padding: '0.4rem 1rem',
                  borderRadius: '30px',
                  color: 'var(--primary-light)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                  width: 'fit-content',
                  fontFamily: 'var(--font-mono)'
                }}>
                  WEG S.A. • TECNOLOGIA PARA UM FUTURO SUSTENTÁVEL
                </div>

                <h1 style={{
                  fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  maxWidth: '750px',
                  marginBottom: '1.25rem',
                  background: 'linear-gradient(to bottom, #ffffff 60%, var(--text-secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Aceleração Sustentável & Estratégia
                </h1>

                <p style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  color: 'var(--text-secondary)',
                  maxWidth: '580px',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  A WEG S.A. (bolsa brasileira: WEGE3) é uma multinacional brasileira e uma das maiores fabricantes globais de equipamentos eletroeletrônicos. Fundada em 1961 e sediada em Jaraguá do Sul (SC), atua nos setores de máquinas elétricas, automação, tintas e soluções para geração e distribuição de energia.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(139, 92, 246, 0.08)',
                    border: '1px solid rgba(139, 92, 246, 0.18)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '12px',
                    color: 'var(--accent-purple)',
                    fontSize: '0.82rem',
                    fontWeight: 600
                  }}>
                    <GraduationCap size={16} />
                    <span>UNIP • PIM III • Marketing</span>
                  </div>
                </div>


              </div>

            </div>
          )}

          {/* Active slides matching PDF */}
          {currentSlide === 1 && <NumbersDashboard />}
          {currentSlide === 2 && <SeeSimulator />}
          {currentSlide === 3 && <HumanRightsTimeline />}
          {currentSlide === 4 && <CompetitorMatrix />}
          {currentSlide === 5 && <ESGPillars />}
          {currentSlide === 6 && <ProductShowroom />}
          {currentSlide === 7 && <CostParadox />}
          {currentSlide === 8 && <AIShowroom />}
          {currentSlide === 9 && <GCLPProgram />}

          {/* Slide 10: Finalização / Encerramento */}
          {currentSlide === 10 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem',
              minHeight: '75vh',
              animation: 'fadeIn 0.4s ease-out'
            }}>
              
              <WegLogo width={120} height={82} color="#00579e" className="glow-text-blue" />
              
              <h1 style={{
                fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginTop: '1.5rem',
                marginBottom: '1rem',
                background: 'linear-gradient(to bottom, #ffffff, var(--text-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Agradecemos a Atenção
              </h1>

              {/* WEG S.A. Mission */}
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: 'var(--text-secondary)',
                maxWidth: '650px',
                lineHeight: '1.6',
                fontStyle: 'italic',
                marginBottom: '2.5rem'
              }}>
                "Transformar energia em soluções eficientes, limpas e inteligentes para o desenvolvimento sustentável global, unindo confiabilidade industrial a responsabilidade ambiental."
              </p>

              {/* Academic Credits */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '1.5rem 2rem',
                borderRadius: '16px',
                maxWidth: '850px',
                width: '100%',
                textAlign: 'left'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Integrantes do Grupo</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#ffffff' }}>1. Bruno Arabe</strong> — RA: H7519H-0
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#ffffff' }}>2. Igor Lopes do Carmo</strong> — RA: R95832-9
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#ffffff' }}>3. Guilherme Corrêa dos Santos Silva</strong> — RA: H76181-6
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#ffffff' }}>4. David Paiva Lima Lopes</strong> — RA: R822HG-2
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>Instituição</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>Universidade Paulista (UNIP)</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>Estrutura de Projeto</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-light)' }}>PIM III • Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Floating Left Navigation Handle */}
      {currentSlide > 0 && (
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(10, 15, 29, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(10, 15, 29, 0.6)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <ArrowLeft size={18} />
        </button>
      )}

      {/* Floating Right Navigation Handle */}
      {currentSlide < TOTAL_SLIDES - 1 && (
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(10, 15, 29, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(10, 15, 29, 0.6)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <ArrowRight size={18} />
        </button>
      )}

      {/* Glowing Bottom Progress Bar & Pagination Indicator */}
      <footer style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        background: 'rgba(3, 7, 18, 0.9)',
        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        zIndex: 98
      }}>
        {/* Progress percent line */}
        <div style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          height: '2px',
          background: 'linear-gradient(to right, var(--primary-light), var(--success))',
          width: `${(currentSlide / (TOTAL_SLIDES - 1)) * 100}%`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }} />

        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <strong>WEG S.A.</strong> • PROJETO INTEGRADO MULTIDISCIPLINAR III • MARKETING
        </div>

        <div style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          color: 'var(--primary-light)',
          fontFamily: 'var(--font-mono)',
          background: 'rgba(59, 130, 246, 0.08)',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          SLIDE {currentSlide + 1} DE {TOTAL_SLIDES}
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .vercel-badge {
            display: inline-flex !important;
          }
        }
        /* Hide robot arm on small screens */
        @media (max-width: 1023px) {
          .hero-spline-overlay {
            display: none !important;
          }
          .hero-left-col {
            max-width: 100% !important;
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }
      `}</style>

    </div>
  );
}

export default App;
