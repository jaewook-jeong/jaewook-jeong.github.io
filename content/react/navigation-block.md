---
title: '리액트 또는 Next.js에서 History api 라우팅을 감지하는 법(feat. modal)'
date: 2022-10-15 22:00:45
---

## 리액트 또는 Next.js에서 History api 라우팅을 감지하는 법(feat. modal)

> 이 글은 event 감지를 통해 새로고침이나 탭 닫기 등의 상황이 아닌 브라우저 라우팅에 관한 이야기입니다.
> 

예를 들어 페이지에 form이 있다고 가정을 해봅시다. 이 form은 중요한 정보라서 꼭 submit(혹은 저장)을 해야하는 상황이라면요? 이 때 submit 하지 않은 상태에서 유저가 이탈하려고 할 때 react-router의 [prompt](https://v5.reactrouter.com/core/api/Prompt), Nextjs에서는 useRouter의 [event](https://nextjs.org/docs/api-reference/next/router#routerevents)를 통해 navigate를 막을 수 있습니다.

먼저 React app입니다.

react-router(v5기준, [v6](https://reactrouter.com/en/main/upgrading/v5#prompt-is-not-currently-supported) 아직 미지원)에서 Prompt라는 컴포넌트를 제공합니다. 컴포넌트의 props의 타입을 보면 다음과 같습니다.

```tsx
interface PromptProps {
    message: string | ((location: H.Location, action: H.Action) => string | boolean);
    when?: boolean | undefined;
}
```

값을 살펴보면 when을 통해 navigation 허용 여부를 체크합니다. 그리고 message의 타입을 보면 2가지가 있는데, 먼저 string의 경우 `confirm`창의 message로 쓰일 string을 받습니다. 또한 함수가 올 수 있는데 해당 함수는 Location객체를 첫번째 파라미터로 가지고 string 또는 boolean을 리턴합니다. 이 함수타입의 message prop을 통해 `confirm`창이 아닌 다른 UI를 보여줄 수 있는 코드를 작성할 수 있습니다.

아래와 같은 코드처럼 작성될 수 있습니다.

```tsx
const message = (nextLocation: Location): boolean => {
		// navigation block이 필요할 경우
    if (hasToBlock) {
			// 원하는 작업
      return false;
    }
    return true;
};
```

false를 반환하면 라우팅이 되지 않습니다. 이 때 인자로 받은 location은 라우팅 될 location에 관한 정보를 가지고 있기 때문에 해당 정보를 저장해뒀다가 submit과 같은 작업 처리 후 사용할 수도 있습니다.

만약 모달을 띄운다면 모달 렌더링에 관한 state를 위의 코드 `if`내에서 처리하는 등의 작업을 통해 원하는 UI를 그려낼 수 있습니다.

다음은 Next.js입니다.

next에서 현재의 pathName을 가져오거나 페이지를 이동시킬 때 사용하는 useRouter에는 events라는 object가 있습니다.  이 object에는 on, off, emit이라는 메소드를 가지고 있습니다. on은 특정 이벤트를 감지하여 원하는 동작을 처리할 때 사용되고 off는 unmount시에 on 메소드를 정리하는 함수라 할 수 있습니다. emit은 특정한 이벤트를 동작시키게 하는 메소드입니다. events object를 사용하여 아래 코드와 같이 페이지 이동을 감지하여 처리할 수 있습니다.

```tsx
const { events } = useRouter();
const [forcePush, setForcePush] = useState(false);
useEffect(() => {
  const handleBrowseAway = (url: string) => {
		if (forcePush) return;
		if (!hasToBlock) return;
		// ui와 관련된 처리
    events.emit('routeChangeError');
    throw 'routeChange aborted.';
  };
  events.on('routeChangeStart', handleBrowseAway);
  return () => {
    events.off('routeChangeStart', handleBrowseAway);
  };
}, [forcePush, hasToBlock]);
```

먼저 route가 변경되는 시점을 알 수 있는 `routeChangeStart` 를 활용하여 해당 이벤트가 발생했을 때 페이지 이동을 막아야(hasToBlock) 한다면 routeChangeError를 emit함과 동시에 throw 처리를 통해 페이지가 변경되지 않도록 처리할 수 있습니다. 

또한 forcePush라는 state가 존재하는데 해당 state를 제어하여 submit이 된다거나 혹은 UI에서 무언가 처리되고 navigate될 때 다시 정상적으로 처리되도록 동작하게 할 수 있습니다.