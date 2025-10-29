import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import feedbackIcon from '../images/feedback_7563314.png';

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

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    bottom: 20px;
    right: 20px;

    img {
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
      <img src={feedbackIcon} alt="피드백" />
    </FloatingButton>
  );
}
