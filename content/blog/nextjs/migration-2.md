---
title: "React에서 Next.js로 Migration(EP2: 과연 이게 올바른 선택일까? feat. Auth)"
date: 2023-03-28 18:10:55
category: "nextjs"
description: next.js에서 httponly쿠키를 어떻게 다룰까에 관한 이야기입니다.
thumbnail: https://velog.velcdn.com/images/_woogie/post/314139d3-923c-41d9-bc0e-3caf708f277c/image.gif
---

이번 EP2은 Next.js에서 어떻게 Auth를 처리했는지에 관한 이야기입니다.

<br/>

## Auth 분석

Next.js를 기반으로하는 새로운 프로젝트 V2가 시작되고 제가 진행한 일은 Auth였습니다. 당장 유저정보를 불러와 GNB에 그리고 싶었거든요.

> 내 유저 정보를 어떻게 알죠?
내가 누군지 정보를 담아서 Call하면 되죠!
그러면 정보를 어떻게 담죠?

### Bearer Authentication

프로덕트는 Bearer Authentication방식으로 개발되었습니다. 인증에 필요한 token은 로그인시에 쿠키로 발급받습니다. Login page는 V1에서 유지했는데요. 도메인이 같기 때문에 발급받은 token이 담긴 Cookie를 어떻게 다룰 것인가가 가장 중요한 문제였습니다. 왜냐하면 Cookie는 `httpOnly` 거든요.

> 참고로 서브도메인에 대한 보안상의 이유로 credential로 처리하지 않았습니다.

### HttpOnly🍪

다들 알고 계시듯이 httponly쿠키는 **브라우저에서 접근이 불가**능합니다. 이 말은 다시 생각해보면 클라이언트단에서 유저가 무언가 요청할 때 쿠키를 가져와 Bearer에 실을 수 없다는 말과 같습니다. 그러면 유저 정보를 가져오거나 혹은 권한이 필요한 요청을 할 수 없습니다.

<br/>

## 쿠키를 가져오자!

> 브라우저 환경에서 가져올 수 없다면 node환경에서는 되겠구나!

### Node

Next.js로 개발하고 있었기 때문에 node환경을 찾는건 어렵지 않았습니다. [Data-Fetching](https://nextjs.org/docs/basic-features/data-fetching/overview)시점에 context를 활용하면 request속에 담긴 쿠키를 가져오는 건 어렵지 않았기 때문이죠. 그러면 여러 data-fetching중 어떤 것을 사용해야할지 고민했습니다.

### getInitialProps

가장 먼저 고민했던 부분은 `어떤 페이지에 접속하든`이었습니다. 해당 페이지가 SSR이든 CSR이든 쿠키를 가져와 클라이언트단에서 사용할 수 있어야했거든요. 그래서 처음 생각이 난 곳은 `_app`이었습니다. 모든 페이지를 initial하는 곳이기 때문이죠. 
`_app`에서는 data-fetching-methods 중 유일하게 `getInitialProps`만을 사용할 수 있었습니다. 해당 메소드에서 제공되는 context argument에서 httpOnly쿠키를 가져올 수 있었습니다.

> 뭐야 끝난건가?

그러나 문제가 있었습니다.
일단 `getInitialProps`는 번들링될 때 컴포넌트와 분리되지 않습니다. 다시말해 클라이언트단에서도 해당 코드가 실행됩니다. 그래서 클라이언트단에서 실행될 때는 예외처리가 필요합니다(쿠키를 가져올 수 없을테니까요). 또한 어떤 페이지에서 SSR이 필요해 `getServerSideProps`를 사용했다면 `_app`에서 빼낸 token(getInitialProps로부터 가져온)을 전달할 수 없습니다. 만약 SSR페이지에서 `getInitialProps`를 사용하면 처리할 수 있지만 위에서 언급한대로 번들링 때 포함돼 불필요하게 파일 사이즈가 커집니다. 그럼에도 `getServerSideProps`를 사용하려면 따로 ctx에서 쿠키를 가져오는 로직이 필요하게되어 코드가 중복 존재하게됩니다. 또한 [ASO](https://nextjs.org/docs/advanced-features/automatic-static-optimization)를 사용할 수 없는 이유 등으로 다른 방법을 찾아보게 되었습니다.

### getServerSideProps

`getInitialProps`의 문제를 봤을 때 node환경(server)에서만 실행되어야 한다는 조건이 붙으면 좋겠다는 생각을 했습니다. 그렇다면 접근하기 가장 쉬운방법은 `getServerSideProps`를 사용하는 방안이었습니다. 그런데 `_app`에서는 `getServerSideProps`를 사용할 수 없습니다. 그리하여 조금은 괴랄(?)하지만 모든 페이지에 `getServerSideProps`를 사용하면 되는거 아니야?라는 생각을 하게됩니다. 

<br/>

## PrepareServerSideProps

이제 getServerSideProps를 감싼 Util을 제작하기에 이릅니다.

> 당시에는 최선의 고민이었습니다.
이어서 연재할 "어떻게 수정했는지"까지 지켜봐주세요!
> 

해당 Util은 다음과 같은 작업순서를 가집니다.

### Cookie

원래의 목표 httpOnly쿠키를 먼저 가져와야 했습니다. 그래야 해당 쿠키로 Bearer에 실어서 요청할 수 있을테니까요. `getServerSideProps`의 argument로 부터 쿠키를 너무나 쉽게 가져올 수 있었습니다.

> 쿠키로부터 가져온 토큰을 저장할 store는 추후에 작성할 예정입니다. 
이번 글은 httpOnly쿠키를 어떻게 꺼낼까에 초점을 맞춰주시면 됩니다.

### User

쿠키를 가져왔으니 그 다음은 유저정보를 가져왔습니다. 유저정보를 get해온 이유는 프로덕트에 유저가 가질 수 있는 여러 역할이 있었기 때문입니다. 이 역할이 페이지의 접근을 제한하기 때문입니다. 

### Routing

이제는 가져온 유저정보를 바탕으로 routing을 처리해줬습니다. 해당 페이지에 접근할 수 있는지 없는지, 만약 접근할 수 없다면 `redirect`객체를 early return하여 페이지의 접근을 막았습니다. 이를 통해 접근할 수 없는 정보에 대해서도 미리 처리하면서 동시에 페이지의 접근을 막았습니다.

### Fetch

이제 코드가 해당 부분까지 진행되면 페이지를 구성하는데에 필요한 정보를 가져오는 fetch를 진행합니다. fetch가 완료되면 불러온 정보를 props로 내려주게됩니다.

### Code

이로써 `prepareServerSideProps`함수는 `getServerSideProps`에 알맞은 return 객체를 반환하는 함수가 됩니다. 개략적인 코드는 다음과 같습니다.

```tsx
const prepareServerSideProps =
  ({ getServerSidePropsFunc, accessibleRoles }) =>
	async (ctx) => {
		const token = getCookie(ctx);
		const user = await getUser(token);
		if (!accessibleRoles.includes(user.role)) {
			return {
				redirect: {
          destination: '/403',
          permanent: false,
        },
			}
		}
		const data = await getServerSidePropsFunc(token);
		return {
			props: {
				data,
				token,
			},
		}
	};

// 사용부 pages/index.tsx
const HomePage = () => {
	return <HomeComponent />
};

export const getServerSideProps = prepareServerSideProps({
	accessibleRoles: ['admin'],
});
```

## 이게 최선이니?

작업을 하면서 매 순간 고민했습니다. 
이게 맞을까?
이렇게 하면 next서버에 부하가 크지 않을까?
꼭 모든 페이지가 SSR이어야 할까?
그래서 여러 고민을 통해 조금 더 나은 방식으로 수정했습니다. 어떻게 수정했는지는 다음화에 이어 작성하겠습니다. 
