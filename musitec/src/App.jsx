import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
// Importa otras páginas que quieras incluir en la navegación
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import CareerPage from './pages/CareerPage/CareerPage'
import CoursePage from './pages/CoursePage/CoursePage'

function App() {
  return (
    <Router>
      <div className="App">
       
        <Header />
        <h1>jojolete2</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage/>} />
          <Route path="/course" element={<CoursePage/>} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
