import { Link } from 'react-router-dom';
import { FiSend, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { navItems } from '../../data/navigation';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span>🌿</span>
              <div>
                <span className="footer__logo-title">MBA</span>
                <span className="footer__logo-sub">Mandiri Buton Atsiri</span>
              </div>
            </Link>
            <p className="footer__desc">
              Perusahaan minyak atsiri premium Indonesia, berkomitmen menghadirkan
              bahan baku essential oil berkualitas ekspor dari bumi Sulawesi Tenggara
              ke seluruh dunia.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4 className="footer__heading">Navigasi</h4>
            <ul className="footer__links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__heading">Produk</h4>
            <ul className="footer__links">
              <li><Link to="/produk" className="footer__link">Minyak Nilam</Link></li>
              <li><Link to="/produk" className="footer__link">Minyak Kayu Putih</Link></li>
              <li><Link to="/produk" className="footer__link">Minyak Cengkeh</Link></li>
              <li><Link to="/produk" className="footer__link">Minyak Sereh Wangi</Link></li>
              <li><Link to="/produk" className="footer__link">Minyak Pala</Link></li>
              <li><Link to="/produk" className="footer__link">Minyak Akar Wangi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Kontak</h4>
            <ul className="footer__contact">
              <li>
                <FiMapPin size={16} />
                <span>Jl. Poros Buton No. 123, Baubau, Sulawesi Tenggara</span>
              </li>
              <li>
                <FiPhone size={16} />
                <a href="tel:+6281234567890" className="footer__link">+62 812-3456-7890</a>
              </li>
              <li>
                <FiSend size={16} />
                <a href="mailto:info@mbamandiri.com" className="footer__link">info@mbamandiri.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} MBA Mandiri Buton Atsiri. Seluruh hak cipta dilindungi.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link">Kebijakan Privasi</a>
            <a href="#" className="footer__link">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
