import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import categoryColor from "../../app.constants/categoryColor";

type TProps = {
  category: string;
};

const TagCategory: React.FC<TProps> = ({ category }) => {
  console.log(category);

  return (
    <StyledWrapper to={`/posts?category=${category}`}>
      <div
        className="post-category-item"
        style={{ background: categoryColor[category] }}
      >
        {category}
      </div>
    </StyledWrapper>
  );
};

export default TagCategory;

const StyledWrapper = styled(Link)`
  .post-category-item {
    display: inline-block;
    color: white;
    padding: 1px 10px;
    border-radius: 15px;
    z-index: 1;
  }
`;
