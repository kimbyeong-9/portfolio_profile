import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectCard from '../components/ProjectCard.jsx';
import { projectsData } from '../data/projectsData';


export default function Projects() {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </ProjectGrid>
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
  padding: 5rem 2rem 6rem 2rem;
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