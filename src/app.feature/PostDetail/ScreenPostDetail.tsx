import { Breadcrumb } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PostComment from './PostComment';

const ScreenPostDetail = ({ data }) => {
  const { previous, next, site, markdownRemark: post } = data;

  return (
    <StyledWrapper>
      <div className="blog-post">
        <div className="title">{post.frontmatter.title}</div>
        <Breadcrumb className="detail-item-list">
          {post.frontmatter?.category && (
            <Breadcrumb.Item className="detail-item">
              {post.frontmatter.category[0]}
            </Breadcrumb.Item>
          )}
          <Breadcrumb.Item className="detail-item">
            {post.frontmatter.date}
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="content">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </div>
      <div className="blog-post-bottom">
        <PostComment repo="wlsdk7245/wlsdk7245.github.io" />
        <nav className="blog-post-nav">
          <ul className="nav-wrap">
            <li className="nav-item">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="nav-item">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </StyledWrapper>
  );
};

export default ScreenPostDetail;

const StyledWrapper = styled.div`
  padding: 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 120px);

  .blog-post-bottom {
    padding-top: 40px;
  }

  .blog-post {
    height: 100%;

    .title {
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .content {
      max-width: 768px;
      margin: 0 auto;
    }

    .detail-item-list {
      display: flex;
      justify-content: end;
      margin-bottom: 40px;

      li {
        margin-bottom: 0;
      }
      .detail-item {
        font-size: 12px;
        color: gray;
      }
    }
  }

  .blog-post-nav {
    .nav-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style: none;
      padding: 0;

      .nav-item {
        margin-bottom: 0;
        a {
          font-size: 12px;
          text-decoration: none;
          color: gray;
          transition: 200ms;

          &:hover {
            color: black;
          }
        }
      }
    }
  }
`;
