import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostList = ({ postList }) => {
  return (
    <StyledWrapper>
      {postList.map((postData, idx) => (
        <PostItem key={`post-item-${idx}`} postData={postData} />
      ))}
    </StyledWrapper>
  );
};

export default PostList;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  transition: 200ms;

  @media (max-width: 768px) {
    gap: 50px;
  }
`;
