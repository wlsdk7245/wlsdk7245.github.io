import React from 'react';
import styled from 'styled-components';
import AppHeaderLaptop from './AppHeaderLaptop';
import AppHeaderMobile from './AppHeaderMobile';

const AppHeader = ({ location }) => {
  return (
    <StyledWrapper>
      <AppHeaderMobile location={location} />
      <AppHeaderLaptop />
    </StyledWrapper>
  );
};

export default AppHeader;

const StyledWrapper = styled.div`
  position: sticky;
  z-index: 100;
  width: 100%;
  top: 0;

  @media (min-width: 1024px) {
    .app-header-mobile {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    .app-header-laptop {
      display: none;
    }
  }
`;
