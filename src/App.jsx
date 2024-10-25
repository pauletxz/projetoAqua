import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import WaterTank from "./components/WaterTank";
import Relatorio from "./components/Relatorio";
import Ajuda from "./components/Ajuda";
import "./App.css";

function App() {
  const [porcentagem, setPorcentagem] = useState(0);
  const [view, setView] = useState('monitoramento'); // Para alternar entre as abas

  const alturaCaixa = 2; 
  const raioCaixa = 0.7; 

  const calcularLitros = () => {
    const volumeTotal = Math.PI * Math.pow(raioCaixa, 2) * alturaCaixa; 
    return (100 * (100 / 100)).toFixed(2);
  };
  const calularPorcentagem = () => {
    const alturaAtual = 50; // altura atual da água
    const alturaTotal = 200; // altura total da caixa
    const porcentagem = (alturaAtual/ alturaTotal) * 100;
    setPorcentagem(data.porcentagem)
    return data.porcentagem
  }
  //useEffect(() => {
    //const fetchDataFromESP32 = async () => {
     //try {
        //const response = await fetch("http://seu-endereco-esp32/porcentagem");
        //const data = await response.json();
        //setPorcentagem(data.porcentagem);
      //} catch (error) {
        //console.error("Erro ao receber dados do ESP32:", error);
      //}
    //};

    //const interval = setInterval(fetchDataFromESP32, 5000);
    //return () => clearInterval(interval);
  //}, []);

  const renderView = () => {
    switch (view) {
      case 'monitoramento':
        return <WaterTank porcentagem={calularPorcentagem} calcularLitros={calcularLitros} />;
      case 'relatorio':
        return <Relatorio />;
      case 'ajuda':
        return <Ajuda />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <NavBar setView={setView} />
      {renderView()}
    </div>
  );
}

export default App;
