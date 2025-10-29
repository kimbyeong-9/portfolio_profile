import React from 'react';
import styled from 'styled-components';

export default function FormHeader() {
  return (
    <Header>
      <Title>저의 포트폴리오를 찾아주셔서 감사합니다.</Title>
      <Description>
        안녕하세요. 저 포트폴리오를 보고 관심가져 주셔서 감사합니다!
      </Description>
      <Description>
        포트폴리오를 보시고 궁금하신 점이나 피드백을 작성해 주세요 :)
      </Description>
    </Header>
  );
}

const Header = styled.div`
  background: linear-gradient(135deg, #9E7A67 0%, #7A5E52 100%);
  padding: 2.5rem 2rem;
  border-top: 8px solid #DDA94B;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 1rem 0;
  font-family: 'Shinhwa', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #F0E8D8;
  line-height: 1.6;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
