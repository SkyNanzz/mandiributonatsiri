import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { navItems } from '../../data/navigation';
import './Navbar.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

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

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
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
          <span className="navbar__logo-icon" aria-hidden="true">🌿</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">MBA</span>
            <span className="navbar__logo-sub">Mandiri Buton Atsiri</span>
          </div>
        </Link>

        <button
          ref={hamburgerRef}
          className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-menu"
        >
          {isMobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>

        <div
          id="navbar-menu"
          ref={menuRef}
          className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}
          role="dialog"
          aria-modal={isMobileMenuOpen}
          aria-label="Menu navigasi"
        >
          <ul className="navbar__links">
            {navItems.map((item, index) => (
              <li key={item.path} style={isMobileMenuOpen ? { animation: `fadeIn 0.3s ${0.1 + index * 0.07}s both` } : undefined}>
                <Link
                  to={item.path}
                  className={`navbar__link ${location.pathname === item.path ? 'navbar__link--active' : ''}`}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/kontak"
            className="navbar__cta"
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>

        <div
          className={`navbar__overlay ${isMobileMenuOpen ? 'navbar__overlay--visible' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      </div>
    </nav>
  );
}
