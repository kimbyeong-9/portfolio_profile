
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 고퀄리티 블록체인+네온+입체+입자+연결망 SVG 데코레이션
const ChainBg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  opacity: 0.28;
`;

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

const frontEndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(1.5);
  }
  60% {
    opacity: 0;
    transform: translateY(40px) scale(1.5);
  }
  80% {
    opacity: 0.7;
    transform: translateY(0) scale(1.1);
  }
  100% {
    opacity: 0.18;
    transform: translateY(0) scale(1.1);
  }
`;

const Card = styled.section`
  width: 100vw;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  position: relative;
  z-index: 1;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  width: 100vw;
  height: 60vh;
  z-index: 2;
`;


const IntroWrap = styled.div`
  position: relative;
  font-size: 3.2rem;
  color: #b8bafd;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.01em;
  opacity: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 2;
`;

const IntroText = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${introZoom} 1.5s 0.1s cubic-bezier(0.7,0.2,0.2,1) forwards;
`;

const FrontEndText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  font-size: 5.5rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.08em;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  text-shadow: 0 4px 32px #7f53ac99;
  animation: ${frontEndFade} 2.2s 0.1s cubic-bezier(0.7,0.2,0.2,1) forwards;
  z-index: 1;
`;
const Name = styled.span`
  display: inline-block;
  color: #ffe066;
  font-weight: 900;
  font-size: 2.8rem;
  margin-left: 0.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.7s 1.2s forwards;
  transform: translateY(-80px);
  animation-name: ${fadeInUp};
  text-shadow: 0 2px 16px #7f53ac99;
`;
const Age = styled.div`
  font-size: 2rem;
  color: #aee9f7;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeInUp} 0.7s 0.9s forwards;
  transform: translateY(80px);
  animation-name: ${fadeInUp};
`;
const Mbti = styled.div`
  font-size: 2rem;
  color: #b388ff;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeInUp} 0.7s 1.3s forwards;
  transform: translateX(120px);
  animation-name: ${fadeInUp};
`;
const Email = styled.div`
  font-size: 2rem;
  color: #fffde4;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeInUp} 0.7s 1.7s forwards;
  transform: translateY(120px);
  animation-name: ${fadeInUp};
`;

export default function ProfileCard() {
  // 사슬 SVG는 고정, 정보는 순차 애니메이션
  return (
    <>
      <ChainBg viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 네온 육각형 노드들 */}
        <g filter="url(#neon1)">
          <polygon points="200,120 220,110 240,120 240,140 220,150 200,140" fill="#FFD916" stroke="#fff" strokeWidth="6" />
        </g>
        <g filter="url(#neon2)">
          <polygon points="600,200 620,190 640,200 640,220 620,230 600,220" fill="#61dafb" stroke="#fff" strokeWidth="6" />
        </g>
        <g filter="url(#neon3)">
          <polygon points="1000,120 1020,110 1040,120 1040,140 1020,150 1000,140" fill="#b388ff" stroke="#fff" strokeWidth="6" />
        </g>
        {/* 입체감 있는 블록 */}
        <rect x="350" y="400" width="120" height="40" rx="16" fill="#fff" fillOpacity="0.08" stroke="#FFD916" strokeWidth="3" />
        <rect x="800" y="480" width="160" height="48" rx="20" fill="#fff" fillOpacity="0.10" stroke="#61dafb" strokeWidth="3" />
        {/* 네트워크 연결망 (추상적 선) */}
        <polyline points="220,110 620,190 1020,110" stroke="#fff" strokeWidth="8" strokeDasharray="32 18" opacity="0.3" />
        <polyline points="240,140 640,220 1040,140" stroke="#b388ff" strokeWidth="5" strokeDasharray="18 12" opacity="0.18" />
        <polyline points="220,150 600,220 1000,140" stroke="#61dafb" strokeWidth="4" strokeDasharray="10 8" opacity="0.13" />
        {/* 입자(Particle) 효과 */}
        <circle cx="320" cy="80" r="8" fill="#fff" fillOpacity="0.18" />
        <circle cx="700" cy="60" r="12" fill="#FFD916" fillOpacity="0.13" />
        <circle cx="1200" cy="180" r="10" fill="#61dafb" fillOpacity="0.15" />
        <circle cx="900" cy="600" r="16" fill="#b388ff" fillOpacity="0.12" />
        <circle cx="400" cy="650" r="14" fill="#fff" fillOpacity="0.10" />
        {/* 네온 필터 */}
        <defs>
          <filter id="neon1" x="170" y="90" width="100" height="100" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#FFD916" flood-opacity="0.7"/>
          </filter>
          <filter id="neon2" x="570" y="170" width="100" height="100" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#61dafb" flood-opacity="0.7"/>
          </filter>
          <filter id="neon3" x="970" y="90" width="100" height="100" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#b388ff" flood-opacity="0.7"/>
          </filter>
        </defs>
      </ChainBg>
      <Card>
        <InfoRow>
          <IntroWrap>
            <FrontEndText>FRONT-END</FrontEndText>
            <IntroText>
              계획적으로 성장하는 프론트엔드 개발자
              <Name>김병호</Name>
              입니다
            </IntroText>
          </IntroWrap>
          <Age>1998.09.28</Age>
          <Mbti>ESTJ (계획적)</Mbti>
          <Email>gkrjawnrkf1@gmail.com</Email>
        </InfoRow>
      </Card>
    </>
  );
}
