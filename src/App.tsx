import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';

const Home = lazy(() => import('./pages/Home/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About/About').then((m) => ({ default: m.About })));
const Products = lazy(() => import('./pages/Products/Products').then((m) => ({ default: m.Products })));
const Gallery = lazy(() => import('./pages/Gallery/Gallery').then((m) => ({ default: m.Gallery })));
const Articles = lazy(() => import('./pages/Articles/Articles').then((m) => ({ default: m.Articles })));
const Contact = lazy(() => import('./pages/Contact/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound/NotFound').then((m) => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LoadingSpinner size="lg" />
    </div>
  );
}

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <div className="page-wrapper">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/produk" element={<Products />} />
              <Route path="/galeri" element={<Gallery />} />
              <Route path="/artikel" element={<Articles />} />
              <Route path="/kontak" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
