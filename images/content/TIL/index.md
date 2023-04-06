---
title: "[TIL] Gatsby로 개발 블로그 만들기 2"
date: "2023-04-06T21:41:00.000Z"
description: Gatsby로 개발 블로그 만들기
category: ["TIL", "All"]
thumbnail: "/images/content/TIL/1_1.png"
---

![Thumbnail](./1.png)

완성된 블로그는 아니었긴 하지만, 만들면서 부족한 점이 계속 보여서 리뉴얼하고 있다. 이번에 바꾸려고 생각한 리스트이다.

- 태그 / 카테고리 별로 필터링 하기
- 아이콘만 존재하던 게시글 검색 기능 구현하기
- 포스트 리스트 페이지 네이션 구현하기
- 벨로그처럼 글 헤더 Anchor 구현하기
- About 페이지 가독성 있게 리팩토링하기

필터링이나 검색 기능은 매우 쉬운 작업이지만, Anchor는 어떤 식으로 해야하는지 감도 오지 않고, 될지 안될지 확신도 없다. About 페이지는 노션처럼 만들고 싶어서 구현을 해뒀는데 가독성이 너무 너무 떨어져서 사진도 넣고 좀 더 아기자기하게 꾸며보려 한다.

## 🥛 필터링 구현하기

![](https://velog.velcdn.com/images/wlsdk0313/post/888a113e-07b1-4e8c-bfc5-5433ece3312c/image.png)

기존 포스트 페이지의 모습이다. 최근 작성된 순서대로 필터링없이 전체 포스트를 다 볼 수 있다. 지금은 게시글이 많이 없어서 크게 불편한 점은 없지만, 게시글이 10개, 20개, 30개가 된다면 게시글을 찾는 데에 애를 먹을 것이라는 생각에 'category' 데이터로 필터링을 구현했다.

```
---
title: '[Frontend] 숙소 사이트 만들기 1'
date: '2023-03-06T15:27:00.000Z'
description: 숙소 사이트 만들기 1
category: ['Frontend']
thumbnail: '/images/content/Frontend/1_1.png'
---
```

마크다운 페이지 정보에 category를 추가해주고, config 파일 같은 곳에서도 동일하게 feed내에 category를 추가해준다. 마지막으로 페이지에서 쓸 graphql을 수정해주면 된다.

```js
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
```

사실, 애초에 sort와 함께 filter 기능을 이용해서 graphql로 데이터를 가져올 때 부터 원하는 카테고리의 데이터만 뽑아오고 싶었다. 그런데 그렇게 하려면 gatsby-node.js를 수정하는 등의 복잡한 과정이 필요하다고 한다. 깔끔히 포기하고, gatsby 초보자인 나는 js에서 필터링을 하기로 결정했다.

```jsx
const params = new URLSearchParams(location.search);
const category = params.get("category");
const posts = data.allMarkdownRemark.nodes;
const [postList, setPostList] = useState(posts);

useEffect(() => {
  if (category) {
    const filteredPosts = posts.filter(
      (item) => !!item.frontmatter.category.includes(category)
    );
    setPostList(filteredPosts);
  }
}, [category]);
```

각 포스트 아이템에서 색깔로 되어 있는 뱃지, 즉 카테고리 태그를 누르게 되면, `http://localhost:8000/posts/?category=Frontend` 처럼 쿼리스트링이 달린 url로 넘어간다. 여기서 category값을 추출해 데이터와 비교해 필터링을 걸어주었다.

![](https://velog.velcdn.com/images/wlsdk0313/post/69e0d165-badc-4516-9ce9-29fdd00c958c/image.png)

## 🍭 검색 구현하기
