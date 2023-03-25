---
title: "[Algorithm] 재귀 (Recursion)"
date: "2023-03-05T22:00:00.000Z"
description: Gatsby로 개발 블로그 만들기
category: ["Algorithm", "All"]
thumbnail: "/images/content/Algorithm/1_1.jpeg"
---

![Thumbnail](./1.jpeg)

## 📚 개요

재귀는 수학이나 컴퓨터 과학 등에서 자신을 정의할 때 자기 자신을 재창조하는 방법을 뜻한다. 주로 이 방법은 함수에 적용한 재귀함수(Recursion Function)의 형태로 많이 사용된다. 재귀함수란 자기 자신을 다시 호출하는 함수라고 이해하면 된다. 재귀 함수는 DFS, BFS 등 많은 알고리즘 문제를 해결하는 데에 쓰인다.

```python
def recursion():
    print("재귀 함수 호출")
    recursion()

recursion()
```

재귀함수에서는 **종료 조건**이 필수적으로 필요하다. 함수를 계속 호출하면 **스택**처럼 앞의 함수 위에 계속 쌓이기 때문에 마지막 함수가 종료되기 전에는 앞의 함수를 종료할 수가 없다. 따라서 종료 조건을 명시하지 않으면 함수가 무한 호출된다. 파이썬에서는 이렇게 무한적으로 함수가 호출될 경우, 아래와 같은 오류 메시지와 함께 종료된다.

```markdown
RecursionError: maximum recursion depth exceeded while pickling an object
```
