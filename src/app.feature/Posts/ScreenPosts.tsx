import React from 'react';
import styled from 'styled-components';
import PostList from '../../app.components/Post/PostList';

const ScreenPosts = ({ postList }) => {
  return (
    <StyledWrapper>
      <div className="title">Latest Posts</div>
      <PostList postList={postList} />
    </StyledWrapper>
  );
};

export default ScreenPosts;

const StyledWrapper = styled.div`
  padding: 20px 0;

  .title {
    letter-spacing: 4px;
    margin-bottom: 40px;
    color: #a2a2a2;
    border-bottom: 1px solid #cbcbcb;
  }
`;
