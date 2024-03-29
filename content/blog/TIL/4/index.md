---
title: "[TIL] 네트워크"
date: "2023-04-07T21:41:00.000Z"
description: TIL 비동기
category: ["TIL", "All"]
thumbnail: "/images/content/TIL/4_1.png"
---

![Thumbnail](./1.png)

# 📚 웹 애플리케이션 아키텍처

## 🍭 클라이언트 - 서버 아키텍처

서버는 영어 단어 그대로 제공하는 주체를 의미한다.

### 클라이언트 - 서버 아키텍처

어떠한 리소스가 존재하는 곳과 리소스를 사용하는 앱을 분리시킨 것을 2티어 아키텍처, 또는 클라이언트 - 서버 아키텍처라고 부른다. 리소스를 사용하는 앱이 '클라이언트', 리소스를 제공(serve)하는 곳이 '서버'이다. 클라이언트와 서버는 요청과 응답을 주고받는 관계로 요청이 선행되고 그 후에 응답이 온다.

### 3-Tier 아키텍처

일반적으로 서버는 리소스를 전달해주는 역할을 담당한다. 리소스를 저장하는 공간을 별도로 마련해두는데, 이 공간이 '데이터베이스'이다. 기존 2티어 아키텍처에 데이터베이스가 추가된 형태를 3티어 아키텍처라고 한다.

### 프론트엔드와 백엔드

클라이언트 앱은 사용자가 눈으로 보고 대면하기에, 프론트엔드 영역이라고 한다. 서버 앱은 사용자 눈에 직접 보이지 않게 뒤에서 작동하므로, 백엔드 영역이라고 한다.

### 클라이언트와 서버 종류

클라이언트는 보통 플랫폼에 따라 구본된다.

> - 웹사이트 (웹 앱)
> - 스마트폰 / 태블릿용 앱
> - 데스크탑 앱

서버는 무엇을 하느냐에 따라 종류가 달라진다.

> - 웹 서버 : 웹사이트에서 필요로 하는 정보들을 제공
> - 파일 서버 : 파일 제공
> - 메일 서버 : 메일을 주고 받을 수 있도록 도와줌
> - 데이터베이스 : 데이터 제공자로서 일하므로 일종의 서버로 봄

## 🍭 클라이언트 - 서버 통신과 API

### 클라이언트와 서버의 통신

클라이언트 - 서버 아키텍처에서는 서버 마음대로 클라이언트에 리소스를 전달하지 않는다. 요청이 있어야 응답이 온다.

### 프로토콜 (Protocol)

프로토콜은 통신 규약, 즉 약속이다.

#### 웹 애플리케이션 프로토콜: HTTP

웹 애플리케이션 아키텍처에서는 클라이언트와 서버가 서로 HTTP라는 프로토콜을 이용해서 서로 대화를 나눈다. HTTP를 이용해 주고받는 메시지는 "HTT 메시지"라고 불린다.

### API

API(Application Programming Interface)는 서버가 클라이언트에게 리소스를 잘 활용할 수 있도록 제공하는 인터페이스(interface)이다.

### HTTP 메서드의 종류

- 조회 (Read): GET
- 추가 (Create): POST
- 갱신 (Update): PUT 또는 PATCH
- 삭제 (Delete): DELETE

# 📚 브라우저의 작동 원리 (보이지 않는 곳)

## 🍭 URL과 URI

URL은 Uniform Resource Locator의 줄임말로, 네트워크 상에서 웹 페이지, 이미지, 동영상 등의 파일이 위치한 정보를 나타낸다. URL은 scheme, hosts, url-path로 구분된다.

URI는 Uniform Resource Identifier의 줄임말로, 일반적으로 URL의 기본요소인 scheme, hosts, url-path에 더해 query, fragment를 포함한다.

### scheme

통신 프로토콜

`file://`, `http://`, `https://`

### hosts

웹 페이지, 이미지, 동영상 등의 파일이 위치한 웹 서버, 도메인 또는 IP

`127.0.0.1`, `www.google.com`

### post

웹 서버에 접속하기 위한 통로

`:80`, `:443`, `:3000`

### url-path

웹 서버의 루트 디렉토리로부터 웹 페이지, 이미지, 동영상 등의 파일의 위치까지의 경로

`/search`, `/Users/username/Desktop`

### query

웹 서버에 전달하는 추가 질문

`q=JavaScript`

### fragment

일종의 북마크 기능을 수행한다. 특정 HTML 요소의 id를 전달하면 해당 요소가 있는 곳으로 스크롤을 이동할 수 있다.

## 🍭 IP와 포트

### IP

IP는 Internet Protocol의 줄임말로, 인터넷상에서 사용하는 주소체계를 의미한다. 인터넷에 연결된 모든 PC는 IP 주소체계를 따라 네덩이의 숫자로 구분된다. 이렇게 네 덩이의 숫자로 구분된 IP 주소체계를 IPv4라고 한다.

IPv4는 각 덩어리마다 0부터 255까지 나타낼 수 있다. 따라서 2^(32)인 약 43억 개의 IP 주소를 표현할 수 있습니다. 몇 가지는 특정 용도가 있기 때문에 기억해야 한다.

> - localhost, 127.0.0.1 : 현재 사용 중인 로컬 PC
> - 0.0.0.0, 255.255.255.255 : broadcast address, 로컬 네트워크에 접속된 모든 장치와 소통하는 주소

인터넷 보급률이 높아지고 IPv4로 할당할 수 있는 PC가 한계를 넘어서게 되면서, IPv6이 나왔고, 2^(128)개의 IP주소를 표현할 수 있게 되었다.

### PORT

PORT는 IP주소가 가리키는 PC에 접속할 수 있는 통로(채널)를 의미한다.

포트 번호는 0-65535까지 사용할 수 있다. 그중 0-1024번 포트는 주요 통신을 위한 규약에 따라 이미 정해져있다.

> - 22: SSH
> - 80: HTTP
> - 443: HTTPS

## 🍭 도메인과 DNS

### Domain name

IP 주소를 대신하여 사용하는 주소로, 한눈에 파악하기 힘든 IP 주소를 보다 간단하게 나타낼 수 있다.

### DNS

네트워크 상에 존재하는 모든 PC는 IP 주소가 있다. 그러나 모든 주소가 도메인 이름을 가지는 것은 아니고 도메인 이름을 일정 기간 동안 대여하여 사용한다. 따라서 브라우저의 검색창에 도메인 이름을 입력해 해당 사이트로 이동하기 위해서는 해당 도메인 이름과 매칭된 IP 주소를 확인하는 작업이 반드시 필요하다. 네트워크에는 이 작업을 위한 서버가 별도로 있는데 이를 DNS(Domain Name System)이라고 한다.
