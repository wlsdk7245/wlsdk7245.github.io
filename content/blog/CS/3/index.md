---
title: "[CS] 네트워크의 기초"
date: "2023-04-19T13:41:00.000Z"
description: 면접을 위한 CS 전공지식 노트
category: ["CS", "All"]
thumbnail: "/images/content/CS/2_1.png"
---

![Thumbnail](./1.png)

# 🍀 네트워크의 기초

네트워크란 노드와 링크가 서로 연결되어 있으며 리소스를 공유하는 집합을 의미한다. 여기서 노드란 서버, 라우터, 스위치 등 네트워크 장치를 의미하며 링크는 유무선을 의미한다.

## 1. 처리량과 지연 시간

좋은 네트워크란 많은 처리량을 처리할 수 있으며 지연 시간이 짧고 장애 빈도가 적으며 좋은 보안을 갖춘 네트워크를 말한다.

### 처리량

처리량(throughput)이란 링크를 통해 전달되는 단위 시간당 데이터양을 말한다. 단위로는 bps(bits per second)를 쓴다. 처리량은 사용자들이 많이 접속할 때마다 커지는 트래픽, 네트워크 장치 간의 대역폭, 네트워크 중간에 발생하는 에러, 장치의 하드웨어 스펙에 영향을 받는다.

> 대역폭 : 주어진 시간 동안 네트워크 연결을 통해 흐를 수 있는 최대 비트 수

### 지연 시간

지연 시간(latency)이란 요청이 처리되는 시간을 말하며 어떤 메시지가 두 장치 사이를 왕복하는 데 걸린 시간을 말한다. 지연 시간은 매체 타입(무선, 유선), 패킷 크기, 라우터의 패킷 처리 시간에 영향을 받는다.

## 2. 네트워크 토폴로지와 병목 현상

### 네트워크 토폴로지

네트워크 토폴로지(network topology)는 노드와 링크가 어떻게 배치되어 있는지에 대한 방식이자 연결 형태를 의미한다.

#### 트리 토폴로지

트리(tree) 토폴로지는 계층형 토폴로지라고 하며 트리 형태로 배치한 네트워크 구성을 말한다. 노드의 추가, 삭제가 쉬우며 특정 노드에 트래픽이 집중될 때 하위 노드에 영향을 끼칠 수 있다.

#### 버스 토폴로지

버스(bus) 토폴로지는 중앙 통신 회선 하나에 여러 개의 노드가 연결되어 공유하는 네트워크 구성을 말하며 근거리 통신망(LAN)에 사용한다. 설치 비용이 적고 신뢰성이 우수하며 중앙 통신 회선에 노드를 추가하거나 삭제하기 쉽다. 그러나 스푸핑이 가능하다.

> - 스푸핑은 LAN 상에서 송신부의 패킷을 송신과 관련 없는 다른 호스트에 가지 않도록 하는 스위칭 기능을 마비시커가 속여서 특정 노드에 해당 패킷이 오도록 처리하는 것을 말한다.

#### 스타 토폴로지

스타(star, 성형) 토폴로지는 중앙에 있는 노드에 모두 연결된 네트워크 구성을 말한다. 노드를 추가하거나 에러를 탐지하기 쉽고 패킷의 충돌 발생 가능성이 적다. 또한 어떠한 노드에 장애가 발생해도 쉽게 에러를 발견할 수 있고 장애 노드가 중앙 노드가 아닐 경우 다른 노드에 영향을 끼치는 것이 적다. 하지만 중앙 노드에 장애가 발생하면 전체 네트워크를 사용할 수 없고 설치 비용이 고가이다.

#### 링형 토폴로지

링형(ring) 토폴로지는 각각의 노드가 양 옆의 두 노드와 연결하여 전체적으로 고리처럼 하나의 연속된 길을 통해 통신을 하는 망 구성 방식이다. 데이터는 노드에서 노드로 이동을 하게 되며, 각각의 노드는 고리 모양의 길을 통해 패킷을 처리한다. 노드 수가 증가되어도 네트워크상의 손실이 거의 없고 충돌이 발생되는 가능성이 적고 노드의 고장 발견을 쉽게 찾을 수 있다. 하지만 네트워크 구성 변경이 어렵고 회선에 장애가 발생하면 전체 네트워크에 영향을 크게 끼친다.

#### 메시 토폴로지

메시(mesh) 토폴로지는 망형 토폴로지라고도 하며 그물망처럼 연결되어 있는 구조이다. 한 단말 장치에 장애가 발생해도 여러 개 경로가 있어서 네트워크를 계속 사용할 수 있고 트래픽도 분산 처리가 가능하다. 하지만 노드의 추가가 어렵고 구축 비용과 운용 비용이 고가이다.

### 병목 현상

토폴로지가 중요한 이유는 병목 현상을 찾을 때 중요한 기준이기 때문이다.

병목(bottleneck) 현상이란 전체 시스템의 성능이나 용량이 하나의 구성 요소로 인해 제한을 받는 현상을 말한다. 서비스에서 이벤트를 열었을 때 트래픽이 많이 생기고 그 트래픽을 잘 관리하지 못하면 병목 현상이 생겨 사용자는 웹 사이트로 들어가지 못한다.

## 3. 네트워크 분류

네트워크는 규모를 기반으로 분류할 수 있다.

### LAN

LAN(Local Area Network)은 근거리 통신망을 의미하며 같은 건물이나 캠퍼스 같은 좁은 공간에서 운영된다. 전송 속도가 빠르고 혼잡하지 않다.

### MAN

MAN(Metropolitan Area Network)은 대도시 지역 네트워크를 나타내며 도시 같은 넓은 지역에서 운영된다. 전송 속도는 평균이며 LAN보다는 더 많이 혼잡하다.

### WAN

WAN(Wide Area Network)은 광역 네트워크를 의미하며 국가 또는 대륙 같은 더 넓은 지역에서 운영된다. 전송 속도는 낮으며 MAN보다 더 혼잡하다.

## 4. 네트워크 성능 분석 명령어

네트워크 병목 현상의 주된 원인은 네트워크 대역폭, 네트워크 토폴로지, 서버 CPU, 메모리 사용량, 비효율적인 네트워크 구성 등이 있다. 이때는 네트워크 관련 테스트와 네트워크와 무관한 테스트를 통해 '네트워크로부터 발생한 문제점'인 것을 확인한 후 네트워크 성능 분석을 해봐야 한다.

### ping

ping(Packet INternet Groper)은 네트워크 상태를 확인하려는 대상 노드를 향해 일정 크기의 패킷을 전송하는 명령어이다. 이를 통해 해당 노드의 패킷 수신 상태와 도달하기까지 시간 등을 알 수 있으며 해당 노드까지 네트워크가 잘 연결되어 있는지 확인할 수 있다. ping은 TCP/IP 프로토콜 중에 ICMP 프로토콜을 통해 동작한다.

`ping [IP 주소 또는 도메인 주소]`로 실행한다.

### netstat

netstat 명령어는 접속되어 있는 서비스들의 네트워크 상태를 표시하는 데 사용되며 네트워크 접속, 라우팅 테이블, 네트워크 프로토콜 등 리스트를 보여준다. 주로 서비스의 포트가 열려 있는지 확인할 때 쓴다.

### nslookup

nslookup은 DNS에 관련된 내용을 확인하기 위해 쓰는 명령어이다. 특정 도메인에 매핑된 IP를 확인하기 위해 사용한다.

### tracert

윈도우에서는 tracert이고 리눅스에서는 traceroute라는 명령어로 구동된다. 목적지 노드까지 네트워크 경로를 확인할 때 사용하는 명령어이다. 목적지 노드까지 구간들 중 어느 구간에서 응답 시간이 느려지는지 등을 확인할 수 있다.

> 이외에도 ftp를 통해 대형 파일을 전송하거나 테스팅하거나 tcpdump를 통해 노드로 오고 가는 패킷을 캡처하는 등의 명령어가 있으며 네트워크 분석 프로그램으로는 wireshark, netmon이 있다.

> 출처 : 면접을 위한 CS 전공지식노트
