import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import TagCategory from "../../app.components/Tag/TagCategory";

const PostItem = ({ postData }) => {
  const {
    fields: { slug },
    frontmatter: { thumbnail, category, title },
    excerpt,
  } = postData;

  const handlePostRoute = () => navigate(slug);

  return (
    <StyledWrapper>
      <div className="post-thumbnail">
        <img src={thumbnail} alt="thumbnail" onClick={handlePostRoute} />
      </div>
      <div className="post-detail">
        <div className="post-detail-top" onClick={handlePostRoute}>
          <div className="post-title">{title}</div>
          <div className="post-content">{excerpt}</div>
        </div>

        <div className="post-category">
          {category && <TagCategory category={category[0]} />}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default PostItem;

const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  color: black;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  .post-thumbnail {
    position: relative;
    overflow: hidden;
    width: 240px;
    height: 240px;
    min-width: 240px;
    transition: 400ms;

    @media (max-width: 768px) {
      width: 180px;
      height: 180px;
      min-width: 180px;
    }

    @media (max-width: 425px) {
      width: unset;
      height: unset;
    }

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    img {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .post-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .post-detail-top {
      cursor: pointer;

      @media (max-width: 425px) {
        margin-bottom: 12px;
      }
    }

    .post-title {
      font-size: 24px;
      margin-bottom: 12px;
      cursor: pointer;
      font-weight: 600;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;

      @media (max-width: 768px) {
        font-size: 21px;
      }
    }

    .post-content {
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 14x;
      line-height: 2;
      color: #676767;

      @media (max-width: 768px) {
        -webkit-line-clamp: 3;
      }
    }

    .post-category {
      font-size: 14px;
      display: flex;
    }
  }
`;
