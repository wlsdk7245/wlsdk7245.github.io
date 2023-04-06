---
title: "[Algorithm] 11주차 과제"
date: "2023-03-26T14:02:00.000Z"
description: 알고리즘 스터디 해커톤
category: ["Algorithm", "All"]
thumbnail: "/images/content/Algorithm/5_1.png"
---

![Thumbnail](./1.png)

## 🍭 백트래킹(Backtracking)

백트래킹이란 해를 찾는 도중 해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법을 말한다. DFS를 사용하여 만약 조건에 맞지 않으면 그 즉시 중단하고 이전으로 돌아가여 다시 확인하는 것을 반복하면서 원하는 조건을 찾으면 된다.

```python
def promising(x):
	if 유망한지 확인: return True
    	return False

def dfs():
	if promising(x):
		dfs()
```

#### 🖋 백트래킹 예제 1 - 백준 15649 N과 M(1)

이 문제는 버전이 정말 여러 개가 있었다. 이 문제들은 백트래킹 입문 예제라고 한다.

```python
n, m = map(int, input().split())
s = []

def dfs():
    if len(s) == m:
        print(' '.join(map(str, s)))
        return

    for i in range(1, n + 1):
        if i not in s:
            s.append(i)
            dfs()
            s.pop()
dfs()
```

## 🌱 11주차 과제

지난 주 과제와 해커톤에서 백트래킹이 너무 어려웠어서 이번 주 미니 과제로 백트래킹 문제 세 가지를 뽑았다. 아직 백트래킹 개념에 대한 감이 잡히지 않아서 백트래킹 예제들을 혼자 몇개 풀어보았다.

![](https://velog.velcdn.com/images/wlsdk0313/post/c1da5331-deb1-4db9-ad63-5421d7d5d74b/image.png)

물론 대부분이 N과 M 시리즈였지만 확실히 어떤 식으로 푸는지에 대한 감은 잡혔다. 다만 문제는 어떤 문제를 접했을 때 이게 백트래킹으로 해결할 수 있겠다는 감을 잡지는 못할 것 같은 느낌...!

이번 과제들도 백트래킹임을 알았으니 배운 개념을 사용해서 풀었지만, 스터디 초반에 책으로 풀 때 단원명을 알고 풀었을 때랑 같이 그 단원명을 빼면 어려운 느낌...! 이게 훈련을 하면 코드를 짜는 건 어느정도 할 수 있겠는데 문제를 보고 어떤 알고리즘으로 해결해야하느냐를 판단하는 게 가장 중요하고 어려운 것 같다. 이것도 훈련을 통해 기르는 수밖에...

#### 🖋 백준 5568 카드 놓기

[백준 5568 카드 놓기](https://www.acmicpc.net/problem/5568)

아마 내가 골랐던 실버 4 문제...^^ 백트래킹 개념이 확실히 잡혀있지 않아서 쉬운 문제로 골랐다.

일단 카드이기 때문에 같은 수를 두 번 이상 사용하는 것은 안됨! 하지만 중복되는 카드가 존재할 수 있다. 또 만들어진 수열에서 다른 카드를 사용했지만 숫자로 만들었을 때 같은 결과값을 낼 수 있기 때문에 이는 또 없애줘야한다. 그래서 기본적인 백트래킹으로 구하고, 중복도 제거해주고, 그 다음 이를 다 한 배열에 넣어주고 최종적으로 set로 만들어준 뒤 여기서 갯수를 계산했다.

```python
# 5568 카드 놓기

n = int(input())
k = int(input())

arr = [int(input()) for _ in range(n)]
arr.sort()

temp = []
answer = []

visited = [False] * n

def dfs():
    global answer
    if len(temp) == k:
        answer.append(int("".join(map(str, temp))))
        return

    prev = 0

    for i in range(n):
        if prev != arr[i] and not visited[i]:
            temp.append(arr[i])
            prev = arr[i]
            visited[i] = True
            dfs()
            temp.pop()
            visited[i] = False

dfs()

print(len(list(set(answer))))
```

#### 🖋 백준 10974 모든 순열

[백준 10974 모든 순열](https://www.acmicpc.net/problem/10974)

위 문제와 정말 모든 게 같지만, 중복된 숫자가 있지 않기 때문에 그 부분만 달랐다.

여기서 얻은 지식은 *s 이다. 사실 원래 알고 있었던 개념인 것 같은데 정말 까맣게 잊고 있었다. N과 M 문제들을 풀때 다 " ".join(map(str, 변수)) 형태로 출력을 했는데 *s로 해주면 알아서 배열에 있는 요소들을 예쁘게 출력해준다.

```python
# 10974 모든 순열

n = int(input())
s = []

visited = [False] * (n + 1)

def dfs():
    if len(s) == n:
        print(*s)
        return

    prev = 0

    for i in range(1, n + 1):
        if prev != i and visited[i] == False:
            s.append(i)
            prev = i
            visited[i] = True
            dfs()
            s.pop()
            visited[i] = False

dfs()
```

#### 🖋 백준 2961 도영이가 만든 맛있는 음식

[백준 2961 도영이가 만든 맛있는 음식](https://www.acmicpc.net/problem/2961)

코드를 짜면서도, 짜고나서도 뿌듯했던 문제인데 채점하자마자 나의 기쁨을 와장창 깨부신 문제... 처음에 if arr[i] in temp 구문을 넣는 바람에 다른 재료이지만 쓴맛 단맛이 똑같을 때의 경우들을 계산하지 못했다. 아무튼 해결!

```python
# 2961 도영이가 만든 맛있는 음식

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

minValue = 1e9 # 최소값을 저장하는 변수
temp = []

def calculate(numbers):
    totalS, totalB = 1, 0
    for n in numbers: # 선택한 전체 재료들 하나하나 순회
        totalS *= n[0] # 신맛은 곱해줌
        totalB += n[1] # 쓴맛은 더해줌

    return abs(totalS - totalB) # 신맛과 쓴맛의 차이를 반환

def dfs(m, start):
    global minValue
    if len(temp) == m: # 재료를 모두 선택함
        minValue = min(calculate(temp), minValue)
        # 신맛과 쓴맛의 차이의 최소값을 저장
        return

    for i in range(start, n): # 같은 재료를 선택할 수 없기에 이를 고려해
        temp.append(arr[i])
        dfs(m, i + 1)
        temp.pop()

for i in range(1, n + 1): # n개중의 재료 중 몇 개를 사용할지
    dfs(i, 0)

print(minValue)
```
