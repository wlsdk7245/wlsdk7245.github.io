import React from 'react';
import styled from 'styled-components';
import ArrEducation from './ArrEducation';

const AboutEducation = () => {
  return (
    <StyledWrapper>
      <div className="about-title">🎓 EDUCATION</div>
      <div className="education-list">
        {ArrEducation.map(({ title, content }) => (
          <div className="education-list-item">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default AboutEducation;

const StyledWrapper = styled.div`
  margin-bottom: 60px;

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 28px;

    .education-list-item {
      .title {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
`;
