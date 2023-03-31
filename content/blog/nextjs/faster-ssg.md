이번 EP4은 Next.js에서 SSR을 어떻게 더 빠르게 처리할 수 있는지에 관한 이야기입니다.
 
 <br/>

## 고민

> 혹시 `getStaticProps` 사용해보셨나요?

### GetStaticProps

`getStaticProps`, SSG가 필요한 페이지에 해당 메소드를 사용합니다. 근데 사용해보신적이 있으신가요? 블로그를 개발할 때도 “SSG할거면 차라리 gatsby를 쓰지”라며 저는 사용해 본 적이 없습니다. 프로덕트에서 사용한다면 소개페이지 정도에 알맞겠군요. [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)에 관해 읽다보면 구미가 확 당기는 기능이 있습니다. 바로 [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)이란 기능입니다.

### ISR(Incremental Static Regeneration)

해당 기능은 정적페이지를 만들거나 업데이트 하는 기능입니다. ISR을 사용하면 전체 사이트를 재구성할 필요 없이 페이지 단위로 정적 생성을 사용할 수 있습니다. 정적페이지에 그릴 데이터가 변경되었을 때 빌드와 배포를 다시하는 것이 아니라 ISR로 처리하면 자동으로 다시 `re-generate`하게됩니다.

> 굉장히 편리한 기능이군요..?!

코드는 단순히 getStaticProps return시에 `revalidate: number`만 넣어주면 됩니다.

```tsx
export async function getStaticProps() {
  const res = await fetch('/someting')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
```

그러니까 요청(위의 코드기준으로)이 들어올 때 10초에 1번 re-generate를 하는겁니다. 

> SSR에서 generate를 하지 못해도 fetching결과를 캐싱하는 건 어떨까요?

<br/>

## getCachedServerSideProps

fetching결과를 캐싱해봅시다.

### node-cache

먼저 [node-cache](https://www.npmjs.com/package/node-cache)라는 라이브러리를 사용할겁니다. Node.js 내부 캐싱 라이브러리입니다.

이 때 사용하기에 앞서 TTL에 대해 알아두면 좋습니다. TTL은 Time To Live의 약자로 생존시간 정도로 생각해두시면 됩니다. 캐시된 데이터의 유효시간인거죠.

### Code

일단 아주 단순하게 코드를 짜볼겁니다. 먼저 NodeCache를 생성합니다.

```tsx
import NodeCache from "node-cache";

const globalCache = new NodeCache({
  stdTTL: 60 * 10,
  checkperiod: 600,
});
```

option을 살펴보면 `stdTTL`은 standard TTL을 의미합니다. 기본 TTL값인거죠. `checkpreiod`는 자동으로 만료된 캐시들을 삭제하는 기간을 의미합니다. 즉 10분마다 돌면서 만료된 캐시를 삭제하는 것이죠.

다음으로는 `getServerSideProps`에 쓰일 고차함수를 만들겠습니다.

```tsx
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import NodeCache from "node-cache";

const DEFAULT_TTL = 60 * 10; // 10분

const globalCache = new NodeCache({
  stdTTL: DEFAULT_TTL,
  checkperiod: 100,
});

const getCachedServerSideProps = ({
  getServerSideFunc,
  key,
  ttl = DEFAULT_TTL,
}: {
  getServerSideFunc: (ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<{ [key: string]: any }>>;
  key: string;
  ttl?: number;
}) => async (ctx: GetServerSidePropsContext) => {
  const cache = globalCache.get(key);

  if (cache) {
    return cache;
  }

  const ret = await getServerSideFunc(ctx);  
  globalCache.set(key, ret, ttl);

  return ret;
};

export default getCachedServerSideProps;
```

SSR시에 fetch할 함수를 받고, 캐시의 key값 그리고 해당 캐시의 ttl을 별도로 받을 수 있게 만들었습니다. 코드가 실행되면 먼저 cache가 있는지 확인하고 있으면 return, 만약에 없다면 fetch를 하고 해온 값을 캐싱해줍니다. 이후 return.

페이지에서 사용할 때는 다음과 같이 사용하면 됩니다.

```tsx
export const getServerSideProps = getCachedServerSideProps({
  key: 'dog',
  getServerSideFunc: async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    return {
      props: {
        image: data.message,
      },
    };
  },
  ttl: 60,
});
```

이렇게 처리하면 60초동안 캐싱된 데이터를 계속 불러오게 됩니다.

### 짜잔!

![](https://velog.velcdn.com/images/_woogie/post/a9daf4f9-de6b-4a69-9609-9a8938ee7762/image.png)

랜덤한 강아지 사진을 가져오는 [api](https://dog.ceo/api/breeds/image/random)인데요, 보시다시피 계속 같은 값을 가져옵니다!

<br/>

## 개선사항
단순한 코드이니만큼 개선사항이 있습니다. 

1. [getTtl](https://www.npmjs.com/package/node-cache#get-ttl-getttl) 메소드를 활용해서 현재 시간과 비교해 `checkperiod`를 기다리는게 아니라 만료된 경우 바로 새로운 값으로 바꿔주는 겁니다. 개별 캐시마다 만료시간이 지나면 업데이트를 하도록 할 수 있을 것 같습니다.
2. key를 단순 string이 아닌 함수로 만들어 `dynamic routing`에 대응하도록 할 수 있습니다. `GetServerSidePropsContext` 를 매개변수로 넘겨주면 됩니다.

## 회고

SSR시 fetch data에 대해 조금이라도 속도를 개선할 수 있게 되었습니다. 그러나 알맞은 TTL을 데이터에 따라 정의하는 점에서 어려움이 여전히 존재할 것 같습니다.
그리고 사용자 입장에서는 이런 경우도 발생하겠죠.

> Q: 아 데이터 수정했는데 왜 안바뀌죠?
A: 반영되는 시간이 10분정도 걸립니다.
Q: 왜요?