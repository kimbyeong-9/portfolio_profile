
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter from './router';
import FeedbackButton from './components/FeedbackButton';

const Bg = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background: #7b9acc;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
`;

function App() {
  const location = useLocation();
  const isFeedbackPage = location.pathname === '/feedback';

  return (
    <Bg>
      <AppRouter />
      {!isFeedbackPage && <FeedbackButton />}
    </Bg>
  );
}

export default App;
