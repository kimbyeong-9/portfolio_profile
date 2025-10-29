import React from 'react';
import styled from 'styled-components';

export default function EmailInfoSection() {
  return (
    <EmailSection>
      <EmailText>gkrjawnrkf1@gmail.com</EmailText>
      <EmailBadge>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        비공개
      </EmailBadge>
    </EmailSection>
  );
}

const EmailSection = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
`;

const EmailText = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 0.5rem 0;
`;

const EmailBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #333;
`;
