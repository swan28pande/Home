// App.js
import  { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";import Projects from './components/Projects.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
    <Nav darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

    <Routes>
    <Route path="/" element={<Navigate replace to="/Home" />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}
