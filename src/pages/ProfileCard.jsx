import React from 'react';
import styled from 'styled-components';
import KeyboardBackground from '../components/profile/KeyboardBackground';
import IntroContent from '../components/profile/IntroContent';

export default function ProfileCard() {
  return (
    <>
      <KeyboardBackground />
      <Card>
        <InfoRow>
          <IntroContent />
        </InfoRow>
      </Card>
    </>
  );
}

const Card = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  position: relative;
  z-index: 1;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;
