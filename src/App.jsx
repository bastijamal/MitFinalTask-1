import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Companentler buraya gelecek
import Navbar from './companents/Navbar'
import Header from './companents/Header'
import Section from './companents/Section'
import Swiper from './companents/Swiper'
import Armani from './companents/Armani'
import Dior from './companents/Dior'
import Chanel from './companents/Chanel'
import Footer from './companents/Footer'
import Customers from './companents/Customers'
import Cards from './companents/Cards'
import NotFound from './companents/NotFound'
import Mail from './companents/Mail'

// Marshrut uchun
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />


          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Customers />
                  <Section />
                  <Cards />
                  <Swiper />
                  <Mail/>
                  <Armani />
                  <Dior />
                  <Chanel />
                </>
              }
            />
            <Route path="/header" element={<Header />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/section" element={<Section />} />
            <Route path="/swiper" element={<Swiper />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;



