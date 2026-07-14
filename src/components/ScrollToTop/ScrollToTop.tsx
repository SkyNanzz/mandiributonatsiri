import { useScrollToTop } from '../../hooks/useScrollToTop';
import { FiChevronUp } from 'react-icons/fi';
import './ScrollToTop.css';

export function ScrollToTop() {
  const { showButton, scrollToTop } = useScrollToTop();

  return (
    <button
      className={`scroll-to-top ${showButton ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
    >
      <FiChevronUp size={20} />
    </button>
  );
}
