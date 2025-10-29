import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function IntroContent() {
  const jobTitle = ['프','론','트','엔','드',' ','개','발','자'];

  return (
    <IntroWrap>
      <FrontEndText>FRONT-END</FrontEndText>
      <IntroText>
        <HighlightText>여행</HighlightText>대로 미래를 <HighlightText>탄탄</HighlightText>대로
        <br />
        {jobTitle.map((char, i) => (
          <SmokeText key={i} $delay={0.15 * i}>{char}</SmokeText>
        ))}
        <br />
        <Name>김병호<BasicText>입니다</BasicText></Name>
      </IntroText>
    </IntroWrap>
  );
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const introZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  30% {
    opacity: 1;
    transform: scale(1.25);
  }
  60% {
    opacity: 1;
    transform: scale(1.25);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const frontEndSmooth = keyframes`
  0% {
    opacity: 0;
    filter: blur(18px) brightness(1.3);
    transform: translateY(40px) scale(1.5);
  }
  40% {
    opacity: 0.7;
    filter: blur(6px) brightness(1.1);
    transform: translateY(10px) scale(1.15);
  }
  70% {
    opacity: 0.5;
    filter: blur(2px) brightness(1);
    transform: translateY(-4px) scale(1.08);
  }
  100% {
    opacity: 0.18;
    filter: blur(0.2px) brightness(1);
    transform: translateY(-12px) scale(1.1);
  }
`;

const smokeLeft = keyframes`
  0% {
    opacity: 0;
    filter: blur(18px) brightness(1.3);
    transform: translateY(40px) scale(1.5) skewX(-18deg);
  }
  40% {
    opacity: 0.7;
    filter: blur(6px) brightness(1.1);
    transform: translateY(10px) scale(1.15) skewX(-8deg);
  }
  70% {
    opacity: 0.5;
    filter: blur(2px) brightness(1);
    transform: translateY(-4px) scale(1.08) skewX(-2deg);
  }
  100% {
    opacity: 1;
    filter: blur(0.2px) brightness(1);
    transform: translateY(0) scale(1.1) skewX(0deg);
  }
`;

const IntroWrap = styled.div`
  position: relative;
  font-size: 6rem;
  color: #F0E8D8;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.01em;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 2;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    gap: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const IntroText = styled.span`
  display: inline-block;
  opacity: 0;
  font-size: 5rem;
  font-weight: 900;
  font-family: 'Shinhwa', sans-serif;
  color: #F0E8D8;
  animation: ${introZoom} 1.5s 0.1s cubic-bezier(0.7,0.2,0.2,1) forwards;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const FrontEndText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  font-size: 5.5rem;
  font-weight: 900;
  color: #DDA94B;
  letter-spacing: 0.08em;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 4px 32px rgba(120, 80, 60, 0.6);
  animation: ${frontEndSmooth} 2.2s 0.1s cubic-bezier(0.77,0,0.175,1) forwards;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const SmokeText = styled.span`
  display: inline-block;
  font-size: 3.5rem;
  font-weight: 900;
  font-family: 'Shinhwa', sans-serif;
  color: #F0E8D8;
  letter-spacing: 0.04em;
  opacity: 0;
  text-shadow: 0 2px 16px rgba(120, 80, 60, 0.6);
  animation: ${smokeLeft} 1.6s cubic-bezier(0.77,0,0.175,1) forwards;
  animation-delay: ${props => props.$delay || 0}s;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Name = styled.span`
  display: inline-block;
  color: #484740;
  font-weight: 900;
  font-size: 5rem;
  font-family: 'Shinhwa', sans-serif;
  margin-left: 0.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.7s 1.2s forwards;
  transform: translateY(-80px);
  animation-name: ${fadeInUp};

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const HighlightText = styled.span`
  color: #484740;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
`;

const BasicText = styled.span`
  color: #F0E8D8;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
`;
