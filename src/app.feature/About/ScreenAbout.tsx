import React from 'react';
import styled from 'styled-components';
import Profile from '../../app.components/Profile/Profile';
import AboutCertificate from './AboutCertificate/AboutCertificate';
import AboutEducation from './AboutEducation/AboutEducation';
import AboutExperience from './AboutExperience/AboutExperience';
import AboutStack from './AboutStack/AboutStack';

const ScreenAbout = () => {
  return (
    <StyledWrapper>
      <Profile />
      <AboutEducation />
      <AboutStack />
      <AboutExperience />
      <AboutCertificate />
    </StyledWrapper>
  );
};

export default ScreenAbout;

const StyledWrapper = styled.div`
  .about-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;
