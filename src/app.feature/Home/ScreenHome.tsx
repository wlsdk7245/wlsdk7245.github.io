import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostList from '../../app.components/Post/PostList';
import Profile from '../../app.components/Profile/Profile';

const ScreenHome = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <StyledWrapper>
      <Profile />
      <PostList postList={posts} />
    </StyledWrapper>
  );
};

export default ScreenHome;

const StyledWrapper = styled.div``;
