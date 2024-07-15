import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AirQualityProvider } from './context/AirQualityProvider';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Tentang = lazy(() => import('./pages/Tentang'));
const Tips = lazy(() => import('./pages/Tips'));
const Kontak = lazy(() => import('./pages/Kontak'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <AirQualityProvider>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </AirQualityProvider>
  );
}

export default App;
