import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active">
        <i className="fas fa-tachometer-alt"></i>
        <span>Monitoramento</span>
      </NavLink>
      <NavLink to="/relatorio" activeClassName="active">
        <i className="fas fa-chart-line"></i>
        <span>Relatório</span>
      </NavLink>
      <NavLink to="/ajuda" activeClassName="active">
        <i className="fas fa-info-circle"></i>
        <span>Ajuda</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
