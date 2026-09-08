import { useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { profile, sections } from './data/content.js';
import { MessageCircle, ArrowDown, ArrowUp, ChevronDown, ChevronUp, Moon, Sun } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'dark');
  const observerRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 500);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current.observe(el);
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('section, .project, .skill-group, .cert-card, .achievements-list li').forEach((el) => {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeIndex = sections.findIndex((section) => section.id === activeSection);
  const previousSection = activeIndex > 0 ? sections[activeIndex - 1] : null;
  const nextSection = activeIndex < sections.length - 1 ? sections[activeIndex + 1] : null;

  return (
    <div className="layout">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className={`page-loader${isLoading ? ' is-loading' : ''}`} aria-hidden={!isLoading}>
        <span className="loader-mark">AU</span>
        <span className="loader-line" />
      </div>
      <div className="falling-stars" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span
            key={index}
            className="falling-star"
            style={{
              '--star-left': `${(index * 23 + 7) % 100}%`,
              '--star-delay': `${(index * 1.7) % 12}s`,
              '--star-duration': `${10 + (index % 5) * 2}s`,
              '--star-size': `${index % 4 === 0 ? 3 : 2}px`,
            }}
          />
        ))}
      </div>
      <div
        className="cursor-glow"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        aria-hidden="true"
      />
      <div
        className="cursor-arrow"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        aria-hidden="true"
      />
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="main" id="main-content">
        <div className="content">
          <Hero />
          <a className="scroll-cue" href="#projects">
            <span>Explore selected work</span>
            <ArrowDown size={15} strokeWidth={1.75} />
          </a>
          <About />
          <Projects />
          <Certificates />
          <Skills />
          <Achievements />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
      <a
        className="whatsapp-bubble"
        href={`https://wa.me/${profile.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact me on WhatsApp"
      >
        <MessageCircle size={19} strokeWidth={1.8} />
        <span>Let&apos;s talk</span>
      </a>
      <nav className="quick-nav" aria-label="Quick section navigation">
        <span className="quick-nav-progress" style={{ height: `${scrollProgress}%` }} aria-hidden="true" />
        <button
          type="button"
          className="quick-nav-button theme-toggle"
          onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={14} strokeWidth={1.8} /> : <Moon size={14} strokeWidth={1.8} />}
        </button>
        <span className="quick-nav-line" aria-hidden="true" />
        <button
          type="button"
          className="quick-nav-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={14} strokeWidth={1.8} />
        </button>
        <span className="quick-nav-line" aria-hidden="true" />
        <button
          type="button"
          className="quick-nav-button"
          onClick={() => previousSection && handleNavigate(previousSection.id)}
          disabled={!previousSection}
          aria-label={previousSection ? `Go to ${previousSection.label}` : 'No previous section'}
          title={previousSection ? `Previous: ${previousSection.label}` : 'No previous section'}
        >
          <ChevronUp size={15} strokeWidth={1.8} />
        </button>
        <span className="quick-nav-label">{sections[activeIndex]?.label || 'Portfolio'}</span>
        <button
          type="button"
          className="quick-nav-button"
          onClick={() => nextSection && handleNavigate(nextSection.id)}
          disabled={!nextSection}
          aria-label={nextSection ? `Go to ${nextSection.label}` : 'No next section'}
          title={nextSection ? `Next: ${nextSection.label}` : 'No next section'}
        >
          <ChevronDown size={15} strokeWidth={1.8} />
        </button>
        <span className="quick-nav-line" aria-hidden="true" />
        <button
          type="button"
          className="quick-nav-button"
          onClick={() => handleNavigate('contact')}
          aria-label="Go to contact"
          title="Contact me"
        >
          <ArrowDown size={14} strokeWidth={1.8} />
        </button>
      </nav>
    </div>
  );
}
