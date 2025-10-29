import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function KeyboardBackground() {
  return (
    <ChainBg viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <KeyboardSvg viewBox="0 0 340 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 본체 */}
        <rect x="10" y="20" width="320" height="70" rx="18" fill="#2C1810" fillOpacity="0.3" stroke="#DDA94B" strokeWidth="4"/>
        {/* 첫 번째 줄 키 */}
        <rect x="30" y="38" width="36" height="18" rx="4" fill="#FFD916" fillOpacity="0.8"/>
        <rect x="72" y="38" width="36" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        <rect x="114" y="38" width="36" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        <rect x="156" y="38" width="36" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        <rect x="198" y="38" width="36" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        <rect x="240" y="38" width="36" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        <rect x="282" y="38" width="28" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        {/* 두 번째 줄 키 */}
        <rect x="30" y="62" width="60" height="18" rx="4" fill="#DDA94B" fillOpacity="0.8"/>
        <rect x="94" y="62" width="60" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        <rect x="158" y="62" width="60" height="18" rx="4" fill="#F0E8D8" fillOpacity="0.8"/>
        <rect x="222" y="62" width="60" height="18" rx="4" fill="#C9A56A" fillOpacity="0.8"/>
      </KeyboardSvg>
    </ChainBg>
  );
}

const KeyboardAnim = keyframes`
  0% { transform: translateX(-30px) rotate(-3deg); }
  50% { transform: translateX(30px) rotate(3deg); }
  100% { transform: translateX(-30px) rotate(-3deg); }
`;

const ChainBg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  opacity: 0.28;
`;

const KeyboardSvg = styled.svg`
  position: absolute;
  left: 50%;
  bottom: 8vh;
  width: 340px;
  height: 110px;
  transform: translateX(-50%);
  opacity: 0.22;
  z-index: 0;
  animation: ${KeyboardAnim} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 250px;
    height: 80px;
    bottom: 5vh;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 60px;
    bottom: 3vh;
  }
`;
