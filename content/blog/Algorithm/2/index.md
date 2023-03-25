---
title: "[Algorithm] 알고리즘 스터디 회고 / 8주차 과제"
date: "2023-03-05T22:23:00.000Z"
description: Gatsby로 개발 블로그 만들기
category: ["Algorithm", "All"]
thumbnail: "/images/content/Algorithm/2_1.png"
---

![Thumbnail](../2/1.png)

## 🙄 2023 알고리즘 스터디

작년 7월부터 시작한 알고리즘 스터디. 다들 바쁘기도 하고, 발등에 불이 떨어지지 않아서 중간중간 흐지부지될 뻔도 하였지만, 새로운 해를 맞이해 의기투합해서 스터디 재정비를 했다. 복잡한 알고리즘에 있는 정 없는 정 다 떨어졌기에 동기부여가 필요했다.

![노션](https://velog.velcdn.com/images/wlsdk0313/post/826d8168-cf1b-4278-9555-109478e07ae9/image.png)

디스코드 대화방에 올리던 과제는 노션에 정리하기로 했다. 참여하지 못해 벌금을 냈던 주차의 과제는 몰아볼 수 있으니 빼먹은 문제를 다시 보충하기 너무 좋았다. 어떤 문제를 풀었었는지 기록을 따로 해놓지 않아도 정리해서 볼 수 있어서 편리했고.

![TIL](https://velog.velcdn.com/images/wlsdk0313/post/87929df7-274f-42d4-864e-81b9c3422927/image.png)
생각보다 잘 되고 있는 TIL. 여행을 다녀오느라 잠깐 또 반성할 일을 만든 나... 이제 더 열심히 해볼랍니다. TIL이라기보단 일기에 가깝게 쓰이고 있다. 이렇게 쓰는 이유는 다른 사람들이 열심히 하지 않은 날에 열심히 산 사람은 뿌듯함을 느낄 수 있고, 나는 놀았는데 남이 열심히 살았다 느낀다면 죄책감과 자괴감에 조금 더 나은 내일을 만들기 위해 노력하리라는 생각때문이었다. 개인적으로 진짜 그렇게 느끼고 있다...!

![게더타운](https://velog.velcdn.com/images/wlsdk0313/post/fc24315f-fdec-46c0-83aa-41642b6a2b6e/image.png)
또 하나의 동기부여, 게더타운. 혼자하면 절대 하지 않는 우리. 모여서 하면 좋겠다 해서 만든 게더타운인데 사실 활성화가 되지 않고 있다. 이제 회의도 게더타운 이용해서 하면 좋겠다. 다음 주에 건의해야지.

## 🌱 8주차 과제

벌써 8주가 지나갔다는 점이 나를 또 슬프게 한다. 중간 2주 정도는 또 여행과 다른 이유로 집중을 하지 못했기 때문에 완벽하게 8주 동안 집중할 수가 없었다. 벌금 5000원이 몇 번을 날아가는건지 알 수 없다. 1주차 과제부터 정리해야 숫자 강박이 있는 내게 불편함을 주지 않겠지만, 할 일도 많은 지금 앞의 7주차 알고리즘을 하나하나 회고하는 것은 어려운 일이기 때문에, 이번 주 과제부터 기록하기로 마음 먹었다.

지난 주 튀르키예 여행을 갔던 터라 친구들이 문제 6개를 골라뒀는데, 난이도를 보고 왜이리 다 쉬운 걸 골랐어~ 했는데 풀어보고 아니란 걸 깨닫게 되었지.

#### 🖋 1251 단어 나누기

[백준 1251 단어 나누기](https://www.acmicpc.net/problem/1251)

사전순으로 정렬하는 것이 필요한 알고리즘이기 때문에, 정렬하는 과정이 필요하다. 처음에는 가장 사전순으로 앞에 오는 글자를 두 개 찾아 그 글자들을 기준으로 단어를 세 부분으로 나눈 다음 이를 사전 순으로 정렬하기만 하면 된다고 생각했다. 문제에서 주어진 예시는 mobitel이므로 가장 앞에 오는 글자는 순서대로 b, e이다. 따라서 해당 문자열은 mob, ite, l로 나눠지며 뒤집어 합치게 되면 bometil이 되는 것이다.

그런데 만약 가장 사전순으로 앞에 오는 글자가 세 개 이상이라면? mobibtebl이라는 문자열로 생각해보았다. b가 세 개 존재하기 때문에 어떤 것을 기준으로 나눠야하는지를 생각해야한다. 앞에서부터 두 개를 뽑게되면 mob, ib, tebl이 되어버리는데, 이렇게 나눌 때 보다 mobib, teb, l로 나눠야 사전순으로 더 앞서있기 때문에 정답이 아니다.

이를 어떻게 판단해야하는지에 대한 감이 오지 않아서 아래 알고리즘 분류를 보았다. **브루트포스 알고리즘**, 하나씩 다 확인을 해야하는 알고리즘. 하나씩 검증해야하는 기준을 무엇으로 삼아야할까, 고민하다가 나누는 기준이 되는 문자 두 가지를 검증 기준으로 삼기로 했다. 앞에서부터 기준 인덱스를 정해 세 단어로 나누어 뒤집어 문자열을 생성한다. 이 문자열을 저장된 최소값과 계속 비교하면 사전순으로 가장 앞선 문자열을 찾을 수 있다. 여기서 배열을 만들어 저장한 후 가장 작은 값을 뽑을까 하다가 모험 정신에 `result = "z" * len(alphabets)`을 사용했다. 해당 문자열의 길이만큼 z로 이루어진 문자열이 가장 최대값이기 때문에 이를 저장해두고 이것과 문자열들을 비교해주었다.

```python
alphabets = list(input())
n = len(alphabets)

result = "z" * n

for i in range(1, n-1):
    for j in range(i + 1, n):
        fir = alphabets[:i]
        sec = alphabets[i:j]
        thi = alphabets[j:]

        fir.reverse()
        sec.reverse()
        thi.reverse()

        temp = "".join(fir+sec+thi)
        result = min(result, temp)

print(result)
```

&nbsp;

#### 🖋 4485 녹색 옷 입은 애가 젤다지?

[백준 4485 녹색 옷 입은 애가 젤다지?](https://www.acmicpc.net/problem/4485)

비용을 저장해서 갱신하는 다익스트라를 바로 떠올리긴 했는데, heap을 사용하지 않고 그래프만 써서 하려고 하다 보니 recursion limit 오류가 떴다. 그래서 heap으로 구현했다.

```python
import heapq

dx = [-1, 0, 0, 1]
dy = [0, -1, 1, 0]

def search(count):
    q = []
    heapq.heappush(q, (arr[0][0], 0, 0))
    distance[0][0] = arr[0][0]

    while q:
        cost, x, y = heapq.heappop(q)

        if x == n - 1 and y == n - 1:
            print('Problem ' + str(count) + ': ' + str(distance[x][y]))
            break

        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            if 0 <= nx < n and 0 <= ny < n:
                nc = cost + arr[nx][ny]

                if nc < distance[nx][ny]:
                    distance[nx][ny] = nc
                    heapq.heappush(q, (nc, nx, ny))

count = 1

while True:
    n = int(input())
    if n == 0:
        break

    arr = [list(map(int, input().split())) for _ in range(n)]
    distance = [[int(1e9)] * n for _ in range(n)]

    search(count)
    count += 1
```

&nbsp;

#### 🖋 11724 연결 요소의 개수

[백준 11724 연결 요소의 개수](https://www.acmicpc.net/problem/11724)

이 문제를 보자마자, <이것이 취업을 위한 코딩테스트다> 책에서 본 [얼음틀 문제](https://yummy0102.tistory.com/194) 가 떠올랐다. 그래프 탐색으로 풀면 되겠다라는 사고가 바로 연결 되어서 매우 뿌듯했던 문제! 인접 리스트 자료구조를 사용해서 연결된 노드 정보들을 저장해두고 하나씩 탐색하면 된다.

```python
n, m = map(int, input().split())
arr = [[] for _ in range(n + 1)]

for i in range(m):
    u, v = map(int, input().split())
    arr[u].append(v)
    arr[v].append(u)

visited = [False] * (n + 1)
result = 0

def search(x):
    if not visited[x]:
        visited[x] = True
        for item in arr[x]:
            search(item)
        return True

for i in range(1, n + 1):
    if search(i):
        result += 1

print(result)
```

&nbsp;

#### 🖋 16198 에너지 모으기

[백준 16198 에너지 모으기](https://www.acmicpc.net/problem/16198)

기존 배열에서 에너지 구슬을 삭제한 다음 다시 복구하는 걸 떠올리지 못했다. 얼렁뚱땅 구현은 했으나 그 부분이 헷갈려서 조금 시간이 걸렸던 문제.

```python
n = int(input())
weights = list(map(int, input().split()))
result = 0

def search(num):
    global result
    if len(weights) == 2:
        result = max(result, num)

    for i in range(1, len(weights) - 1):
        target = weights[i - 1] * weights[i + 1]
        v = weights.pop(i)
        search(num + target)
        weights.insert(i, v)

search(0)
print(result)
```

&nbsp;

#### 🖋 14569 시간표 짜기

[백준 14569 시간표 짜기](https://www.acmicpc.net/problem/14569)

입력 받을 때 부터 복잡한 문제. 파이썬이라 그저 배열로 받을 수 있지만, 다른 언어도 이렇게 간다한게 입력을 받을 수 있나? C++도 만진지 좀 오래되어서 기억이 나지 않는다.

아무튼... 과목이 배정된 시간들과 학생들의 비어있는 교시를 비교해서, 각 과목 교시 전체가 비어있는 교시에 포함될 때를 세어주면 된다. 하나하나 체크하는 코드를 짜려고 하니 복잡하기도 하고 비효율적일 것 같아서 차집합을 떠올렸다. 과목 - 비어있는 교시 했을 때 요소가 0개이면 전체를 다 들을 수 있다는 것이기 때문이다. 사실 이 부분을 어떻게 구현해야하는지 감이 오지 않아서 검색해보았고 set()를 사용하면 된다는 걸 알게 되었다. 리스트를 집합형으로 바꿔서 차집합을 구해주고, 이 개수를 세어주었다.

```python
n = int(input())
lessons = []

for _ in range(n):
    temp = list(map(int, input().split()))
    lessons.append(temp[1:])

m = int(input())
students = []

for _ in range(m):
    temp = list(map(int, input().split()))
    students.append(temp[1:])

for student in students:
    result = 0
    for lesson in lessons:
        if len(list(set(lesson) - set(student))) == 0:
            result += 1

    print(result)
```

&nbsp;

#### 🖋 2943 토끼

[백준 2943 토끼](https://www.acmicpc.net/problem/2943)

푸는 중...
