이번 EP3은 Next.js로 넘어가며 상태관리를 어떻게 했는가에 관한 이야기입니다.

<br/>

## 분석

기존 React App에서는 상태관리를 자체적으로 만들어 사용했습니다.  `redux`를 래핑해서 devTool의 장점을 살린 `ORM`이었는데요. 굉장히 파워풀했습니다. history를 구독해 페이지별 index를 관리하면서도 데이터를 normalize하여 불필요한 fetch또한 제어할 수 있었습니다. 마치 웹을 모바일 앱처럼 작동시킬 수 있었죠.

그런데 Next.js로 변경하면서 [대부분의 페이지를 SSR로 처리](https://velog.io/@_woogie/React%EC%97%90%EC%84%9C-Next.js%EB%A1%9C-MigrationEP2-%EA%B3%BC%EC%97%B0-%EC%9D%B4%EA%B2%8C-%EC%98%AC%EB%B0%94%EB%A5%B8-%EC%84%A0%ED%83%9D%EC%9D%BC%EA%B9%8C-feat.-Auth#getserversideprops)하기에 이릅니다. 그러다보니 매 페이지마다 fetch를 해야해 결국 기존의 자체상태관리 라이브러리는 더 이상 필요가 없다고 느껴졌습니다. 

> 애초에 해당 라이브러리는 오픈소스가 아니어서 유지보수나 DOCS 관리 등에 어려움이 있었습니다.

더불어 백엔드가 `REST` 기반에서 `GraphQL`기반으로 web API가 변화함에 따라 프론트 상태관리에도 변화의 바람이 불게됩니다.

<br/>

## GraphQL

### 라이브러리

먼저 GQL로 변경됨에 따라 GQL라이브러리에 대해 고민하게됩니다. 모두가 그렇듯 Apollo, Relay, urql 3가지를 놓고 고민했습니다. 아무래도 relay나 urql은 자료가 적었는데요, 반면 Apollo에서는 정규화도 지원하고 정보도 많이 있었기에 Apollo로 결정되는 듯 했습니다.

그러나 여전히 REST형태로 처리되는 API가 있다는 점에서 상태관리에 둘 이상의 라이브러리를 사용하는데에 반감을 가지게 되었습니다. 그래서 `react-query`로 눈을 돌리게 됩니다. 또한 정규화도 필요하지 않았구요.

### React-query

react-query는 REST와 GQL모두 처리가 가능했습니다. GQL은 [graphql-request](https://www.npmjs.com/package/graphql-request)를 사용하긴 했지만 꼭 필요하진 않습니다.(POST method로 올바른 query를 담아 보내면 됩니다.)

> 추후에는 [graphQL config](https://the-guild.dev/graphql/config)와 [codegen](https://the-guild.dev/graphql/codegen)을 사용해서 타입을 관리했습니다.
> 

또한 data캐싱과 서버상태 업데이트의 편의성 등 좋은 개발경험으로 인해 선택하게 되었습니다. 또한 [Next.js와 함께 사용하는 법](https://tanstack.com/query/v4/docs/react/examples/react/nextjs)등 DOCS를 통해 많은 정보를 제공하고 있었습니다.

추가적으로 react-query를 전역상태관리로 사용하기로 결정했습니다. 앞선 상태관리를 위해 여러개의 라이브러리를 사용하지 않는 결정이 이어진 것이죠. 값을 관리하기 위한 도구가 하나로 통일되면 편하지 않느냐는 의견이었습니다. 또한 react-query내에서도 [전역상태관리로 사용하는데 문제는 없다](https://tanstack.com/query/v4/docs/react/guides/does-this-replace-client-state)고 설명하기도 했기에 일단 빠르게 시도해봤습니다.

<br/>

## 문제점

### 전역상태관리

전역상태관리로 react-query는 문제가 있었습니다. 먼저 프로덕트 전반에 필요한 메타데이터를 받아오는 작업일 경우 페이지 접근 당 한 번만 필요합니다. 만약에 SSR이 필요한 페이지라면 `getServerSideProps`에서 처리하게됩니다. 그리고 이 때 `staleTime`과 `cacheTime`을 `Infinity`로 설정했습니다. 왜냐면 한 번만 요청하면 되는 데이터고 페이지가 동작하는 동안 바뀔 일이 없는 데이터니까요. 그런데 페이지가 정상적으로 그려지고 react-query devtool로 해당 상태를 살펴보면 5분으로 초기화됩니다. 

이 때 클라이언트에서 useQuery를 통해 올바른 `key`와 `queryFunction`을 넣는다면 문제없이 작동할 겁니다. 그런데 개념상 한 번 만 호출해도 존재할 거라는 생각에 `getQueryData`를 사용했는데요, 이 때 페이지 유지 기간이 5분 지나면 에러가 발생했습니다. 제가 생각하기에 페이지의 사이클동안 전역상태로 관리하는 것과 react-query와는 많이 달랐습니다.

> 나중에 찾아보니 react-query의 maintainer인 Tkdodo는 전역상태관리로의 사용을 원하지 않더군요. 😢
> 

![](https://velog.velcdn.com/images/_woogie/post/c07335e1-d33d-43ca-acbd-7949afa8f533/image.png)

<br/>

## 전역상태관리 도입(zustand)

전역상태관리가 필요함을 깨닫고 라이브러리 테스트했습니다. ~~redux는 절대 안됩니다.~~ `zustand`, `recoil`, `jotai` 3가지 라이브러리를 비교했습니다. 기존에 사용하던 redux와 비슷하고 devtool을 사용할 수 있는 zustand로 선택하였습니다. 다른 라이브러리는 일단 atom store에 대한 이해도가 적었고, recoil의 메이저 버전 등의 이유로 금방 결정되었습니다.

> 추후에 연재할 현업에서 채팅기능을 개발한 이야기에서 zustand를 어떻게 사용했는지 다뤄보겠습니다.

<br/>

## 결론

이로써 Next.js를 사용하며 어떻게 전역관리를 했는지까지 다뤄보았습니다. REST와 GraphQL을 함께 사용했기 때문에 react-query는 좋은 선택이었습니다. 전역 상태관리를 추후에 필요에 의해서 도입한 것 또한 좋은 선택이었다고 생각합니다. 덕분에 server-data, client-data에 대한 이해와 react-query에 대한 컨셉을 더욱 제대로 이해할 수 있었습니다.
> 일단 시도해봅시다!