import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import useScrollAnimation from '../hooks/useScrollAnimation';

function AnimatedParagraph({ delay, highlight, children }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <Paragraph ref={ref} $isVisible={isVisible} $delay={delay} $highlight={highlight}>
      {children}
    </Paragraph>
  );
}

function AnimatedButton({ delay, children, ...props }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <ContactButton ref={ref} $isVisible={isVisible} $delay={delay} {...props}>
      {children}
    </ContactButton>
  );
}

export default function Closing() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gkrjawnrkf1@gmail.com');
    alert('이메일 주소가 복사되었습니다!');
  };

  return (
    <Container>
      <ContentWrapper>
        <AnimatedParagraph delay={0.2}>
          여기까지 읽어주셔서 진심으로 감사합니다.
        </AnimatedParagraph>

        <AnimatedParagraph delay={0.5} highlight>
          저는 단순히 기능을 구현하는 개발자가 아닌,<br />
          사용자의 불편함을 발견하고 해결하는 개발자입니다.
        </AnimatedParagraph>

        <AnimatedParagraph delay={0.8}>
          여행을 좋아하는 사람으로서 여행대로 앱을 직접 사용하며 느낀 점들을<br />
          개발자의 시선으로 개선하고 싶습니다.
        </AnimatedParagraph>

        <AnimatedParagraph delay={1.1} highlight>
          Data Labs와 함께<br />
          더 나은 여행 경험을 만들어가고 싶습니다.
        </AnimatedParagraph>

        <AnimatedParagraph delay={1.4}>
          감사합니다.
        </AnimatedParagraph>

        <Signature delay={1.7}>
          김병호 드림
        </Signature>

        <ButtonContainer>
          <AnimatedButton
            as="button"
            delay={2.0}
            onClick={handleEmailClick}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            이메일 보내기
          </AnimatedButton>

          <AnimatedButton
            delay={2.2}
            href="https://github.com/kimbyeong-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </AnimatedButton>

          <AnimatedButton
            delay={2.4}
            href="https://velog.io/@kimbyeong-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.63-.765 1.35-1.148 2.16-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-1.477 2.465-2.138 3.254l-1.035 1.035h6.855L21.43 18H11.1c-.48 0-.878-.143-1.193-.428-.3-.3-.45-.663-.45-1.088 0-.36.105-.765.315-1.215.195-.465.704-1.29 1.523-2.48.827-1.193 1.4-2.046 1.717-2.557.33-.526.494-.99.494-1.418 0-.195-.06-.352-.18-.472-.105-.12-.263-.18-.472-.18-.36 0-.765.225-1.215.675-.435.435-.915 1.092-1.44 1.98-.54.87-1.102 1.943-1.687 3.217l-1.275 2.775h-.6L6.02 8.085H2.43V6.25h4.453z"/>
            </svg>
            Velog
          </AnimatedButton>
        </ButtonContainer>
      </ContentWrapper>

      <Footer>
        Copyright 2025. KimByeongho all rights reserved.<br />
        React, Styled Components, Supabase 기반으로 제작된 사이트입니다.
      </Footer>

      <BackgroundDecoration />

      {showEmailModal && (
        <ModalOverlay onClick={() => setShowEmailModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>이메일 주소</ModalHeader>
            <EmailText>gkrjawnrkf1@gmail.com</EmailText>
            <ModalButtonGroup>
              <ModalButton onClick={handleCopyEmail}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
                복사하기
              </ModalButton>
            </ModalButtonGroup>
            <CloseButton onClick={() => setShowEmailModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 4rem 2rem;
  box-sizing: border-box;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    pointer-events: none;
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(221, 169, 75, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: ${pulse} 4s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding-bottom: 4rem;
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.$highlight ? '1.8rem' : '1.3rem'};
  line-height: 1.8;
  color: ${props => props.$highlight ? '#FFD916' : '#F0E8D8'};
  font-weight: ${props => props.$highlight ? 900 : 500};
  font-family: ${props => props.$highlight ? "'Shinhwa', sans-serif" : 'inherit'};
  margin: 0;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? 0 : '30px'});
  transition: opacity 0.8s ease ${props => props.$delay || 0}s,
              transform 0.8s ease ${props => props.$delay || 0}s;
  text-shadow: ${props => props.$highlight
    ? '0 0 20px rgba(255, 217, 22, 0.3), 0 2px 8px rgba(0, 0, 0, 0.4)'
    : '0 2px 4px rgba(0, 0, 0, 0.3)'};

  ${props => props.$highlight && css`
    animation: ${pulse} 3s ease-in-out infinite;
    background: linear-gradient(
      90deg,
      #FFD916 0%,
      #FFED4E 25%,
      #FFD916 50%,
      #FFED4E 75%,
      #FFD916 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shine} 3s linear infinite, ${pulse} 3s ease-in-out infinite;
  `}

  @media (max-width: 768px) {
    font-size: ${props => props.$highlight ? '1.4rem' : '1.1rem'};
    line-height: 1.7;

    br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: ${props => props.$highlight ? '1.2rem' : '1rem'};
    line-height: 1.6;
  }
`;

const Signature = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #DDA94B;
  font-family: 'Shinhwa', sans-serif;
  margin-top: 1rem;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? 0 : '20px'});
  transition: opacity 0.8s ease ${props => props.delay || 0}s,
              transform 0.8s ease ${props => props.delay || 0}s;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #2C1810;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.9rem 1.8rem;
  background: linear-gradient(135deg, #FFD916 0%, #DDA94B 100%);
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(221, 169, 75, 0.4),
              inset 0 -3px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Shinhwa', sans-serif;
  letter-spacing: 0.02em;
  cursor: pointer;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? 0 : '20px'}) scale(${props => props.$isVisible ? 1 : 0.9});
  transition: opacity 0.6s ease ${props => props.$delay || 0}s,
              transform 0.6s ease ${props => props.$delay || 0}s,
              box-shadow 0.3s ease,
              background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #FFED4E 0%, #F4C542 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
    z-index: -1;
  }

  &:hover {
    color: #2C1810;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 30px rgba(221, 169, 75, 0.6),
                inset 0 -3px 10px rgba(0, 0, 0, 0.15);
    animation: ${float} 2s ease-in-out infinite;

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 5px 15px rgba(221, 169, 75, 0.5),
                inset 0 -3px 10px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 22px;
    height: 22px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75rem 1.4rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  color: rgba(240, 232, 216, 0.6);
  text-align: center;
  font-size: 0.85rem;
  line-height: 1.6;
  z-index: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.75rem;
    bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

const fadeInModal = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeInModal} 0.3s ease;
`;

const ModalContent = styled.div`
  background: linear-gradient(145deg, #9E7A67 0%, #8A6B5A 100%);
  border-radius: 20px;
  padding: 2.5rem;
  min-width: 400px;
  max-width: 90vw;
  box-shadow:
    0 0 0 3px #DDA94B,
    0 20px 60px rgba(0, 0, 0, 0.5);
  animation: ${fadeInModal} 0.3s ease;
  position: relative;

  @media (max-width: 768px) {
    min-width: 320px;
    padding: 2rem;
  }
`;

const ModalHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFD916;
  font-family: 'Shinhwa', sans-serif;
  margin: 0 0 1.5rem 0;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const EmailText = styled.div`
  font-size: 1.1rem;
  color: #F0E8D8;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(221, 169, 75, 0.3);
  font-weight: 600;
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

const ModalButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ModalButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: #2C1810;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #FFD916 0%, #DDA94B 100%);
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(221, 169, 75, 0.4);
  font-family: 'Shinhwa', sans-serif;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(221, 169, 75, 0.6);
    background: linear-gradient(135deg, #FFED4E 0%, #F4C542 100%);
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.8rem 1.6rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #F0E8D8;

  &:hover {
    background: rgba(221, 169, 75, 0.5);
    transform: rotate(90deg);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
