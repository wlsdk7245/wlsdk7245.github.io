import React, { useState } from "react";
import styled from "styled-components";
import { graphql, Link, navigate } from "gatsby";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const AppHeaderMobile = ({ location }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClickMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleClickAddress = (address: string) => {
    navigate(address);
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <StyledWrapper className="app-header-mobile">
      <div className="header-title">
        <div className="menu-button">
          <MenuOutlined onClick={handleClickMenu} />
        </div>
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
      </div>
      <div className="header-search">
        <SearchOutlined />
      </div>
      <StyledDrawer
        width={280}
        placement="left"
        open={isMenuVisible}
        onClose={handleClickMenu}
        // title={<img src="/images/logo.png" className="drawer-title-img" />}
      >
        <div className="menu-item">
          <span
            className={`menu-link ${location.pathname.includes("/about")}`}
            onClick={() => handleClickAddress("/about")}
          >
            ABOUT
          </span>
        </div>
        <div className="menu-item">
          <span
            className={`menu-link ${location.pathname.includes("/posts")}`}
            onClick={() => handleClickAddress("/posts")}
          >
            POSTS
          </span>
        </div>
      </StyledDrawer>
    </StyledWrapper>
  );
};

export default AppHeaderMobile;

const StyledWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: white;

  .header-title {
    display: flex;
    align-items: center;
    gap: 12px;

    a,
    img {
      width: 100%;
      height: 30px;
    }

    svg {
      cursor: pointer;
      transition: 200ms;
      color: #a2a2a2;

      &:hover {
        color: black;
      }
    }
  }

  .header-search {
    svg {
      cursor: pointer;
      transition: 200ms;
      color: #a2a2a2;

      &:hover {
        color: black;
      }
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-title {
    display: flex;
    align-items: center;

    .drawer-title-img {
      height: 30px;
    }
  }

  .menu-item {
    text-align: center;

    .menu-link {
      &.true {
        color: black;
        font-weight: 500;
      }

      cursor: pointer;
      text-align: center;
      letter-spacing: 4px;
      line-height: 4;
      font-weight: 400;
      color: gray;
      transition: 200ms;

      &:hover {
        color: black;
      }
    }
  }
`;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
