import React from 'react';
import styled from 'styled-components';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

const AppLayout = ({ location, children }) => {
  return (
    <StyledWrapper>
      <AppHeader location={location} />
      <div className="app-content">{children}</div>
      <AppFooter />
    </StyledWrapper>
  );
};

export default AppLayout;

const StyledWrapper = styled.div`
  .app-content {
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
    height: 100%;
    min-height: calc(100vh - 120px);
    padding: 0 40px;
    transition: 200ms;

    @media (max-width: 1024px) {
      padding: 0 40px;
    }

    @media (max-width: 425px) {
      padding: 0 20px;
    }
  }
`;
