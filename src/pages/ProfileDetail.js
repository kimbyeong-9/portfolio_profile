import React from 'react';
import styled, { keyframes } from 'styled-components';
import profileImage from '../images/KakaoTalk_Photo_2025-10-06-20-23-20.png';
import { careerData } from '../data/careerData';

export default function ProfileDetail() {
  return (
    <DetailSection>
      <LeftColumn>
        <ImagePlaceholder src={profileImage} alt="Profile" />
        <InfoList>
          <InfoItem>
            <span>이름</span>
            <span>김병호</span>
          </InfoItem>
          <InfoItem>
            <span>생년월일</span>
            <span>1999.01.01</span>
          </InfoItem>
          <InfoItem>
            <span>전화번호</span>
            <span>010-1234-5678</span>
          </InfoItem>
          <InfoItem>
            <span>이메일</span>
            <span>byeong9@example.com</span>
          </InfoItem>
        </InfoList>
      </LeftColumn>

      <RightColumn>
        <Section $delay={0.2}>
          <SectionTitle>Education</SectionTitle>
          <ContentBox>
            <ContentText>2017.03.02 ~ 2024.02.06 - 서정대학교 호텔조리학과</ContentText>
          </ContentBox>
        </Section>

        <Section $delay={0.4}>
          <SectionTitle>Career</SectionTitle>
          <ContentBox>
            {careerData.map((career, index) => (
              <CareerItem key={index}>
                <CareerTitle>{career.company}</CareerTitle>
                <CareerPeriod>{career.period}</CareerPeriod>
                <CareerDesc>{career.position}</CareerDesc>
                {career.description && <CareerDesc>{career.description}</CareerDesc>}
              </CareerItem>
            ))}
          </ContentBox>
        </Section>

        <Section $delay={0.6}>
          <SectionTitle>Certification</SectionTitle>
          <ContentBox>
            <ContentText>2016 - 한식조리기능사{'\n'}2021 - 운전면허 1종 보통</ContentText>
          </ContentBox>
        </Section>
      </RightColumn>
    </DetailSection>
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

const DetailSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #9E7A67;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 4rem;
  position: relative;
  box-sizing: border-box;
  padding: 5rem 3rem 8rem 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4rem 2rem 6rem 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const ImagePlaceholder = styled.img`
  width: 400px;
  height: 450px;
  border-radius: 0;
  object-fit: cover;
  object-position: center 10%;
  background: #e0e0e0;
  box-shadow: 0 4px 24px rgba(30, 65, 116, 0.3);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 300px;
    height: 338px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 280px;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 400px;
  max-width: 90vw;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(240, 232, 216, 0.3);
  color: #F0E8D8;
  font-weight: 600;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    color: #DDA94B;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.6rem 0;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 800px;
  width: 100%;
  flex: 1;

  @media (max-width: 1024px) {
    max-width: 90vw;
  }
`;

const Section = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s ${props => props.$delay || 0}s forwards;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 900;
  color: #DDA94B;
  font-family: 'Shinhwa', sans-serif;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(120, 80, 60, 0.4);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentBox = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 4px solid #DDA94B;
`;

const ContentText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #F0E8D8;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const CareerItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(240, 232, 216, 0.2);

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const CareerTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFD916;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CareerPeriod = styled.div`
  font-size: 0.95rem;
  color: #DDA94B;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const CareerDesc = styled.div`
  font-size: 0.95rem;
  color: #F0E8D8;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;