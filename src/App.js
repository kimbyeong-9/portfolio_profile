
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter from './router';

const Bg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #7b9acc;
  position: relative;
  box-sizing: border-box;
`;

function App() {
  return (
    <Bg>
      <AppRouter />
    </Bg>
  );
}

export default App;
