import React from 'react';
import styled from 'styled-components';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.$showInTitle ? '2rem' : '3rem'};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? 0 : '20px'});
  transition: opacity 0.6s ease ${props => 0.3 + props.$index * 0.1}s,
              transform 0.6s ease ${props => 0.3 + props.$index * 0.1}s;
  width: 100%;
  height: ${props => props.$showInTitle ? 'auto' : '100vh'};
  padding: ${props => props.$showInTitle ? '0 2rem' : '8rem 2rem 4rem 2rem'};
  box-sizing: border-box;
  scroll-snap-align: ${props => props.$showInTitle ? 'none' : 'start'};
  scroll-snap-stop: ${props => props.$showInTitle ? 'normal' : 'always'};

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 968px) {
    flex-direction: column !important;
    gap: ${props => props.$showInTitle ? '1.5rem' : '2rem'};
    padding: ${props => props.$showInTitle ? '0 2rem' : '6rem 2rem 4rem 2rem'};
  }
`;

// 노트북 전체 컨테이너
const LaptopContainer = styled.div`
  position: relative;
  flex: 0 0 40%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 968px) {
    flex: 1;
    width: 100%;
    max-width: 100%;
  }
`;

// 노트북 스크린 부분
const LaptopScreen = styled.div`
  background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%);
  border-radius: 12px 12px 4px 4px;
  padding: 12px;
  box-shadow:
    0 0 0 2px #0a0a0a,
    0 8px 30px rgba(0, 0, 0, 0.4);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, rgba(100, 100, 100, 0.8) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

// 실제 화면 영역
const ScreenContent = styled.div`
  background: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  background: #d0d0d0;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 968px) {
    height: 200px;
  }
`;

// 노트북 베이스 (키보드 부분)
const LaptopBase = styled.div`
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  border-radius: 0 0 8px 8px;
  height: 16px;
  position: relative;
  box-shadow:
    0 2px 0 #0a0a0a,
    0 8px 20px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 4px;
    background: linear-gradient(90deg, transparent 0%, #1a1a1a 50%, transparent 100%);
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 5%;
    right: 5%;
    height: 4px;
    background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
    filter: blur(3px);
  }
`;

// 오른쪽 정보 영역
const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 968px) {
    width: 100%;
    gap: 1.5rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 900;
  color: #2C1810;
  font-family: 'Shinhwa', sans-serif;
  margin: 0;

  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
`;

const ProjectBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  background: ${props => props.$isTeam
    ? 'linear-gradient(135deg, #FFD916 0%, #DDA94B 100%)'
    : 'linear-gradient(135deg, #9E7A67 0%, #7A6152 100%)'};
  color: ${props => props.$isTeam ? '#2C1810' : '#F0E8D8'};
  box-shadow: 0 2px 8px ${props => props.$isTeam
    ? 'rgba(221, 169, 75, 0.3)'
    : 'rgba(0, 0, 0, 0.2)'};
  border: 2px solid ${props => props.$isTeam ? '#DDA94B' : 'rgba(240, 232, 216, 0.3)'};

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 968px) {
    font-size: 0.75rem;
    padding: 0.35rem 0.8rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const ProjectPeriod = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 0.8rem 0;
  font-weight: 500;

  @media (max-width: 968px) {
    font-size: 0.95rem;
  }
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2C1810;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #DDA94B;
  }

  svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 968px) {
    font-size: 0.95rem;
  }
`;

const DeployLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #2C1810;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #FFD916 0%, #DDA94B 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(221, 169, 75, 0.3),
              inset 0 -2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Shinhwa', sans-serif;
  letter-spacing: 0.02em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #FFED4E 0%, #F4C542 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
    z-index: -1;
  }

  &:hover {
    color: #2C1810;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(221, 169, 75, 0.5),
                inset 0 -2px 8px rgba(0, 0, 0, 0.15);

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(221, 169, 75, 0.4),
                inset 0 -2px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 968px) {
    font-size: 0.95rem;
    padding: 0.65rem 1.2rem;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2C1810;
  margin: 0 0 0.6rem 0;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid #2C1810;

  @media (max-width: 968px) {
    font-size: 1.1rem;
  }
`;

const WhatIDidList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 0.4rem;
    padding-left: 1.2rem;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #DDA94B;
      font-weight: bold;
    }
  }

  @media (max-width: 968px) {
    li {
      font-size: 0.9rem;
    }
  }
`;

const StackList = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;

  @media (max-width: 968px) {
    font-size: 0.95rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;

  @media (max-width: 968px) {
    justify-content: flex-start;
  }
`;

export default function ProjectCard({ project, index, showInTitle }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <Card ref={ref} $isVisible={isVisible} $index={index} $showInTitle={showInTitle}>
      {/* 왼쪽: 노트북 이미지 */}
      <LaptopContainer>
        <div>
          <LaptopScreen>
            <ScreenContent>
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
                    background: 'linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%)',
                    color: '#888',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    이미지 준비 중
                  </div>
                )}
              </ImageWrapper>
            </ScreenContent>
          </LaptopScreen>
          <LaptopBase />
        </div>
        <ButtonContainer>
          {project.deployUrl && (
            <DeployLink href={project.deployUrl} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              프로젝트 살펴보기
            </DeployLink>
          )}
          {project.github && (
            <GithubLink href={project.github} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Github
            </GithubLink>
          )}
        </ButtonContainer>
      </LaptopContainer>

      {/* 오른쪽: 프로젝트 정보 */}
      <InfoSection>
        <div>
          <TitleWrapper>
            <ProjectTitle>{project.name}</ProjectTitle>
            {project.isTeamProject ? (
              <ProjectBadge $isTeam={true}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                협업 {project.teamSize && `(${project.teamSize})`}
              </ProjectBadge>
            ) : (
              <ProjectBadge $isTeam={false}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                개인
              </ProjectBadge>
            )}
          </TitleWrapper>
          {project.period && <ProjectPeriod>{project.period}</ProjectPeriod>}
        </div>

        {project.teamProject && (
          <div>
            <SectionTitle>팀 프로젝트</SectionTitle>
            <WhatIDidList>
              <li>{project.teamProject}</li>
            </WhatIDidList>
          </div>
        )}

        {project.whatIDid && project.whatIDid.length > 0 && (
          <div>
            <SectionTitle>주요 역할</SectionTitle>
            <WhatIDidList>
              {project.whatIDid.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </WhatIDidList>
          </div>
        )}

        {project.stack && (
          <div>
            <SectionTitle>Stack</SectionTitle>
            <StackList>{project.stack}</StackList>
          </div>
        )}
      </InfoSection>
    </Card>
  );
}
