import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiTrendingUp, FiGlobe, FiAward } from 'react-icons/fi';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { products } from '../../data/products';
import { testimonials } from '../../data/testimonials';
import { stats } from '../../data/stats';
import './Home.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-overlay" />
        <div className="hero__bg-pattern" />
      </div>
      <div className="hero__content container">
        <span className="hero__badge">Premium Essential Oil Indonesia</span>
        <h1 className="hero__title">
          Menghadirkan<br />
          <span className="hero__title-accent">Keharuman Alami</span>
          <br />
          Nusantara
        </h1>
        <p className="hero__subtitle">
          MBA Mandiri Buton Atsiri adalah perusahaan minyak atsiri premium yang
          berkomitmen menghadirkan essential oil berkualitas ekspor dari
          kekayaan alam Sulawesi Tenggara ke seluruh dunia.
        </p>
        <div className="hero__actions">
          <Link to="/produk" className="btn btn--primary">
            Jelajahi Produk
            <FiArrowRight />
          </Link>
          <Link to="/kontak" className="btn btn--outline">
            Hubungi Kami
          </Link>
        </div>
        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.id} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeunggulanSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const keunggulan = [
    {
      icon: <FiAward size={28} />,
      title: 'Bahan Baku Alami',
      desc: '100% minyak atsiri murni dari bahan baku alami pilihan tanpa campuran atau bahan sintetis.',
    },
    {
      icon: <FiShield size={28} />,
      title: 'Kualitas Premium',
      desc: 'Setiap produk melewati uji kualitas ketat di laboratorium untuk memastikan kemurnian dan standar ekspor.',
    },
    {
      icon: <FiGlobe size={28} />,
      title: 'Jaringan Global',
      desc: 'Telah dipercaya oleh mitra bisnis di berbagai negara termasuk Prancis, Jepang, Spanyol, dan Korea.',
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: 'Inovasi Berkelanjutan',
      desc: 'Terus mengembangkan teknologi distilasi ramah lingkungan dan program pemberdayaan petani lokal.',
    },
  ];

  return (
    <section className="section keunggulan" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Mengapa Memilih Kami"
          subtitle="Kami menggabungkan kekayaan alam Indonesia dengan standar kualitas internasional untuk menghadirkan minyak atsiri terbaik."
        />
        <div className={`keunggulan__grid reveal ${isVisible ? 'visible' : ''}`}>
          {keunggulan.map((item, i) => (
            <div
              key={i}
              className={`keunggulan__card reveal-delay-${i + 1}`}
            >
              <div className="keunggulan__icon">{item.icon}</div>
              <h3 className="keunggulan__title">{item.title}</h3>
              <p className="keunggulan__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProdukUnggulanSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="section section-alt produk-unggulan" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Produk Unggulan"
          subtitle="Deretan minyak atsiri premium pilihan yang menjadi andalan ekspor kami ke pasar internasional."
        />
        <div className={`produk-unggulan__grid reveal ${isVisible ? 'visible' : ''}`}>
          {featuredProducts.map((product, i) => (
            <div key={product.id} className={`produk-unggulan__card reveal-delay-${i + 1}`}>
              <div className="produk-unggulan__img">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="produk-unggulan__badge">{product.category}</span>
              </div>
              <div className="produk-unggulan__info">
                <h3 className="produk-unggulan__name">{product.name}</h3>
                <em className="produk-unggulan__latin">{product.latinName}</em>
                <p className="produk-unggulan__desc">{product.description.slice(0, 120)}...</p>
                <Link to="/produk" className="btn btn--link">
                  Lihat Detail <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="produk-unggulan__more">
          <Link to="/produk" className="btn btn--primary">
            Lihat Semua Produk
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatistikSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="statistik section-dark" ref={ref}>
      <div className="container">
        <div className={`statistik__grid reveal ${isVisible ? 'visible' : ''}`}>
          {stats.map((stat, i) => (
            <div key={stat.id} className={`statistik__item reveal-delay-${i + 1}`}>
              <span className="statistik__icon">{stat.icon}</span>
              <span className="statistik__value">{stat.value}</span>
              <span className="statistik__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimoniSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const featured = testimonials.slice(0, 3);

  return (
    <section className="section testimoni" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Apa Kata Klien"
          subtitle="Kepercayaan mitra bisnis dari berbagai negara menjadi motivasi kami untuk terus memberikan yang terbaik."
        />
        <div className={`testimoni__grid reveal ${isVisible ? 'visible' : ''}`}>
          {featured.map((t, i) => (
            <div key={t.id} className={`testimoni__card reveal-delay-${i + 1}`}>
              <div className="testimoni__rating">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="testimoni__star">⭐</span>
                ))}
              </div>
              <blockquote className="testimoni__quote">{t.quote}</blockquote>
              <div className="testimoni__author">
                <img src={t.avatar} alt={t.name} className="testimoni__avatar" loading="lazy" />
                <div>
                  <strong className="testimoni__name">{t.name}</strong>
                  <span className="testimoni__role">{t.role}, {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section cta section-dark" ref={ref}>
      <div className="container">
        <div className={`cta__content reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="cta__title">Siap Bermitra dengan Kami?</h2>
          <p className="cta__desc">
            Hubungi tim kami untuk mengetahui lebih lanjut tentang produk minyak atsiri
            premium kami dan peluang kerjasama ekspor.
          </p>
          <div className="cta__actions">
            <Link to="/kontak" className="btn btn--gold">
              Hubungi Kami
              <FiArrowRight />
            </Link>
            <Link to="/tentang" className="btn btn--outline-light">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <HeroSection />
      <KeunggulanSection />
      <ProdukUnggulanSection />
      <StatistikSection />
      <TestimoniSection />
      <CTASection />
    </>
  );
}
