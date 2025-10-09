
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter from './router';
import FeedbackButton from './components/FeedbackButton';

const Footer = styled.footer`
  width: 100%;
  background: #9E7A67;
  color: #F0E8D8;
  text-align: center;
  padding: 30px 20px;
  position: relative;
  z-index: 10;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Bg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #7b9acc;
  position: relative;
  box-sizing: border-box;
`;

function App() {
  const location = useLocation();
  const isFeedbackPage = location.pathname === '/feedback';

  return (
    <Bg>
      <AppRouter />
      {!isFeedbackPage && <Footer>
        Copyright 2025. KimByeongho all rights reserved.<br />
        React, Styled Components, Supabase 기반으로 제작된 사이트입니다.
      </Footer>}
      {!isFeedbackPage && <FeedbackButton />}
    </Bg>
  );
}

export default App;
