import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f9fafc;
  min-height: 100vh;
  color: #333;
`;

function Relatorio() {
  return (
    <Container>
      <h2 style={{ color: '#4a90e2' }}>Relatório de Consumo de Água</h2>
      <p>Estimativas de consumo de água aparecerão aqui.</p>
    </Container>
  );
}

export default Relatorio;
