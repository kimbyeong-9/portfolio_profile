
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter from './router';

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  background: #222;
  padding: 16px;
`;

const StyledLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

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

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative', paddingBottom: '80px', boxSizing: 'border-box' }}>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Nav>
      <main style={{ flex: 1 }}>
        <AppRouter />
      </main>
      <Footer>
        © 2025. 포트폴리오 사이트. All rights reserved.
      </Footer>
    </div>
  );
}

export default App;
