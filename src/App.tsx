import { useState } from 'react';
import { NumbersDashboard } from './components/NumbersDashboard';
import { SeeSimulator } from './components/SeeSimulator';
import { HumanRightsTimeline } from './components/HumanRightsTimeline';
import { CompetitorMatrix } from './components/CompetitorMatrix';
import { ESGPillars } from './components/ESGPillars';
import { ProductShowroom } from './components/ProductShowroom';
import { CostParadox } from './components/CostParadox';
import { AIShowroom } from './components/AIShowroom';
import { GCLPProgram } from './components/GCLPProgram';
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'weg-em-numeros', label: '1. Números' },
    { id: 'comportamento-consumidor-ux', label: '2. UX & TCO' },
    { id: 'direitos-humanos', label: '3. Social' },
    { id: 'estrategia-competitiva', label: '4. Estratégia' },
    { id: 'etica-cidadania-sustentabilidade', label: '5. ESG' },
    { id: 'gerenciamento-produtos-servicos-marcas', label: '6. Produtos' },
    { id: 'gestao-estrategica-custos-formacao-precos', label: '7. Custos' },
    { id: 'inteligencia-artificial-marketing', label: '8. I.A.' },
    { id: 'proposta-intervencao-gclp', label: '9. GCLP' }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      
      {/* Floating Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        background: 'rgba(3, 7, 18, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            fontSize: '1.15rem',
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
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '0.2rem 0.5rem',
            borderRadius: '6px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)'
          }}>
            PIM III
          </span>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '0.5rem' }} className="desktop-nav-container">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontSize: '0.75rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '0.3rem 0.75rem',
            borderRadius: '20px',
            color: 'var(--success)',
            fontWeight: 700,
            display: 'none'
          }} className="vercel-badge">
            VERCEL DEPLOY READY
          </span>

          {/* Mobile Menu Button */}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg-deep)',
          zIndex: 99,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          overflowY: 'auto'
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero Cinematic Cover */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 2rem',
        paddingTop: '70px',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 30%, var(--primary-glow) 0%, transparent 60%)'
      }}>
        {/* Academic Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.25)',
          padding: '0.4rem 1rem',
          borderRadius: '30px',
          color: 'var(--accent-purple)',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          marginBottom: '2rem',
          textTransform: 'uppercase',
          animation: 'fadeIn 1s ease-out'
        }}>
          <GraduationCap size={16} />
          Universidade Paulista • UNIP
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          maxWidth: '900px',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to bottom, #ffffff 60%, var(--text-secondary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'fadeIn 1.2s ease-out'
        }}>
          Aceleração Sustentável & Estratégica
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          lineHeight: '1.6',
          marginBottom: '3rem',
          animation: 'fadeIn 1.4s ease-out'
        }}>
          Análise integrada multidisciplinar de marketing, finanças e inovação da **WEG S.A.** Um projeto interativo concebido sob a perspectiva acadêmica do PIM III.
        </p>

        {/* Interactive CTA Anchor */}
        <a 
          href="#weg-em-numeros"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#ffffff',
            border: 'none',
            color: '#030712',
            padding: '0.85rem 1.75rem',
            borderRadius: '12px',
            fontSize: '0.95rem',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.15)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            animation: 'fadeIn 1.6s ease-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Explorar Apresentação <ChevronDown size={18} />
        </a>

        {/* Scroll Indicator details */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)'
        }}>
          <span>SCROLL PARA NAVEGAR</span>
          <ChevronDown size={14} style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </section>

      {/* Main Content Grid Wrapper */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 2rem' }}>
        
        <NumbersDashboard />
        
        <SeeSimulator />
        
        <HumanRightsTimeline />
        
        <CompetitorMatrix />
        
        <ESGPillars />
        
        <ProductShowroom />
        
        <CostParadox />
        
        <AIShowroom />
        
        <GCLPProgram />

      </main>

      {/* Editorial Footer */}
      <footer style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            paddingBottom: '2.5rem'
          }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                WEG S.A. Interactive Pitch
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Projeto Integrado Multidisciplinar III • Universidade Paulista • 2025
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                background: 'rgba(255,255,255,0.03)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <GraduationCap size={16} style={{ color: 'var(--accent-purple)' }} />
                UNIP Marketing
              </span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}>
            <span>© 2026 Guilherme. Todos os direitos reservados. Projeto Acadêmico sem fins lucrativos.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Built with React &amp; CSS Modules for Vercel
            </span>
          </div>

        </div>
      </footer>

      {/* Inject custom responsive layout styles directly */}
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

    </div>
  );
}

export default App;
