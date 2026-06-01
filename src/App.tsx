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
import { ChevronDown, GraduationCap, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const TOTAL_SLIDES = 10;

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
    { index: 9, id: 'proposta-intervencao-gclp', label: '9. GCLP' }
  ];

  // Keyboard Navigation: Left/Right arrow keys & Spacebar
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
      
      {/* Floating Presentation Header */}
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
        {/* Brand with explicit WEG reference */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: 'var(--primary-light)' }}>WEG</span> S.A.
          </div>
          <span style={{
            fontSize: '0.65rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            padding: '0.2rem 0.5rem',
            borderRadius: '6px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--primary-light)'
          }}>
            PIM III
          </span>
        </div>

        {/* Desktop Presentation Nav */}
        <nav style={{ display: 'none', gap: '0.35rem' }} className="desktop-nav-container">
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => {
                setCurrentSlide(item.index);
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: currentSlide === item.index ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                background: currentSlide === item.index ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
                outline: 'none',
                padding: '0.45rem 0.75rem',
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
          gap: '1rem',
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
                padding: '0.75rem 1rem',
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

      {/* Fullscreen Slide Viewport Canvas */}
      <div className="slide-canvas">
        <div className="slide-active" key={currentSlide} style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* Cover Slide */}
          {currentSlide === 0 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem',
              minHeight: '75vh',
              background: 'radial-gradient(circle at 50% 30%, var(--primary-glow) 0%, transparent 65%)'
            }}>
              {/* WEG Official Slogan Reference */}
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
                letterSpacing: '0.1em',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)'
              }}>
                WEG S.A. • LÍDER GLOBAL EM EFICIÊNCIA ENERGÉTICA
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                maxWidth: '950px',
                marginBottom: '1.5rem',
                background: 'linear-gradient(to bottom, #ffffff 60%, var(--text-secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Aceleração Sustentável & Estratégia
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: 'var(--text-secondary)',
                maxWidth: '650px',
                lineHeight: '1.6',
                marginBottom: '2.5rem'
              }}>
                Análise integrada multidisciplinar de marketing, finanças e inovação da **WEG S.A.** Projeto desenvolvido sob a estrutura curricular do PIM III da Universidade Paulista.
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.18)',
                padding: '0.5rem 1.25rem',
                borderRadius: '12px',
                color: 'var(--accent-purple)',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                <GraduationCap size={18} />
                <span>Projeto Integrado Multidisciplinar III • UNIP Marketing</span>
              </div>

              {/* Navigation tip */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--text-muted)',
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <span>USE AS SETAS DO TECLADO PARA NAVEGAR ◄  ►</span>
                <ChevronDown size={14} style={{ animation: 'bounce 2s infinite' }} />
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
          <strong>WEG S.A.</strong> • PROJETO INTEGRADO MULTIDISCIPLINAR III
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

      {/* Responsive and bounce selectors */}
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
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }
      `}</style>

    </div>
  );
}

export default App;
