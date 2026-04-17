import ExpandingSlider from './ExpandingSlider';
import GemsValue from './GemsValue';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss';
import Gallery from './Gallery';
import Footer from './Footer';
import Form from './Form';
import ToTop from './ToTop';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <BrowserRouter basename='/galleryCrystall'>
      <Routes>
        <Route
          path='/'
          element={
            <div className='App'>
              <header>
                <Navigation />
              </header>
              <main>
                <ExpandingSlider />
                <GemsValue />
                <Gallery />
                <Form />
              </main>
              <footer>
                <Footer />
              </footer>
              <ToTop />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
