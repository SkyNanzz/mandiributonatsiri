import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './SectionTitle.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export function SectionTitle({ title, subtitle, light = false, center = true }: SectionTitleProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`section-title ${light ? 'section-title--light' : ''} ${center ? 'section-title--center' : ''} reveal ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="section-title__text">{title}</h2>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
      <div className="section-title__divider" aria-hidden="true">
        <span className="section-title__line" />
        <span className="section-title__dot" />
        <span className="section-title__line" />
      </div>
    </div>
  );
}
