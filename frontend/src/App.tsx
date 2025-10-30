import './App.css';
import Footer from './components/layout/Footer';
import HomePage from '../src/pages/HomePage';
import Header from './components/layout/Header';
import StoreLocatorPage from './pages/StoreLocatorPage';
import { useEffect, useMemo, useState } from 'react';
import AuthModal from './components/ui/AuthModal';

type Page = 'home' | 'stores';

function App() {
  const pathToPage = (path: string): Page => (path === '/stores' ? 'stores' : 'home');
  const [page, setPage] = useState<Page>(pathToPage(window.location.pathname));
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const navigate = (to: string) => {
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
    }
    setPage(pathToPage(to));
  };

  useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div>
      <Header onOpenStores={() => navigate('/stores')} onOpenLogin={() => setAuthOpen(true)} />
      {page === 'home' ? <HomePage /> : <StoreLocatorPage />}
      <Footer />

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitchMode={(m) => setAuthMode(m)}
      />
    </div>
  );
}

export default App;
