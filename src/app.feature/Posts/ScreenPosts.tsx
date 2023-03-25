import React from "react";
import styled from "styled-components";
import PostList from "../../app.components/Post/PostList";
import TagCategory from "../../app.components/Tag/TagCategory";
import categoryColor from "../../app.constants/categoryColor";

const ScreenPosts = ({ postList, category }) => {
  console.log(category);

  return (
    <StyledWrapper>
      <div className="title">{category ?? "All"}</div>
      <div className="category-list">
        {Object.entries(categoryColor).map(([key, value]) => (
          <TagCategory category={key} />
        ))}
      </div>
      <PostList postList={postList} />
    </StyledWrapper>
  );
};

export default ScreenPosts;

const StyledWrapper = styled.div`
  padding: 20px 0;

  .category-list {
    display: flex;
    column-gap: 12px;
    row-gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .title {
    letter-spacing: 4px;
    margin-bottom: 20px;
    color: #a2a2a2;
    border-bottom: 1px solid #cbcbcb;
  }
`;
