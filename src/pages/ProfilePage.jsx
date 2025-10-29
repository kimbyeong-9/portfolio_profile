import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard.jsx';
import ProfileDetail from './ProfileDetail.jsx';
import SkillStack from './SkillStack.jsx';
import QnA from './Interview.jsx';
import Projects from './Projects.jsx';

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const IntroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #9E7A67;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const ContentWrapper = styled.div`
  width: 100%;
  background: #9E7A67;
  position: relative;
`;

const HeaderNav = styled.nav`
  position: fixed;
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

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 5;
  animation: fadeInUp 1s 2s forwards;
  opacity: 0;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 768px) {
    bottom: 30px;
  }
`;

const ScrollText = styled.div`
  font-size: 1rem;
  color: #F0E8D8;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ScrollArrow = styled.div`
  font-size: 2rem;
  color: #DDA94B;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const FooterSection = styled.section`
  width: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9E7A67;
  scroll-snap-align: end;
`;

const Footer = styled.footer`
  width: 100%;
  color: #F0E8D8;
  text-align: center;
  padding: 30px 20px;
  font-size: 0.9rem;
  line-height: 1.6;
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

      <IntroSection>
        <ProfileCard />
        <ScrollIndicator>
          <ScrollText>Scroll Down</ScrollText>
          <ScrollArrow>↓</ScrollArrow>
        </ScrollIndicator>
      </IntroSection>

      <ContentWrapper>
        <ProfileDetail />
        <SkillStack />
        <QnA />
        <Projects />
        <FooterSection>
          <Footer>
            Copyright 2025. KimByeongho all rights reserved.<br />
            React, Styled Components, Supabase 기반으로 제작된 사이트입니다.
          </Footer>
        </FooterSection>
      </ContentWrapper>
    </PageContainer>
  );
}
