import './App.css';
import './style/normalize.css';
import 'boxicons';
import Nav from './components/layout/Nav.js';
import Home from './components/pages/home.js';
import Experience from './components/pages/experience.js';
import Proyect from './components/pages/proyect.js';
import Footer from './components/layout/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/porfolio_2'>
      <div className='divBody manrope'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/proyect" element={<Proyect />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;