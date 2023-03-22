import React from 'react';
import styled from 'styled-components';

type TProps = {
  title: string;
  date: string;
  desc: string;
};

const AboutCertificateItem: React.FC<TProps> = ({ title, date, desc }) => {
  return (
    <StyledWrapper>
      <div className="title">{title}</div>
      <div className="certificate-detail">
        <div className="date">{date}</div>
        <div className="desc">{desc}</div>
      </div>
    </StyledWrapper>
  );
};

export default AboutCertificateItem;

const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;

  .title {
    width: 170px;
    font-size: 20px;
    font-weight: 600;
  }

  .certificate-detail {
    color: gray;

    .date {
      font-size: 14px;
    }

    .desc {
      font-size: 12px;
    }
  }
`;
