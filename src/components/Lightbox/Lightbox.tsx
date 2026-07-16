import { useEffect, useCallback } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Lightbox.css';

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-label="Galeri gambar" aria-modal="true">
      <button className="lightbox__close" onClick={onClose} aria-label="Tutup">
        <FiX size={24} />
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Gambar sebelumnya"
      >
        <FiChevronLeft size={28} />
      </button>

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img
          src={current.src}
          alt={current.alt}
          className="lightbox__image"
          loading="lazy"
        />
        <p className="lightbox__caption">{current.alt}</p>
        <span className="lightbox__counter">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Gambar selanjutnya"
      >
        <FiChevronRight size={28} />
      </button>
    </div>
  );
}
