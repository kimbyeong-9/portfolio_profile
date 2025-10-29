import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function SuccessModal({ onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalIcon>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
        </ModalIcon>
        <ModalTitle>감사합니다!</ModalTitle>
        <ModalMessage>
          피드백이 성공적으로 제출되었습니다.<br />
          소중한 의견 감사드립니다.
        </ModalMessage>
        <ModalButton onClick={onClose}>
          확인
        </ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
}

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${modalFadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${modalSlideUp} 0.3s ease-out;
  text-align: center;

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const ModalIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #DDA94B 0%, #FFD916 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    width: 32px;
    height: 32px;
    color: #2C1810;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 900;
  color: #2C1810;
  margin: 0 0 1rem 0;
  font-family: 'Shinhwa', sans-serif;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ModalMessage = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 2rem 0;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ModalButton = styled.button`
  background: #DDA94B;
  color: #2C1810;
  border: none;
  padding: 0.9rem 3rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #FFD916;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(221, 169, 75, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;
