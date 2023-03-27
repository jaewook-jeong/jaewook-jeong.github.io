---
title: "React에서 Next.js로 Migration(EP1: 누구나 피치 못할 사정이 있다)"
date: 2023-03-27 19:07:13
category: "nextjs"
description: React에서 Next.js로 Migration한 경험에 대한 글입니다.
thumbnail: https://velog.velcdn.com/images/_woogie/post/e5a1591c-5d5e-40b2-93cd-e1c72daad9ef/image.jpg
---


> 현업에서 [React](https://react.dev/)에서 [Next.js](https://nextjs.org/)로 어떻게 migration을 했는지에 대해 연재를 시작합니다.
그 때 당시의 상황설명과 의사결정 과정에 초점을 맞춰 작성했습니다. 
누군가의 의사결정에 조금의 도움이 되길 바라며.

이번 EP1은 **어떻게** Next.js로 migration하게 되었는지에 관한 이야기입니다.

<br/>

## 발단
![](https://velog.velcdn.com/images/_woogie/post/e5a1591c-5d5e-40b2-93cd-e1c72daad9ef/image.jpg)
### 기존 React app 분석

꽤 오래전 Next.js가 대세가 아닐 시절에 프로덕트는 시작되었습니다. 그러다보니 React로만 SSR을 직접 처리했습니다. 동작방식은 글로 작성하니 꽤 간단해보이는데요,

Next.js처럼 먼저 express 서버를 띄웁니다.
요청이 들어오면 페이지 구성에 필요한 데이터를 fetch 후 redux store 형태에 알맞게 가공합니다.
가공된 데이터를 encode하고 string화합니다.
해당 데이터를 변수로 가지고 있는 `script tag`를 만드는데요, 이 때 `text HTML`로 만들어둡니다.
또한 별도의 변수를 두어 해당 페이지가 SSR이 필요한지 HTML에 함께 내려주게됩니다.
이후에 클라이언트에서는 해당 파일을 받고 SSR 변수를 통해 true일 경우 ReactDOM의 `hydrate`를 사용하고 아닐경우에 ReactDOM의 `render` 메소드를 통해 그리게 됩니다.

~~간단하죠?~~

단순한 설명으로도 벌써 문제가 많이 있을 것 같습니다. 그래서 데이터가 외부에 직접 노출되지 않도록 난독화 부터 코드 스플리팅, cache, static file처리 등 웹페이지 서빙에 관한 모든 작업을 직접 처리했습니다.

### 회사의 성장

이렇게 React만으로도 꽤나 멋진 SSR환경을 제공했습니다. 그러나 회사가 성장하고 투자를 받으며 많은 프론트엔드 개발자가 입사하게 됩니다. 8명의 프론트엔드 팀이 되었고, 나중에는 각기 다른 스프린트에 참여하게 되었습니다. 이러다보니 자체적으로 만든 React App의 동작방식에 대한 이해의 시간은 부족하게 되었고 자연스레 프레임워크에 대한 수요가 생길 수 밖에 없었습니다. 

<Br/>

## 전개

Next.js의 선택은 당연한 수순이었습니다. 신규입사자들이 대부분 다뤄봤고 문제 발생시 많은 정보를 찾을 수 있었고 무엇보다 강력한 Docs가 있었기에 Next.js로의 migration은 결정되었습니다. 

### 어떻게 migration을 할까요?

먼저 현재의 app에 곧바로 Next.js를 이식해봤습니다. install하고 `_app`과 `_document`파일에 필요한 코드를 모두 옮겼습니다. `redux`부터 기존에 SSR시에 style을 위해 사용하던 `ServerStyleSheet`까지 최대한 옮겨보았습니다.

> 메인페이지를 띄우는 것까지는 대성공!
> 

그러나 기존에 render를 위해 express server에서 사용되던 코드에는 페이지를 구성하는데에 필수적인 코드가 많았는데요, 이에따라 여러 복합적인 문제가 발생했습니다. 이후에 여러 시도를 했지만 여전히 문제가 있었고  migration하는 동안 sprint가 진행될 수 없다는 점, 프론트 팀 전원이 참여할 필요가 없다는 이유 아래 새로운 레포지토리를 파는 방향으로 결정됩니다.

### V2

이로써 Next.js를 기반으로 하는 새로운 version, V2가 시작되었습니다. **기존 V1(react app)을 유지하면서 개발될 페이지들은 V2(Next.js)에서 개발되는 형식입니다.(V1페이지가 개발될 경우 V2로 Migration 후 개발)** 이렇게되면 하나의 도메인에서 2종류의 서버가 연결되어 있는 상태입니다. 그래서 임의의 URL이 들어왔을 때 알맞은 app에서 처리되도록 작업을 해줘야 했습니다. 기본적으로 CSR환경일 때는 만약 다른 app의 route일 경우 location.href를 변경해 완전히 새로운 페이지가 렌더되도록 처리했습니다. SSR환경일 때는 React에서는 기존에 express로 서버를 띄우고 있었기에 [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware)를 활용해 V2로 요청이 되도록 처리했으며, Next.js에서 또한 [Custom Server](https://nextjs.org/docs/advanced-features/custom-server)를 활용하여 V1으로 proxy되도록 처리했습니다.

사실 migration은 이제 시작입니다. 

<br/>

## 커밍쑨!

다음 에피소드는 Authentication과 Authorization에 관한 이야기입니다. 새로운 프로젝트에서 어떻게 권한을 확인하여 auth 요청을 보냈을까요?