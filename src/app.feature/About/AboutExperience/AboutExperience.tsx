import React from 'react';
import styled from 'styled-components';
import AboutExperienceItem from './AboutExperienceItem';
import ArrExperience from './ArrExperience';

const AboutExperience = () => {
  return (
    <StyledWrapper>
      <div className="about-title">🧶 Experience</div>
      <div className="experience-list">
        {ArrExperience.map((item) => (
          <AboutExperienceItem {...item} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default AboutExperience;

const StyledWrapper = styled.div`
  margin-bottom: 60px;

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;
