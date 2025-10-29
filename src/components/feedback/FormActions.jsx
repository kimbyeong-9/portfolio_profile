import React from 'react';
import styled from 'styled-components';

export default function FormActions({ onClear, onExit }) {
  return (
    <ButtonGroup>
      <LeftButtonGroup>
        <SubmitButton type="submit">제출</SubmitButton>
        <ClearButton type="button" onClick={onClear}>
          양식 지우기
        </ClearButton>
      </LeftButtonGroup>
      <ExitButton type="button" onClick={onExit}>
        나가기
      </ExitButton>
    </ButtonGroup>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ExitButton = styled.button`
  background: transparent;
  color: #666;
  border: 2px solid #999;
  padding: 0.9rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #666;
    color: #333;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  background: #DDA94B;
  color: #2C1810;
  border: none;
  padding: 0.9rem 2.5rem;
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

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const ClearButton = styled.button`
  background: transparent;
  color: #DDA94B;
  border: 2px solid #DDA94B;
  padding: 0.9rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #DDA94B;
    color: #2C1810;
  }
`;
