---
title: "[Algorithm] 10주차 과제"
date: "2023-03-10T15:40:00.000Z"
description: 알고리즘 10주차 과제
category: ["Algorithm", "All"]
thumbnail: "/images/content/Algorithm/3_1.png"
---

![Thumbnail](./1.png)

## 🌱 10주차 과제

#### 🖋 9333 돈 갚기

[백준 9333 돈 갚기](https://www.acmicpc.net/problem/9333)

반복문을 돌리면서 이자와 함께 갚을 돈을 계산해주고, 갚을 수 있는만큼을 빚에서 빼주고 나서 더 갚을 돈이 남아있다면 앞의 작업을 다시 수행하도록 구현했다.

```python
n = int(input())
arr = [list(map(float, input().split())) for _ in range(n)]

for r, b, m in arr:
    interest = b * r * 0.01
    debt = b + round(b * r * 0.01, 2)
    month = 0
    flag = True

    while debt >= 0:
        debt -= m
        debt += round(debt * r * 0.01, 2)
        month += 1
        if month > 1200 :
            print('impossible')
            flag = False
            break

    if flag:
        print(month)
```

이렇게 구현한 코드는 계속 21퍼센트에서 틀리는 것!!! 도대체 왜...!!!!!!

![](https://velog.velcdn.com/images/wlsdk0313/post/30647357-620f-443b-b116-0864bed16f48/image.png)

#### 🖋 22233 가희와 키워드

[백준 22233 가희와 키워드](https://www.acmicpc.net/problem/22233)

8주차에서 차집합 개념을 써서 풀었던 문제가 있어서 정말 너무너무 쉽게 풀렸다. 메모를 집합으로 냅두고, 거기서 매번 블로그 글을 작성할 때 해당 키워드들을 삭제하고 메모에 남은 키워드의 개수를 세주었다. 한 가지 문제(?)가 있다면, 요즘 부트캠프에서 자바스크립트를 쓰다보니, 파이썬과 자바스크립트 함수 사이에서 혼동이 온다...!

```python
n, m = map(int, input().split())
memo = set([input() for _ in range(n)])
blog = [input().split(',') for _ in range(m)]

for keywords in blog:
    memo -= set(keywords)
    print(len(memo))
```

#### 🖋 1699 제곱수의 합

[백준 1699 제곱수의 합](https://www.acmicpc.net/problem/1699)

##### 첫 제출

왜 틀렸는가... 주어지는 숫자보다 작은 수 중 가장 큰 제곱근을 골라 계속 계속 빼주었다. 근데 풀고 나니 드는 생각인데, 테스트 케이스는 다 맞지만, 큰 숫자일 경우에 더 큰 제곱근을 빼는 것 보다, 작은 제곱근 두개를 빼주는 게 더 효율적이라는 생각이 들면서 아 이거 DP구나, 싶었다.

```python
import math
n = int(input())
result = 0

while n:
    temp = math.floor(math.sqrt(n))
    n -= temp ** 2
    result += 1

print(result)
```

##### 두번째 제출

```python
import math
n = int(input())
result = 0
dp = [0 for _ in range(n + 1)]

for i in range(1, n + 1):
    dp[i] = i
    for j in range(1, math.floor(math.sqrt(i)) + 1):
        dp[i] = min(dp[i], dp[i - j ** 2] + 1)

print(dp[n])
```

![](https://velog.velcdn.com/images/wlsdk0313/post/664e7079-d475-4223-9e76-922f90f4d275/image.png)

이게... 맞나요...? 콩순이컴도 아니고 효율성이 이렇게나 떨어지는데... 이렇게 기다리게 해놓고 오답이면 저주할거야 너 ㅠㅠ 결국은 시간 초과로 틀렸다. 근데 제출하고 나서 보니, 아마도 range에 있는 math함수 두개 때문에 시간초과가 난 것 같다는 생각이 들었다.

##### 세번째 제출

```python
import math
n = int(input())
result = 0
dp = [0 for _ in range(n + 1)]

for i in range(1, n + 1):
    dp[i] = i
    for j in range(1, i):
        if j * j > i:
            break
        dp[i] = min(dp[i], dp[i - j ** 2] + 1)

print(dp[n])
```

채점할 때 퍼센트 늘어나는 속도부터 달랐다. 알고리즘 짜는 것도 어려운데 복잡도까지 고려하려니까 까다로운 문제가 되어버린다. 이건 그나마 쉽게 풀리는 문제라서 해결할 수 있었지만, 좀 더 복잡한 문제에 복잡도 고려사항이 추가되면 아마도 많이 힘들 것 같다는 생각이 든다.

##### 번외!!!

```python
import math
n = int(input())
result = 0
dp = [0 for _ in range(n + 1)]

for i in range(1, n + 1):
    dp[i] = i
    temp = math.floor(math.sqrt(i)) + 1
    for j in range(1, temp):
        dp[i] = min(dp[i], dp[i - j ** 2] + 1)

print(dp[n])
```

이것도 정답! range안에 함수가 있으면 for문 돌 때 마다 실행한다고 저번에 스터디할 때 누가 말해준 게 기억이 나서 이걸 밖으로 빼고 채점을 걸어뒀는데 오래걸려서 역시 시간초과구나 했는데 나중에 들어가보니 얘도 정답이었다. 효율적 코드는 아니지만 확실히 range안에서 함수 쓰는 건 지양해야 할 듯!
