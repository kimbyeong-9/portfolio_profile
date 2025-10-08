
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter from './router';

const Footer = styled.footer`
  width: 100%;
  background: #222;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
`;

const Bg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #7b9acc;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 80px;
`;

function App() {
  return (
    <Bg>
      <AppRouter />
      <Footer>
      Copyright 2025. KimByeongho all rights reserved.<br />
      React, Styled Components, Supabase 기반으로 제작된 사이트입니다.
      </Footer>
    </Bg>
  );
}

export default App;
