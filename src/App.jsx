import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Monitoramento from './components/Monitoramento';
import Relatorio from './components/Relatorio';
import Ajuda from './components/Ajuda';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <Link to="/">Monitoramento</Link>
          <Link to="/relatorio">Relatório</Link>
          <Link to="/ajuda">Ajuda</Link>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Monitoramento />} />
            <Route path="/relatorio" element={<Relatorio />} />
            <Route path="/ajuda" element={<Ajuda />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
