import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard.jsx';
import ProfileDetail from './ProfileDetail.jsx';
import SkillStack from './SkillStack.jsx';
import QnA from './Interview.jsx';
import Projects from './Projects.jsx';

const PageContainer = styled.div`
  position: relative;
`;

const HeaderNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 0.8rem;
  }
`;

const NavButton = styled.a`
  background: transparent;
  color: #F0E8D8;
  padding: 0.5rem 0;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #DDA94B;
    transition: width 0.4s ease;
  }

  &:hover {
    color: #DDA94B;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function ProfilePage() {
  return (
    <PageContainer>
      <HeaderNav>
        <NavButton
          href="https://github.com/kimbyeong-9"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </NavButton>
        <NavButton
          href="https://velog.io/@kimbyeong-9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Velog
        </NavButton>
      </HeaderNav>
      <ProfileCard />
      <ProfileDetail />
      <SkillStack />
      <QnA />
      <Projects />
    </PageContainer>
  );
}
