import React from 'react';
import styled from 'styled-components';

type TProps = {
  title: string;
  content: string[];
};

const AboutStackItem: React.FC<TProps> = ({ title, content }) => {
  return (
    <StyledWrapper>
      <div className="title">{title}</div>
      <div className="stack-content">
        {content.map((item) => (
          <div className="stack-content-item">{item}</div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default AboutStackItem;

const StyledWrapper = styled.div`
  .title {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;
  }

  .stack-content {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .stack-content-item {
      font-size: 12px;
      border: 1px solid pink;
      border-radius: 15px;
      padding: 2px 10px;
    }
  }
`;
