import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import FormHeader from '../components/feedback/FormHeader';
import EmailInfoSection from '../components/feedback/EmailInfoSection';
import SourceRadioGroup from '../components/feedback/SourceRadioGroup';
import TextInputQuestion from '../components/feedback/TextInputQuestion';
import FormActions from '../components/feedback/FormActions';
import SuccessModal from '../components/feedback/SuccessModal';

export default function Feedback() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    source: '',
    name: '',
    feedback: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.source) {
      alert('저의 포트폴리오를 어디서 접하게 되었나요? 항목을 선택해주세요.');
      return;
    }

    if (!formData.feedback.trim()) {
      alert('피드백을 작성해주세요.');
      return;
    }

    console.log('제출된 데이터:', formData);
    setShowModal(true);
  };

  const handleClear = () => {
    setFormData({
      source: '',
      name: '',
      feedback: ''
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      source: '',
      name: '',
      feedback: ''
    });
    navigate('/');
  };

  return (
    <>
      <Container>
        <FormCard>
          <FormHeader />

          <FormContent onSubmit={handleSubmit}>
            <EmailInfoSection />

            <RequiredNote>
              <span>*</span> 필수 질문 표시
            </RequiredNote>

            <Question>
              <QuestionLabel>
                저의 포트폴리오를 어디서 접하게 되었나요? <span>*</span>
              </QuestionLabel>
              <SourceRadioGroup
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
              />
            </Question>

            <TextInputQuestion
              label="답변 받으실 이메일을 작성해 주세요."
              helpText="* 답변은 이메일로 보내드립니다.<br />* 이메일 전송 후 이메일 주소는 삭제됩니다.<br />* 답변"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <TextInputQuestion
              label="포트폴리오에 대한 궁금한 점이나 피드백을 작성해 주세요."
              helpText="* 피드백의 경우 추후 블로그 게시물에 업로드 될 수도 있습니다. (피드백 수용 후 수정한 내용을 내용으로)"
              value={formData.feedback}
              onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
              required
            />

            <FormActions
              onClear={handleClear}
              onExit={() => navigate('/')}
            />
          </FormContent>
        </FormCard>
      </Container>

      {showModal && <SuccessModal onClose={handleModalClose} />}
    </>
  );
}

// ============ Styled Components ============

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

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #9E7A67;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
`;

const FormCard = styled.div`
  max-width: 700px;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;
`;

const FormContent = styled.form`
  padding: 2.5rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

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

const RequiredNote = styled.p`
  font-size: 0.85rem;
  color: #e74c3c;
  margin: 0 0 1.5rem 0;

  span {
    font-weight: 600;
  }
`;
