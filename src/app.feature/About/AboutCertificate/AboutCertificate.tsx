import React from 'react';
import styled from 'styled-components';
import AboutCertificateItem from './AboutCertificateItem';
import ArrCertificate from './ArrCertificate';

const AboutCertificate = () => {
  return (
    <StyledWrapper>
      <div className="about-title">📚 Certificate</div>
      <div className="certificate-list">
        {ArrCertificate.map((item) => (
          <AboutCertificateItem {...item} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default AboutCertificate;

const StyledWrapper = styled.div`
  .certificate-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;
