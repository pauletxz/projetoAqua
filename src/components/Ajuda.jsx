import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f9fafc;
  min-height: 100vh;
  color: #333;
`;

function Ajuda() {
  return (
    <Container>
      <h2 style={{ color: '#4a90e2' }}>Ajuda e Dicas para Economia de Água</h2>
      <ul style={{ color: '#666' }}>
        <li>Verifique vazamentos regularmente.</li>
        <li>Use a água da chuva para regar plantas.</li>
      </ul>
    </Container>
  );
}

export default Ajuda;
