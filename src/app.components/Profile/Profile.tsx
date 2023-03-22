import React from 'react';
import styled from 'styled-components';
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons';

const Profile = () => {
  return (
    <StyledWrapper>
      <div className="profile-image">
        <img src="/images/profile.png" />
      </div>
      <div className="profile-desc-wrap">
        <div className="profile-desc-title">안녕하세요, 김진아입니다.</div>
        <div className="profile-desc-content">
          프론트엔드 개발을 공부하고 있는 김진아입니다. 개발중입니다앙.
          개발중입니다앙. 개발중입니다앙. 개발중입니다앙. 개발중입니다앙.
          개발중입니다앙. 개발중입니다앙. 개발중입니다앙. 개발중입니다앙.
          개발중입니다앙. 개발중입니다앙.
          {/* 이 공간은 공부한 것을 기록하고, 새로운 도전을 글로 남기기 위해 만든 공간입니다. */}
        </div>
        <div className="profile-desc-etc">
          <a href="https://www.github.com/wlsdk7245" target="_blank">
            <GithubOutlined />
          </a>
          <a href="https://www.instagram.com/wlsdk7245" target="_blank">
            <InstagramOutlined />
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Profile;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
  padding: 60px 0;
  transition: 200ms;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 20px 0;
    margin-bottom: 40px;
  }

  .profile-image {
    width: 250px;
    min-width: 250px;
    min-height: 250px;
    background-color: #ffe2ce;
    box-shadow: 0 0 10px #ffe2ce;
    border-radius: 100%;
    display: flex;
    transition: 200ms;

    @media (max-width: 1024px) {
      width: 180px;
      min-width: 180px;
      min-height: 180px;
    }

    img {
      width: 100%;
      flex: 1;
    }
  }

  .profile-desc-wrap {
    .profile-desc-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .profile-desc-content {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .profile-desc-etc {
      display: flex;
      gap: 12px;

      svg {
        color: #545454;
        transition: 200ms;

        &:hover {
          color: black;
        }
      }
    }
  }
`;
