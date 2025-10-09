import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #DDA94B;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(221, 169, 75, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: #FFD916;
    transform: translateY(-4px);
    box-shadow: 0 6px 30px rgba(255, 217, 22, 0.5);
  }

  &:active {
    transform: translateY(-2px);
  }

  svg {
    width: 28px;
    height: 28px;
    color: #2C1810;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    bottom: 20px;
    right: 20px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default function FeedbackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/feedback');
  };

  return (
    <FloatingButton onClick={handleClick} aria-label="피드백 작성">
      {/* 피드백 아이콘 (메시지 + 별) */}
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        <path d="M12 15l-1.5-3H7l2-4.5L7.5 4 12 6.5 16.5 4 15 7.5l2 4.5h-3.5z"/>
      </svg>
    </FloatingButton>
  );
}
