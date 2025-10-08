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
  font-size: 3.5rem;
  font-weight: 900;
  color: #DDA94B;
  font-family: 'Shinhwa', sans-serif;
  margin-bottom: 4rem;
  text-shadow: 0 2px 16px rgba(120, 80, 60, 0.6);
  opacity: 0;
  animation: ${fadeIn} 0.8s 0.2s forwards;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
  }
`;