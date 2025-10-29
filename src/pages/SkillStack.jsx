import React from 'react';
import styled, { keyframes } from 'styled-components';
import { skillsData } from '../data/skillsData';
import useScrollAnimation from '../hooks/useScrollAnimation';

function AnimatedSkillItem({ index, children }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <SkillItem ref={ref} $isVisible={isVisible} $index={index}>
      {children}
    </SkillItem>
  );
}

export default function SkillStack() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);

  const parseBoldText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <Container>
      <Title ref={titleRef} $isVisible={titleVisible}>Skills</Title>
      <SkillList>
        {skillsData.map((skill, index) => (
          <AnimatedSkillItem key={index} index={index}>
            - {parseBoldText(skill)}
          </AnimatedSkillItem>
        ))}
      </SkillList>
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
  padding: 6rem 2rem 4rem 2rem;
  box-sizing: border-box;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: 900;
  color: transparent;
  font-family: 'Shinhwa', sans-serif;
  margin-bottom: 2rem;
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
    margin-bottom: 1.5rem;
    -webkit-text-stroke: 3px #2C1810;
    text-stroke: 3px #2C1810;
    filter: drop-shadow(4px 4px 0px rgba(221, 169, 75, 0.5));
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 1.2rem;
    -webkit-text-stroke: 2.5px #2C1810;
    text-stroke: 2.5px #2C1810;
    filter: drop-shadow(3px 3px 0px rgba(221, 169, 75, 0.4));
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.7rem;
    max-width: 90%;
  }
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #FFFDE4;
  font-weight: 500;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? 0 : '20px'});
  transition: opacity 0.6s ease ${props => 0.3 + props.$index * 0.1}s,
              transform 0.6s ease ${props => 0.3 + props.$index * 0.1}s;
  padding: 0.3rem 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  strong {
    color: #FFD916;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.2rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0.15rem 0;
  }
`;