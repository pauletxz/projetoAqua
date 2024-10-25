import React from "react";

function WaterTank({ porcentagem, calcularLitros }) {
  return (
    <div>
      <div className="caixa-agua-container">
        <div className="caixa-agua">
          <div className="agua" style={{ height: `${porcentagem}%` }}>
            <div className="onda onda1"></div>
            <div className="onda onda2"></div>
          </div>
        </div>
        <div className="base"></div>
      </div>
      <p>Nível da água: {porcentagem}%</p>
      <p>Estimativa de litros: {calcularLitros()} L</p>
    </div>
  );
}

export default WaterTank;
