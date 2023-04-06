---
title: "[Algorithm] 12주차 과제"
date: "2023-04-03T12:13:00.000Z"
description: 알고리즘 스터디 해커톤
category: ["Algorithm", "All"]
thumbnail: "/images/content/Algorithm/6_1.png"
---

![Thumbnail](./1.png)

## 🌱 12주차 과제

#### 🖋 백준 15961 회전초밥

[백준 15961 회전초밥](https://www.acmicpc.net/problem/15961)

어렵지 않게 생각한 문제! 예제 풀면서 답도 잘 나오고 막히는 부분 딱히 없었는데 계속 시간초과가 났다. 알고리즘 힌트를 봤는데 투포인터와 슬라이딩 윈도우라는데,,, 사실 투포인터로 푸는 건 내가 푼거랑 딱히 크게 다른 점은 없을 것 같았지만 슬라이딩 윈도우는 정말 처음 들어봤다...

##### 첫번째 제출

```python
# 15961 회전초밥

import sys
input = sys.stdin.readline

from collections import deque

n, d, k, c = map(int, input().split())
arr = [int(input()) for _ in range(n)]

answer = 0

def solution(start):
    global answer
    sushi = set()

    for i in range(k):
        index = (start + i) % n
        sushi.add(arr[index])

    sushi.add(c)
    answer = max(answer, len(sushi))

for i in range(n):
    solution(i)

print(answer)

```

슬라이딩 윈도우로 풀면 아래와 같은 코드가 나온다.

```python
import sys
input = sys.stdin.readline
from collections import defaultdict

N, d, k, c = map(int,input().split())
sushi = []
for _ in range(N):
    sushi.append(int(input()))
sushi.extend(sushi)

left = 0
right = 0
max_cnt = 0
eat = defaultdict(int)

eat[c] += 1

for right in range(len(sushi)):
    eat[sushi[right]] += 1

    if right >= k-1:
        max_cnt = max(max_cnt,len(eat))
        eat[sushi[left]] -= 1
        if eat[sushi[left]] == 0:
            del eat[sushi[left]]
        left += 1

print(max_cnt)
```

#### 🖋 백준 14719 빗물

[백준 14719 빗물](https://www.acmicpc.net/problem/14719)

처음에는 시작인덱스, 끝 인덱스를 투포인트처럼 하려고 했는데 오른쪽에 더 높은 혹은 더 낮은 블록을 예상하는 것이 필요했다. 고민을 하다가 블럭을 좌표처럼 쓰면 될 것 같다는 생각이 들었다.

각 층마다 검증을 하면 되는데, start는 왼쪽에 가로막고 있는 벽이 있는가에 대한 플래그이다. 각층마다 y좌표 0부터 w-1까지 검증한다. 1일 경우에 start가 있다면 지금까지 카운트한 숫자를 전체 카운트에 더해주고 tempCnt는 0으로 초기화한다. start가 없다면 start를 True로 바꿔준다. 왼쪽에 벽이 없었다는 뜻이므로 tempCnt는 더해주지 않는다. 0일 경우에 start가 있다면 tempCnt를 1더해준다. start가 없다면 왼쪽에 벽이 없다는 소리이므로 굳이 칸을 더해주지 않아도 된다.

```python
# 14719 빗물

import sys
input = sys.stdin.readline

h, w = map(int, input().split())
arr = list(map(int, input().split()))

rain = [[0 for _ in range(w)] for _ in range(h)]

for i in range(w):
    for j in range(h - 1, h - arr[i] - 1, -1):
        rain[j][i] = 1

count = 0

def solution(height):
    global count
    tempCnt = 0
    start = False

    for i in range(w):
        if rain[height][i] == 1:
            if start:
                count += tempCnt
                tempCnt = 0
            else:
                start = True
        else:
            if start:
                tempCnt += 1

for i in range(h):
    solution(i)

print(count)
```

#### 🖋 백준 11660 구간 합 구하기 5

[백준 11660 구간 합 구하기 5](https://www.acmicpc.net/problem/11660)

##### 첫번째 제출

```python
# 11660 구간 합 구하기 5

n, m = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]

def solution(x1, y1, x2, y2):
    temp = arr[x1 - 1:x2]
    sum = 0
    for row in temp:
        for j in range(y1 - 1, y2):
            sum += row[j]

    print(sum)

for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())
    solution(x1, y1, x2, y2)

```

사실 이 코드는 제출하면서도 시간초과가 나겠다는 생각을 했다. 역시나 시간초과.

다시 그림을 그려 생각해보니, 한 좌표까지의 누적합과 다른 좌표까지의 누적합을 빼면 그 좌표 두개 사이의 누적합이 나온다는 사실을 깨달았다.
그래서 한 줄 한 줄 씩 위의 원리를 적용해서 구해줬다.

##### 두번째 제출

```python
# 11660 구간 합 구하기 5

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [[0 for _ in range(n + 1)]]

for i in range(1, n + 1):
    temp = list(map(int, input().split()))
    arr.append([0] + temp)

sumArr = [[0 for _ in range(n + 1)] for _ in range(n + 1)]

for i in range(1, n + 1):
    temp = 0
    for j in range(1, n + 1):
        sumArr[i][j] = arr[i][j] + temp
        temp += arr[i][j]

def solution(x1, y1, x2, y2):
    answer = 0

    for i in range(x1, x2 + 1):
        answer += sumArr[i][y2] - sumArr[i][y1 - 1]

    print(answer)

for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())
    solution(x1, y1, x2, y2)

```

#### 🖋 백준 14712 넴모넴모

[백준 14712 넴모넴모](https://www.acmicpc.net/problem/14712)

```python
# 14712 넴모넴모

n, m = map(int, input().split())
arr = [[0 for _ in range(m + 1)] for _ in range(n + 1)]

result = 0

def solution(count):
    global result

    if count == m * n:
        result += 1
        return

    x = count // m + 1
    y = count % m + 1

    solution(count + 1)

    if arr[x - 1][y] == 0 or arr[x][y - 1] == 0 or arr[x - 1][y - 1] == 0:
        arr[x][y] = 1
        solution(count  + 1)
        arr[x][y] = 0

solution(0)
print(result)
```

#### 🖋 백준 9663 N-Queen

[백준 9663 N-Queen](https://www.acmicpc.net/problem/9663)

```python
# 9663 N-Queen

n = int(input())
arr= [0] * n
result = 0

def adjacent(x):
    for i in range(x):
        if arr[x] == arr[i] or abs(arr[x] - arr[i]) == x - i:
            return False
    return True

def solution(x):
    global result

    if x == n:
        result += 1
    else:
        for i in range(n):
            arr[x] = i
            if adjacent(x):
                solution(x + 1)

solution(0)
print(result)
```
