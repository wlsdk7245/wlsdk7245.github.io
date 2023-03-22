import React, { useEffect, useState } from 'react';
import AppLayout from '../app.layout/AppLayout/AppLayout';
import ScreenPosts from '../app.feature/Posts/ScreenPosts';
import { graphql } from 'gatsby';

const Posts = ({ data, location }) => {
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const posts = data.allMarkdownRemark.nodes;
  const [postList, setPostList] = useState(posts);

  useEffect(() => {
    if (category) {
      const filteredPosts = posts.filter(
        (item) => !!item.frontmatter.category.includes(category),
      );
      setPostList(filteredPosts);
    }
  }, [category]);

  return (
    <AppLayout location={location}>
      <ScreenPosts postList={postList} />
    </AppLayout>
  );
};

export default Posts;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 1000, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail
          category
        }
      }
    }
  }
`;
