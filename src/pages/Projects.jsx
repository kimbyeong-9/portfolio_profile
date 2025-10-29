import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectCard from '../components/ProjectCard.jsx';
import { projectsData } from '../data/projectsData';
import useScrollAnimation from '../hooks/useScrollAnimation';


export default function Projects() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);

  return (
    <Container>
      <TitleSection>
        <Title ref={titleRef} $isVisible={titleVisible}>Projects</Title>
        {projectsData.length > 0 && (
          <ProjectCard project={projectsData[0]} index={0} showInTitle={true} />
        )}
      </TitleSection>
      {projectsData.slice(1).map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index + 1} />
      ))}
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
  background: transparent;
  position: relative;
`;

const TitleSection = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 2rem 2rem 2rem;
  box-sizing: border-box;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: 900;
  color: transparent;
  font-family: 'Shinhwa', sans-serif;
  margin-bottom: 1.5rem;
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
    margin-bottom: 1.2rem;
    -webkit-text-stroke: 3px #2C1810;
    text-stroke: 3px #2C1810;
    filter: drop-shadow(4px 4px 0px rgba(221, 169, 75, 0.5));
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 1rem;
    -webkit-text-stroke: 2.5px #2C1810;
    text-stroke: 2.5px #2C1810;
    filter: drop-shadow(3px 3px 0px rgba(221, 169, 75, 0.4));
  }
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;