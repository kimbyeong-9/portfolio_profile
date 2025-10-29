import React from 'react';
import styled from 'styled-components';

export default function TextInputQuestion({ label, helpText, value, onChange, required = false }) {
  return (
    <Question>
      <QuestionLabel>
        {label} {required && <span>*</span>}
      </QuestionLabel>
      {helpText && (
        <HelpText dangerouslySetInnerHTML={{ __html: helpText }} />
      )}
      <TextArea
        value={value}
        onChange={onChange}
        placeholder="내 답변"
      />
    </Question>
  );
}

const Question = styled.div`
  margin-bottom: 2.5rem;
`;

const QuestionLabel = styled.label`
  display: block;
  font-size: 1.05rem;
  font-weight: 600;
  color: #2C1810;
  margin-bottom: 1rem;

  span {
    color: #e74c3c;
    margin-left: 0.25rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #DDA94B;
    box-shadow: 0 0 0 3px rgba(221, 169, 75, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const HelpText = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0.5rem 0 0 0;
  line-height: 1.5;
`;
