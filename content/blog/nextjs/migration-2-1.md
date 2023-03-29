이번 EP2-1은 [EP2](https://velog.io/@_woogie/React%EC%97%90%EC%84%9C-Next.js%EB%A1%9C-MigrationEP2-%EA%B3%BC%EC%97%B0-%EC%9D%B4%EA%B2%8C-%EC%98%AC%EB%B0%94%EB%A5%B8-%EC%84%A0%ED%83%9D%EC%9D%BC%EA%B9%8C-feat.-Auth)에서 다뤘던 “Next.js에서 어떻게 Auth를 처리했는지”에서 **어떻게 보완했는지**에 관한 이야기입니다.


> 필요한 동작은 하지만, 이게 맞을까?

## 분석

앞선 EP2에서 언급했던 것 처럼 `prepareServerSideProps`는 많은 역할을 담당했습니다. 심지어 매 페이지 접근시 SSR으로 처리되며 사용자 경험 저하에 영향을 주었습니다. 
먼저 고민점을 해결하기 전에 먼저 util에 대해 분석을 했습니다. 

> prepareServerSideProps은 어떤 필요에 의해 만들었을까?

### Routing

페이지에 권한별 접근을 제한하는 것에 관한 기능이었습니다.

> 꼭 SSR시에 페이지 접근을 제한해야 하나요? 다른 방법은요?

접근을 제한한 페이지라면 SEO를 걱정할 필요가 없었습니다. 더욱이 서버에서 데이터를 fetching하여 미리 페이지를 그려줄 필요가 없었죠. 그러면 page내에서 `useEffect`에서 권한을 확인 후 `replace`처리를 해도 충분했습니다. 

> 필요하지 않겠군요!

### User

user정보 fetching은 `routing`을 위해서 필요한 동작이었습니다. 그런데 위에서 설명드린대로 `routing`이 꼭 필요한 기능이 아니니 해당 동작또한 불필요했습니다. 프로덕트상 GNB에 user정보가 꼭 미리 그려져야한다는 조건 또한 없었습니다. Suspense 등의 적당한 UI처리를 통해 충분히 보완할 수 있는 UI기도 하고요.

> 필요하지 않겠군요!

### Cookie

해당 util을 만든 가장 중요한 이유였습니다. httpOnly쿠키를 꺼내와야 했기 때문이죠. 

> 그렇다면 꼭 SSR에 가져와야 하는 이유가 있었나?

만약 node환경을 찾는다면? 만들어둔 `prepareServerSideProps`는 필요하지 않게될겁니다. 정말 SSR이 필요한 페이지에서는 `getServerSideProps`로 동작하겠죠.

### 결국 Cookie를 꺼내올 수만 있으면 이 util은 필요하지 않을겁니다.

<br/>


## 고민

cookie에 대해 고민하기전에 먼저 Next.js를 다시금 돌아봤습니다.

![](https://velog.velcdn.com/images/_woogie/post/62bf8811-36ce-48cb-83ec-cab490c9d35d/image.png)


먼저 위의 그림처럼 흐름을 그려봤습니다.

1. Next.js 서버로부터 클라이언트(브라우저)는 source를 받습니다. 미리 그려진 HTML일 수도 JS일 수도 image일 수도 있죠.
2. Next.js 서버는 data를 가져오기 위해 backend server에 요청합니다. 예를 들어 SSR 때를 상상해보세요!
3. 브라우저는 필요한 data를 가져오기 위해 backend server에 요청합니다.

> 어? 다시금 생각해보니 Next.js **서버**, **서버**입니다?!
> 

맞습니다. node환경이면 cookie를 가져올 수 있었습니다.


### API Routes

API Routes는 Next.js로 API를 구축할 수 있는 기능입니다. pages/api 내부에 있는 모든 파일은 /api/*에 매핑되며 페이지가 아닌 API endpoint로 처리됩니다. 또한 해당 API는 server-side bundle이기에 클라이언트 bundle사이즈를 증가시키지 않습니다.

![](https://velog.velcdn.com/images/_woogie/post/6be612cb-ee6e-4a7b-917c-550e468dce1c/image.png)


즉, 위의 그림처럼 브라우저가 Next.js 서버로 api요청을 하고 response를 받을 수 있습니다. Cookie를 꺼낼 수 있겠군요!

<br/>

## 해결

해당 방법을 통해 제가 생각한 방법은 2가지 입니다.

### 쿠키를 가져오기

쿠키를 직접 받아오는 방식입니다. 

![](https://velog.velcdn.com/images/_woogie/post/dd270c8d-53bc-406a-a019-89142f76ff64/image.png)


1. 페이지에 접근했을 때 먼저 API Routes를 통해 자신의 token을 리턴해줍니다. 
2. 리턴 받은 token을 저장해두고 Bearer Auth가 필요할 때 실어서 보내는 방식입니다.

예시 코드는 다음과 같습니다.

```tsx
// pages/api/getToken.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies?.['token'];
  res.status(200).json(JSON.parse(token));
}
```

API route에서는 req에서 쿠키를 꺼내 리턴해줍니다.

실제로 요청하는 부분은 아래와 같습니다.

```tsx
const token = await axios.get('/api/getToken');
```

### 모든 요청을 서버로 하기

Bearer Auth가 필요한 모든 요청을 Next.js서버로 요청하는 방식입니다.

![](https://velog.velcdn.com/images/_woogie/post/b3effd08-6496-4f8a-8b9e-4bbaacf6abf2/image.png)


1. 클라이언트에서 필요한 data를 API Route를 통해 요청한다.
2. Next.js서버에서 req의 cookie를 꺼낸다.
    a. 진짜 data를 요청해야하는 api에 call한다.
    b. 가져온 data를 클라이언트에 return해준다.

예시 코드는 다음과 같습니다. 해당 예시는 `GET method`일 때 입니다. 

```tsx
// pages/api/get.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies?.['token'];
	const targetUrl = req.query.url as string;
	const data = await axios(targetUrl, {
        	headers: { Authorization: token },
        });
  res.status(200).json(data);
}
```

<br/>

## 결론

1번 해결법은 요청 타이밍에 관한 문제, token을 클라이언트단에서 계속 관리해야한다는 점에서 2번 방법으로 처리하였습니다. 이로써 Bearer Authentication를 처리할 수 있었습니다.

프론트엔드 개발에 있어서 브라우저는 큰 제약으로 다가올 때가 많습니다. 이 때 위의 방법처럼 우회하여 여타 다른 문제도 해결할 수 있을겁니다.(마치 [Open AI로 비서 만들기](https://velog.io/@_woogie/Open-AI%EB%A1%9C-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B9%84%EC%84%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0#api-routes)에서 처럼요!)

<br/>

## 추가작업

### SSR

그러나 여전히 SSR시에는 context argument에서 쿠키를 직접 꺼내서 Bearer에 실어서 보내야합니다. 

### Middleware

페이지 접근 권한을 막는 방법은 [middleware](https://nextjs.org/docs/advanced-features/middleware)를 통해 처리할 수 있었습니다. 접근이 제한이 필요한 URL을 리스트업해두고 해당 페이지에 접근하면 user정보를 가져와 페이지의 접근을 막았습니다. 페이지 접근 후 `useEffect`처리보다 우아하게 처리할 수 있었습니다.