import React from 'react';
import styled, { keyframes } from 'styled-components';
import { qnaData } from '../data/qnaData';
import useScrollAnimation from '../hooks/useScrollAnimation';

function AnimatedQnAItem({ index, children }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <QnAItem ref={ref} $isVisible={isVisible} $index={index}>
      {children}
    </QnAItem>
  );
}

export default function Interview() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);

  return (
    <Container>
      <Title ref={titleRef} $isVisible={titleVisible}>Interview</Title>
      <QnAList>
        {qnaData.map((item, index) => (
          <AnimatedQnAItem key={index} index={index}>
            <Question>{item.question}</Question>
            <Answer>{item.answer}</Answer>
          </AnimatedQnAItem>
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
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  padding: 8rem 2rem 4rem 2rem;
  box-sizing: border-box;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: 900;
  color: transparent;
  font-family: 'Shinhwa', sans-serif;
  margin-bottom: 3rem;
  margin-top: 0;
  -webkit-text-stroke: 4px #2C1810;
  text-stroke: 4px #2C1810;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? 0 : '20px'});
  transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
  filter: drop-shadow(5px 5px 0px rgba(221, 169, 75, 0.5))
          drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    -webkit-text-stroke: 3px #2C1810;
    text-stroke: 3px #2C1810;
    filter: drop-shadow(4px 4px 0px rgba(221, 169, 75, 0.5));
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 2rem;
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
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? 0 : '20px'});
  transition: opacity 0.6s ease ${props => 0.4 + props.$index * 0.1}s,
              transform 0.6s ease ${props => 0.4 + props.$index * 0.1}s;
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