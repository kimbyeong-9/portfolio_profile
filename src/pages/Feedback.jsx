import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
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

const FormContent = styled.form`
  padding: 2.5rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ExitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ExitButton = styled.button`
  background: transparent;
  color: #666;
  border: 2px solid #999;
  padding: 0.9rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #666;
    color: #333;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  background: #DDA94B;
  color: #2C1810;
  border: none;
  padding: 0.9rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #FFD916;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(221, 169, 75, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const ClearButton = styled.button`
  background: transparent;
  color: #DDA94B;
  border: 2px solid #DDA94B;
  padding: 0.9rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #DDA94B;
    color: #2C1810;
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

// 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${modalFadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${modalSlideUp} 0.3s ease-out;
  text-align: center;

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const ModalIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #DDA94B 0%, #FFD916 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    width: 32px;
    height: 32px;
    color: #2C1810;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 900;
  color: #2C1810;
  margin: 0 0 1rem 0;
  font-family: 'Shinhwa', sans-serif;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ModalMessage = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 2rem 0;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ModalButton = styled.button`
  background: #DDA94B;
  color: #2C1810;
  border: none;
  padding: 0.9rem 3rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Shinhwa', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #FFD916;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(221, 169, 75, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

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

    // 여기에 실제 제출 로직 추가 (예: API 호출, Google Forms 연동 등)
    console.log('제출된 데이터:', formData);

    // 모달 표시
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
    // 폼 초기화
    setFormData({
      source: '',
      name: '',
      feedback: ''
    });
    // 메인 페이지로 이동
    navigate('/');
  };

  return (
    <>
      <Container>
        <FormCard>
          <Header>
            <Title>저의 포트폴리오를 찾아주셔서 감사합니다.</Title>
            <Description>
              안녕하세요. 저 포트폴리오를 보고 관심가져 주셔서 감사합니다!
            </Description>
            <Description>
              포트폴리오를 보시고 궁금하신 점이나 피드백을 작성해 주세요 :)
            </Description>
          </Header>

          <FormContent onSubmit={handleSubmit}>
            <EmailSection>
              <EmailText>gkrjawnrkf1@gmail.com</EmailText>
              <EmailBadge>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                비공개
              </EmailBadge>
            </EmailSection>

            <RequiredNote>
              <span>*</span> 필수 질문 표시
            </RequiredNote>

            <Question>
              <QuestionLabel>
                저의 포트폴리오를 어디서 접하게 되었나요? <span>*</span>
              </QuestionLabel>
              <RadioGroup>
                <RadioOption>
                  <input
                    type="radio"
                    name="source"
                    value="블로그"
                    checked={formData.source === '블로그'}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  />
                  <span>블로그</span>
                </RadioOption>
                <RadioOption>
                  <input
                    type="radio"
                    name="source"
                    value="구글링"
                    checked={formData.source === '구글링'}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  />
                  <span>구글링</span>
                </RadioOption>
                <RadioOption>
                  <input
                    type="radio"
                    name="source"
                    value="플랫폼"
                    checked={formData.source === '플랫폼'}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  />
                  <span>플랫폼 (벨덕트, 로켓펀치, 디스파이엇 등)</span>
                </RadioOption>
                <RadioOption>
                  <input
                    type="radio"
                    name="source"
                    value="기타"
                    checked={formData.source === '기타'}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  />
                  <span>기타</span>
                </RadioOption>
              </RadioGroup>
            </Question>

            <Question>
              <QuestionLabel>답변 받으실 이메일을 작성해 주세요.</QuestionLabel>
              <HelpText>
                * 답변은 이메일로 보내드립니다.<br />
                * 이메일 전송 후 이메일 주소는 삭제됩니다.<br />
                * 답변
              </HelpText>
              <TextArea
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="내 답변"
              />
            </Question>

            <Question>
              <QuestionLabel>
                포트폴리오에 대한 궁금한 점이나 피드백을 작성해 주세요. <span>*</span>
              </QuestionLabel>
              <HelpText>
                * 피드백의 경우 추후 블로그 게시물에 업로드 될 수도 있습니다. (피드백 수용 후 수정한 내용을 내용으로)
              </HelpText>
              <TextArea
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                placeholder="내 답변"
              />
            </Question>

            <ButtonGroup>
              <LeftButtonGroup>
                <SubmitButton type="submit">제출</SubmitButton>
                <ClearButton type="button" onClick={handleClear}>
                  양식 지우기
                </ClearButton>
              </LeftButtonGroup>
              <ExitButton type="button" onClick={() => navigate('/')}>
                나가기
              </ExitButton>
            </ButtonGroup>
          </FormContent>
        </FormCard>
      </Container>

      {/* 제출 완료 모달 */}
      {showModal && (
        <ModalOverlay onClick={handleModalClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </ModalIcon>
            <ModalTitle>감사합니다!</ModalTitle>
            <ModalMessage>
              피드백이 성공적으로 제출되었습니다.<br />
              소중한 의견 감사드립니다.
            </ModalMessage>
            <ModalButton onClick={handleModalClose}>
              확인
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}
