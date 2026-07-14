import { useState } from 'react';
import { FiCalendar, FiArrowRight,  } from 'react-icons/fi';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { articles, articleCategories } from '../../data/articles';
import './Articles.css';

function HeroSection() {
  return (
    <section className="articles-hero">
      <div className="articles-hero__bg" />
      <div className="articles-hero__content container">
        <span className="articles-hero__badge">Artikel & Berita</span>
        <h1 className="articles-hero__title">
          Informasi & <span className="articles-hero__accent">Wawasan</span>
        </h1>
        <p className="articles-hero__subtitle">
          Berita terbaru, artikel informatif, dan wawasan seputar industri minyak atsiri Indonesia.
        </p>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const { ref, isVisible } = useIntersectionObserver();
  const date = new Date(article.date);
  const formattedDate = date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article ref={ref} className={`article-card reveal ${isVisible ? 'visible' : ''}`}>
      <div className="article-card__img">
        <img src={article.image} alt={article.title} loading="lazy" />
        <span className="article-card__category">{article.category}</span>
      </div>
      <div className="article-card__body">
        <div className="article-card__date">
          <FiCalendar size={14} />
          {formattedDate}
        </div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__summary">{article.summary}</p>
        <a href={`/artikel/${article.slug}`} className="btn btn--link">
          Baca Selengkapnya <FiArrowRight />
        </a>
      </div>
    </article>
  );
}

export function Articles() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Artikel Terbaru"
            subtitle="Dapatkan informasi terkini seputar industri minyak atsiri dan perkembangan perusahaan."
          />

          <div className="articles__filters">
            {articleCategories.map((cat) => (
              <button
                key={cat.id}
                className={`articles__filter-btn ${activeCategory === cat.id ? 'articles__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="articles__grid">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
