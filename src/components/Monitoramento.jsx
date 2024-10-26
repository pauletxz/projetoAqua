import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 50px; /* Para compensar a navbar fixa */
  background-color: #f0f4f8;
  text-align: center;
  width: 100%; /* Garante que o Container ocupe a largura total da tela */
`;

const WaterTank = styled.div`
  position: relative;
  width: 200px; /* Tamanho fixo para centralizar melhor */
  height: 300px;
  border: 3px solid #4a90e2;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e6f7ff;
  margin-top: 20px;
`;

const WaterLevel = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${props => props.level}%;
  background: #4a90e2;
  overflow: hidden;
  transition: height 0.5s ease;
`;

const WaveAnimation = styled.div`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 30%;
  background: rgba(255, 255, 255, 0.4);
  opacity: 0.5;
  border-radius: 35%;
  animation: wave 4s infinite linear;
  transform: translate3d(0, 0, 0);

  &:nth-child(2) {
    bottom: -15%;
    animation: wave 3.5s infinite linear reverse;
    opacity: 0.6;
  }

  @keyframes wave {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

function Monitoramento() {
  const nivelDeAgua = 100;

  return (
    <Container>
      <h2 style={{ color: '#4a90e2' }}>Monitoramento da Caixa D'água</h2>
      <WaterTank>
        <WaterLevel level={nivelDeAgua}>
          <WaveAnimation />
          <WaveAnimation />
        </WaterLevel>
      </WaterTank>
      <p style={{ color: '#555', marginTop: '20px' }}>Nível atual: {nivelDeAgua}%</p>
    </Container>
  );
}

export default Monitoramento;
