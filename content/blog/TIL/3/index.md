---
title: "[TIL] 비동기"
date: "2023-04-06T21:41:00.000Z"
description: TIL 비동기
category: ["TIL", "All"]
thumbnail: "/images/content/TIL/3_1.png"
---

![Thumbnail](./1.png)

# 📚 비동기

## 🍭 동기와 비동기

### 동기 (synchronous)

JavaScript의 동기 처리란 '특정 코드의 실행이 완료될 때까지 기다리고 난 후 다음 코드를 수행하는 것'을 의미한다.

![](https://velog.velcdn.com/images/wlsdk0313/post/7a1f152b-86d3-4d5f-bcf4-acb9aa9a24ad/image.png)

### 비동기 (asynchronous)

JavaScript의 비동기 처리는 '특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드들을 수행하는 것'을 의미한다.

![](https://velog.velcdn.com/images/wlsdk0313/post/b4d0fccc-79ec-4a62-8418-ff86e51ae80d/image.png)

### JavaScript의 작동원리

JavaScript는 싱글 스레드 기반으로 동작하는 언어이므로, 동기적으로 작동한다.
그러나 JavaScript가 작동하는 런타임에서 비동기 처리를 도와주기 때문에 특별한 작없없이 비동기 처리를 할 수 있다.

## 🍭 비동기 JavaScript

### 타이머 관련 API

#### setTimeout(callback, millisecond)

일정 시간 후에 함수를 실행

> - 매개변수(parameter)
>   - callback : 실행할 콜백 함수
>   - millisecond : 콜백 함수 실행 전 기다려야 할 시간 (밀리초)
> - return 값 : 임의의 타이머 ID

```js
setTimeout(function () {
  console.log("1초 후 실행");
}, 1000);
```

#### clearTimeout(timerId)

setTimeout 타이머를 종료

> - 매개변수(parameter)
>   - timerId : 타이머 ID
> - return 값 : 없음

```js
const timer = setTimeout(function () {
  console.log("10초 후 실행");
}, 10000);
clearTimeout(timer);
```

### setInterval(callback, millisecond)

일정 시간의 간격을 가지고 함수를 반복적으로 실행

> - 매개변수(parameter)
>   - callback : 실행할 콜백 함수
>   - millisecond : 반복적으로 함수를 실행시키기 위한 시간 간격 (밀리초)
> - return 값 : 임의의 타이머 ID

```js
setInterval(function () {
  console.log("1초마다 실행");
}, 1000);
```

### clearInterval(timerId)

setInerval 타이머를 종료

> - 매개변수(parameter)
>   - timerId : 타이머 ID
> - return 값 : 없음

```js
const timer = setInterval(function () {
  console.log("1초마다 실행");
}, 1000);
clearInterval(timer);
```

## 🍭 Callback

비동기로 작동하는 코드를 제어할 수 있는 방법 중 하나는 Callback함수를 활용하는 것이다. Callback함수로 비동기를 동기화할 수 있다.
그러나 Callback 함수를 통해 비동기 코드의 순서를 제어할 수 있지만, 코드가 길어질 수록 복잡해지고 가독성이 낮아지는 Callback Hell이 발생하는 단점이 있다.

## 🍭 Promise, Async/Await

비동기로 작동하는 코드를 제어할 수 있는 다른 방법은 Promise를 활용하는 것이다. 이는 Callback Hell을 방지할 수 있다.

### Promise

#### new Promise

Promise는 class이므로, new 키워드를 통해 생성한다. 또한, 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데, 이 함수는 resolve, reject 함수를 인수로 전달받는다. Promise객체가 생성되면 콜백함수는 자동으로 실행되고 작성했던 코드들이 작동된다. 코드가 정상적으로 처리되면 resolve 함수를 호출하고, 에러가 발생했을 때는 reject 함수를 호출한다.

```js
let promise = new Promise((resolve, reject) => {
  // 1. 정상적으로 처리됨
  resolve(value);
  // 2. 에러 발생
  reject(error);
});
```

#### Promise 객체의 내부 프로퍼티

new Promise가 반환하는 객체는 state, result 내부 프로퍼티를 갖는다. 직접 접근할 수는 없지만, .then, .catch, .finally메서드를 사용해 접근이 가능하다.

> - State
>   - 기본 상태는 pending(대기), 비동기 처리를 수행할 콜백함수가 성공적으로 작동하면 fulfilled로 변경되고 에러가 발생하면 rejected가 된다.
> - Result
>   - 처음은 undefined, 비동기 처리를 수행할 콜백함수가 성공적으로 작동하여 resolve(value)가 호출되면 value로, 에러가 발생하여 reject(error)가 호출되면 error가 된다.

### then, catch, finally

#### Then

콜백함수내에 작성했던 코드들이 정상적으로 처리되면 resolve 함수를 호출하고 .then 메서드로 접근할 수 있다.

```js
let promise = new Promise((resolve, reject) => {
  resolve("성공");
});

promise.then((value) => {
  console.log(value);
});
```

#### Catch

콜백함수에서 작성했던 코드들이 에러가 발생했을 경우에는 reject 함수를 호출하고, .catch 메서드로 접근할 수 있다.

```js
let promise = new Promise(function (resolve, reject) {
  reject(new Error("에러"));
});

promise.catch((error) => {
  console.log(error);
});
```

#### Finally

콜백함수에서 작성했던 코드들의 정상 처리 여부와 상관 없이 .finally 메서드로 접근할 수 있다.

```js
let promise = new Promise(function (resolve, reject) {
  resolve("성공");
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("성공이든 실패든 작동!");
    // 무조건 실행
  });
```

### Promise chaining

Promise chaining이 필요한 경우는 비동기 작업을 순차적으로 해야할 때이다.이것이 가능한 이유는 .then, .catch, .finally 메서드들이 Promise를 리턴하기 때문이다. .then을 통해 연결할 수 있다.

### Promise.all()

Promise.all()은 여러개의 비동기 작업을 동시에 처리하고 싶을 때 사용한다. 인자로는 배열을 받는데, 해당 배열에 있는 모든 Promise가 정상적으로 처리되면 결과를 배열에 저장해 새로운 Promise를 반환한다.

Promise chaining을 사용할 경우, 순차적으로 동작하기 때문에 느리고 같은 코드가 중복되는 현상도 발생하는데, Promise.all()은 빠르고, 코드가 간결해진다.

Promiseall()은 인자로 받는 배열에 있는 Promise 중 하나라도 에러가 발생하면 즉시 종료되고 더이상 작동하지 않는다.

```js
Promise.all([promiseOne(), promiseTwo(), promiseThree()])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
```

### Promise Hell

Promise를 통해 비동기 코드의 순서를 제어할 수 있지만, Callback 함수와 같이 코드가 길어질수록 복잡해지고 가독성이 낮아지는 Promise Hell이 발생할 수 있다.

### Async/Await

async/await 키워드로 복잡한 Promise 코드를 간결하게 작성할 수 있다. await 키워드가 동작하고 나서야 다음 순서의 코드가 작동한다.

```js
const arrowFunc = async () => {
  await 코드
  ...
}
```
