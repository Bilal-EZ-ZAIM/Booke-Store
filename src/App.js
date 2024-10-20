import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componts/footer/Footer';
import Header from './componts/headr/Header';
import Home from './pages/Home';
import Athor from './pages/athor/Athor';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Registre from './pages/registre/Registre';
import Datalis from './pages/datalise/Datalis';
import { books } from './data/books';
import Cart from './pages/cart/Cart';
import {authors} from './data/authors'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/athor' element={<Athor  authors={authors}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registre' element={<Registre />} />
          <Route path='/datalise/:userid' element={<Datalis books={books}/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </Router>



    </div>
  );
}

export default App;
