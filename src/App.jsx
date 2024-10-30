import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  /* const [count, setCount] = useState(0)*/


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />



      </Routes>
      <Footer />
      <Herosection />

    </BrowserRouter>
  );
}

export default App
