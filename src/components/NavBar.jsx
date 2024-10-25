import React from "react";

function NavBar({ setView }) {
  return (
    <nav>
      <button onClick={() => setView('monitoramento')}>Monitoramento</button>
      <button onClick={() => setView('relatorio')}>Relatório</button>
      <button onClick={() => setView('ajuda')}>Ajuda</button>
    </nav>
  );
}

export default NavBar;
