import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SearchOutlined } from '@ant-design/icons';

const AppHeaderLaptop = () => {
  return (
    <StyledWrapper className="app-header-laptop">
      <div className="header-title">
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
      </div>
      <div className="header-menu">
        <Link to="/about">
          <div className="menu-item">ABOUT</div>
        </Link>
        <Link to="/posts">
          <div className="menu-item">POSTS</div>
        </Link>
        <SearchOutlined />
      </div>
    </StyledWrapper>
  );
};

export default AppHeaderLaptop;

const StyledWrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: white;

  .header-title {
    img {
      width: 100%;
      height: 60px;
    }
  }

  .header-menu {
    display: flex;
    align-items: center;
    gap: 40px;

    a,
    svg {
      cursor: pointer;
      transition: 200ms;
      color: #a2a2a2;
      text-decoration: none;

      &:hover {
        color: black;
      }
    }
  }
`;
