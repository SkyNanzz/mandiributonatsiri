import { useState, useCallback } from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Lightbox } from '../../components/Lightbox/Lightbox';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { galleryItems, galleryCategories } from '../../data/gallery';
import './Gallery.css';

function HeroSection() {
  return (
    <section className="gallery-hero">
      <div className="gallery-hero__bg" />
      <div className="gallery-hero__content container">
        <span className="gallery-hero__badge">Galeri</span>
        <h1 className="gallery-hero__title">
          Momen & <span className="gallery-hero__accent">Karya</span> Kami
        </h1>
        <p className="gallery-hero__subtitle">
          Dokumentasi perjalanan kami dalam mengembangkan industri minyak atsiri Indonesia.
        </p>
      </div>
    </section>
  );
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const lightboxImages = filtered.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + lightboxImages.length) % lightboxImages.length : null));
  }, [lightboxImages.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxImages.length : null));
  }, [lightboxImages.length]);

  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Dokumentasi Kegiatan"
            subtitle="Setiap gambar menceritakan komitmen kami dalam menghasilkan minyak atsiri berkualitas."
          />

          <div className="gallery__filters">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                className={`gallery__filter-btn ${activeCategory === cat.id ? 'gallery__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="gallery__grid">
            {filtered.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}

function GalleryCard({ item, onClick }: { item: typeof galleryItems[0]; onClick: () => void }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`gallery-card reveal ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Lihat gambar: ${item.alt}`}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <img src={item.src} alt={item.alt} loading="lazy" />
      <div className="gallery-card__overlay">
        <span className="gallery-card__category">{item.category}</span>
        <span className="gallery-card__label">{item.alt}</span>
      </div>
    </div>
  );
}
