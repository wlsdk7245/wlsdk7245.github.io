import React from 'react';
import styled from 'styled-components';

type TProps = {
  title: string;
  date: string;
  desc: string[];
  stack: string[];
};

const AboutExperienceItem: React.FC<TProps> = ({
  title,
  date,
  desc,
  stack,
}) => {
  return (
    <StyledWrapper>
      <div className="experience-content-left">
        <div className="title">{title}</div>
        <div className="desc">{date}</div>
      </div>
      <div className="experience-content-right">
        {desc.map((item) => (
          <ol className="desc">{item}</ol>
        ))}
        <div className="stack-list">
          {stack.map((item) => (
            <div className="stack-item">{item}</div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AboutExperienceItem;

const StyledWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  .experience-content-left {
    min-width: 200px;
    width: 200px;
    margin-right: 20px;

    @media (max-width: 768px) {
      min-width: unset;
      width: 100%;
      margin-right: unset;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
    }

    .desc {
      font-size: 10px;
    }
  }

  .experience-content-right {
    .desc {
      font-size: 14px;
      margin: 0 0 10px 0;
    }

    .stack-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .stack-item {
        font-size: 12px;
        border: 1px solid pink;
        border-radius: 15px;
        padding: 2px 10px;
      }
    }
  }
`;
