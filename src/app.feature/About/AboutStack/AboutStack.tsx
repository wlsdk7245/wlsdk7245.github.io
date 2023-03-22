import React from 'react';
import styled from 'styled-components';
import AboutStackItem from './AboutStackItem';
import ArrStack from './ArrStack';

const AboutStack = () => {
  return (
    <StyledWrapper>
      <div className="about-title">🛠 STACK</div>
      <div className="stack-list">
        {ArrStack.map(({ title, content }) => (
          <AboutStackItem title={title} content={content} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default AboutStack;

const StyledWrapper = styled.div`
  margin-bottom: 60px;

  .stack-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;
