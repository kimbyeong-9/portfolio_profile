import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Card = styled.div`
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.6s ${props => 0.3 + props.$index * 0.1}s forwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  background: #d0d0d0;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CardContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectName = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #FFD916;
  font-family: 'Shinhwa', sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #F0E8D8;
  margin: 0;
  min-height: 48px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(221, 169, 75, 0.3);
  color: #DDA94B;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(221, 169, 75, 0.5);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.35rem 0.7rem;
  }
`;

const curtainDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${Card}:hover & {
    animation: ${curtainDown} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

const DetailButton = styled.button`
  background: #DDA94B;
  color: #2C1810;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(221, 169, 75, 0.4);

  &:hover {
    background: #FFD916;
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(255, 217, 22, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`;

export default function ProjectCard({ project, index }) {
  return (
    <Card $index={index}>
      <ImageWrapper>
        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #9E7A67 0%, #7A5E52 100%)',
            color: '#F0E8D8',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            이미지 준비 중
          </div>
        )}
      </ImageWrapper>
      <CardContent>
        <ProjectName>{project.name}</ProjectName>
        <ProjectDescription>{project.description}</ProjectDescription>
        <TagContainer>
          {project.tags.map((tag, tagIndex) => (
            <Tag key={tagIndex}>{tag}</Tag>
          ))}
        </TagContainer>
      </CardContent>
      <Overlay>
        <DetailButton>자세히 보기</DetailButton>
      </Overlay>
    </Card>
  );
}
