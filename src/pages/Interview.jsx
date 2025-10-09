import React from 'react';
import styled, { keyframes } from 'styled-components';
import { qnaData } from '../data/qnaData';


export default function Interview() {
  return (
    <Container>
      <Title>Interview</Title>
      <QnAList>
        {qnaData.map((item, index) => (
          <QnAItem key={index} $index={index}>
            <Question>{item.question}</Question>
            <Answer>{item.answer}</Answer>
          </QnAItem>
        ))}
      </QnAList>
    </Container>
  );
}


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #9E7A67;
  padding: 4rem 2rem;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: 900;
  color: transparent;
  font-family: 'Shinhwa', sans-serif;
  margin-bottom: 5rem;
  -webkit-text-stroke: 4px #2C1810;
  text-stroke: 4px #2C1810;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeIn} 0.8s 0.2s forwards;
  filter: drop-shadow(5px 5px 0px rgba(221, 169, 75, 0.5))
          drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.3));
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-4px) scale(1.03);
    filter: drop-shadow(7px 7px 0px rgba(221, 169, 75, 0.7))
            drop-shadow(4px 4px 15px rgba(0, 0, 0, 0.4));
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 3.5rem;
    -webkit-text-stroke: 3px #2C1810;
    text-stroke: 3px #2C1810;
    filter: drop-shadow(4px 4px 0px rgba(221, 169, 75, 0.5));
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 2.5rem;
    -webkit-text-stroke: 2.5px #2C1810;
    text-stroke: 2.5px #2C1810;
    filter: drop-shadow(3px 3px 0px rgba(221, 169, 75, 0.4));
  }
`;

const QnAList = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 2rem;
    max-width: 90%;
  }
`;

const QnAItem = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s ${props => 0.4 + props.$index * 0.2}s forwards;
`;

const Question = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FFD916;
  font-family: 'Shinhwa', sans-serif;
  margin-bottom: 1rem;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
`;

const Answer = styled.div`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #F0E8D8;
  font-weight: 500;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  border-left: 4px solid #DDA94B;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 1rem;
    line-height: 1.6;
  }
`;