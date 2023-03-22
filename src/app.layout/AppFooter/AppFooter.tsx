import React from 'react';
import styled from 'styled-components';

const AppFooter = () => {
  return <StyledWrapper>Copyright © Built width jina</StyledWrapper>;
};

export default AppFooter;

const StyledWrapper = styled.div`
  height: 60px;
  font-size: 8px;
  color: gray;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
