import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { navItems } from '../../data/navigation';
import './Navbar.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Navigasi utama"
      onKeyDown={handleKeyDown}
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="MBA Mandiri Buton Atsiri - Beranda">
          <span className="navbar__logo-icon">🌿</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">MBA</span>
            <span className="navbar__logo-sub">Mandiri Buton Atsiri</span>
          </div>
        </Link>

        <button
          className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <div className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`navbar__link ${location.pathname === item.path ? 'navbar__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/kontak" className="navbar__cta">
            Hubungi Kami
          </Link>
        </div>

        {isMobileMenuOpen && (
          <div
            className="navbar__overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
}
