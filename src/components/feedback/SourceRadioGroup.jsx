import React from 'react';
import styled from 'styled-components';

export default function SourceRadioGroup({ value, onChange }) {
  const options = [
    { value: '블로그', label: '블로그' },
    { value: '구글링', label: '구글링' },
    { value: '플랫폼', label: '플랫폼 (벨덕트, 로켓펀치, 디스파이엇 등)' },
    { value: '기타', label: '기타' }
  ];

  return (
    <RadioGroup>
      {options.map((option) => (
        <RadioOption key={option.value}>
          <input
            type="radio"
            name="source"
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          <span>{option.label}</span>
        </RadioOption>
      ))}
    </RadioGroup>
  );
}

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }

  input[type="radio"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #DDA94B;
  }

  span {
    font-size: 0.95rem;
    color: #333;
  }
`;
