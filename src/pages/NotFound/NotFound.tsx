import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import './NotFound.css';

export function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__content">
          <span className="not-found__code">404</span>
          <h1 className="not-found__title">Halaman Tidak Ditemukan</h1>
          <p className="not-found__desc">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          </p>
          <Link to="/" className="btn btn--primary">
            <FiHome /> Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
