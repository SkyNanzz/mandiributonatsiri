import { useState } from 'react';
import { FiArrowRight, FiCheck,  } from 'react-icons/fi';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { products, productCategories } from '../../data/products';
import './Products.css';

function HeroSection() {
  return (
    <section className="products-hero">
      <div className="products-hero__bg" />
      <div className="products-hero__content container">
        <span className="products-hero__badge">Produk Kami</span>
        <h1 className="products-hero__title">
          Essential Oil <span className="products-hero__accent">Premium</span>
        </h1>
        <p className="products-hero__subtitle">
          Deretan minyak atsiri pilihan dengan kualitas ekspor, diproses dengan teknologi
          distilasi modern dan kontrol mutu yang ketat.
        </p>
      </div>
    </section>
  );
}

function ProductDetail({ product, onBack }: { product: typeof products[0]; onBack: () => void }) {
  return (
    <div className="product-detail">
      <button className="product-detail__back" onClick={onBack}>
        <FiArrowRight style={{ transform: 'rotate(180deg)' }} /> Kembali
      </button>
      <div className="product-detail__grid">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
          <span className="product-detail__badge">{product.category}</span>
        </div>
        <div className="product-detail__info">
          <h2 className="product-detail__name">{product.name}</h2>
          <em className="product-detail__latin">{product.latinName}</em>
          <p className="product-detail__desc">{product.description}</p>

          <h3 className="product-detail__section-title">Manfaat</h3>
          <ul className="product-detail__benefits">
            {product.benefits.map((b, i) => (
              <li key={i}>
                <FiCheck size={16} /> {b}
              </li>
            ))}
          </ul>

          <h3 className="product-detail__section-title">Spesifikasi</h3>
          <div className="product-detail__specs">
            {product.specifications.map((spec, i) => (
              <div key={i} className="product-detail__spec">
                <span className="product-detail__spec-label">{spec.label}</span>
                <span className="product-detail__spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onSelect }: { product: typeof products[0]; onSelect: () => void }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <article ref={ref} className={`product-card reveal ${isVisible ? 'visible' : ''}`}>
      <div className="product-card__img">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-card__badge">{product.category}</span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <em className="product-card__latin">{product.latinName}</em>
        <p className="product-card__desc">{product.description.slice(0, 100)}...</p>
        <button className="btn btn--link" onClick={onSelect}>
          Lihat Detail <FiArrowRight />
        </button>
      </div>
    </article>
  );
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const selected = selectedProduct !== null
    ? products.find((p) => p.id === selectedProduct)
    : null;

  if (selected) {
    return (
      <>
        <section className="products-hero products-hero--short">
          <div className="products-hero__bg" />
          <div className="products-hero__content container">
            <span className="products-hero__badge">{selected.category}</span>
            <h1 className="products-hero__title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {selected.name}
            </h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <ProductDetail product={selected} onBack={() => setSelectedProduct(null)} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Jelajahi Produk Kami"
            subtitle="Berbagai pilihan minyak atsiri premium siap memenuhi kebutuhan industri Anda."
          />

          <div className="products__filters">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                className={`products__filter-btn ${activeCategory === cat.id ? 'products__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="products__grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={() => setSelectedProduct(product.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
