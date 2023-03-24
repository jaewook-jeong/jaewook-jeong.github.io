---
title: body-scroll-lock 사용법(feat. 모달 내부에서 원하는 요소는 스크롤 가능하도록)
date: 2022-10-11 09:07:13
category: "react"
description: body-scroll-lock 라이브러리를 ios에서 원하는 요소가 스크롤 되도록 사용해봅시다
thumbnail: https://velog.velcdn.com/images/_woogie/post/88d3464c-5454-4ec7-bee8-00a131d9790f/image.gif
---


> 리액트를 기반으로 작성된 글입니다.


## 문제

### IOS

우리는 흔히 모달을 띄울 때 모달 뒤 body영역을 dim 처리를 하고 스크롤이 되지 않도록 처리합니다. 해당 처리는 꽤 많은 방법을 가집니다. 그러나 이러한 처리방법은 IOS에서 문제가 발생합니다. 모달내의 컨텐츠가 길어져 스크롤이 필요할 때 스크롤이 되지 않는 문제가 바로 그것입니다. 

<br/>

## 목표

그렇다면 우리가 해결해야할 문제는

1. 모달이 띄워졌을 때 **body가 스크롤 되지 않도록** 처리한다.
2. IOS에서 띄워진 모달 내부의 컨텐츠가 길어질 경우 **모달 내부가 스크롤**이 되도록 한다.

<br/>

## 해결

### body-scroll-lock

body를 막기위한 방법은 많지만 라이브러리로 간단히 해결 가능하기에 [body-scroll-lock](https://www.npmjs.com/package/body-scroll-lock)이라는 라이브러리를 사용합니다.
> 어? 이거 사용하면 IOS에서 스크롤 안되는데..?

네 맞습니다. 아마 해당 라이브러리 사용법중 allowTouchMove를 처리하시지 않으셨을겁니다.

### allowTouchMove

[Readme](https://github.com/willmcpo/body-scroll-lock#allowtouchmove)설명을 읽어봅시다. 
![](https://velog.velcdn.com/images/_woogie/post/d1710fd4-64c1-48dc-a0a9-39f8e480304b/image.png)


> iOS에서 스크롤을 막기 위해 `disableBodyScroll` 을 처리하면 `touchmove` 또한 막힙니다. 그러나 element에 대해 `disableBodyScroll`을 호출했지만 element의 자식은 `touchmove`가 필요한 경우가 있습니다.

딱 저희에게 필요한 내용이네요. disableBodyScroll을 처리하여 body를 막았지만 자식요소에서 스크롤이 필요한 경우(modal 내부의 스크롤)말이죠!

이제 Readme의 코드를 보면

![](https://velog.velcdn.com/images/_woogie/post/55f161e3-2784-4f16-ac85-34bc72d8addb/image.png)

disableBodyScroll함수를 실행할 때 `body-scroll-lock-ignore` 라는 attribute가 있는지 없는지 체크해서 touchmove를 허용하는지 결정하고있네요!

> 아 참고로 touchmove는 자바스크립트 event의 한 종류입니다.
[touchmove event 링크](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchmove_event)
> 

`body-scroll-lock-ignore` 라는 attribute를 모달 내부에 스크롤이 필요한 요소에 넣어주면 되겠군요! 

### Code(hook)

먼저 `body-scroll-lock-ignore` 라는 attribute를 overflow때 반환하는 훅을 만들어주겠습니다.

그런데 리액트를 다뤄보신 분이라면 아시겠지만, `unknow DOM attributes`를 리액트는 무시해버립니다. 그래서 `data-` 혹은 `aria-` prefix가 붙은 attribute 명을 사용해야 합니다. [링크](https://ko.reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html#should-i-keep-data-in-custom-attributes)

```tsx
export const BODY_SCROLL_LOCK_IGNORE = 'data-body-scroll-lock-ignore';
```

이제 요소의 스크롤 필요 여부를 체크하여 attribute를 반환하는 훅을 작성하겠습니다. 스크롤 필요 여부를 체크하고 알맞은 attribute(`BODY_SCROLL_LOCK_IGNORE`)를 내려주기위해 hook 사이클에 알맞는 [callbackRef](https://legacy.reactjs.org/docs/refs-and-the-dom.html#callback-refs)로 처리했습니다.

```tsx
import {
  useCallback,
  useState,
} from 'react';

export const BODY_SCROLL_LOCK_IGNORE = 'data-body-scroll-lock-ignore';

function useAllowTouchMove<T extends HTMLElement>() {
  const [overflow, setOverflow] = useState(false);

  const measuredRef = useCallback((node: T) => {
    if (node !== null) {
      if (node.getBoundingClientRect().height < node.scrollHeight
				|| node.getBoundingClientRect().width < node.scrollWidth) {
        setOverflow(true);
      } else {
        setOverflow(false);
      }
    }
  }, []);
}

export default useAllowTouchMove;
```

`measuredRef`라는 callbackRef를 만들었습니다. 해당 Ref는 이제 원하는 component ref에 넣어주면 해당 요소가 overflow상태 인지 체크하는 역할을 할 것입니다. 이제 attribute를 overflow에 알맞게 만들어주면 됩니다.

```tsx
import {
  useCallback,
  useMemo,
  useState,
} from 'react';

export const BODY_SCROLL_LOCK_IGNORE = 'data-body-scroll-lock-ignore';

function useAllowTouchMove<T extends HTMLElement>() {
  const [overflow, setOverflow] = useState(false);

  const measuredRef = useCallback((node: T) => {
    if (node !== null) {
      if (node.getBoundingClientRect().height < node.scrollHeight
				|| node.getBoundingClientRect().width < node.scrollWidth) {
        setOverflow(true);
      } else {
        setOverflow(false);
      }
    }
  }, []);

  const allowTouchMove = useMemo(() => {
    if (overflow) {
      return { [BODY_SCROLL_LOCK_IGNORE]: 'true' };
    }
    return {};
  }, [overflow]);

  return [measuredRef, allowTouchMove];
}

export default useAllowTouchMove;
```

이제 hook을 만들었는데 어떻게 쓰나요? 아직 앞으로 2가지를 더 해야합니다. 먼저 앞서 말씀드렸던 disableBodyScroll함수가 실행될 때 allowTouchmove를 처리해줘야합니다.

### Code(disableBodyScroll func)

보통 `body-scroll-lock` 라이브러리를 사용할 때 다음과 같이 사용하셨을 겁니다.

```tsx
const body = document.querySelector('body') as HTMLElement;
useEffect(() => {
  disableBodyScroll(body);

  return () => {
    enableBodyScroll(body);
  };
}, []);
```

이제 이 코드에 allowTouchMove를 입혀줍시다.

```tsx
useEffect(() => {
  disableBodyScroll(,body {
    allowTouchMove: (el) => {
      while (el && el !== document.body) {
        if (el.getAttribute(BODY_SCROLL_LOCK_IGNORE) !== null) {
          return true;
        }
        if (el.parentElement) {
          el = el.parentElement;
        }
      }
    },
  });
  return () => clearAllBodyScrollLocks();
}, []);
```

아까 hook에서 만든 `BODY_SCROLL_LOCK_IGNORE` attribute를 체크해서 값이 있다면 return true를 하여 touchmove를 허용하는겁니다. 그리고 unmount시에는 `clearAllBodyScrollLocks` 을 처리하여 모든 bodyscrolllock을 해소해줍니다.

자 이제 다왔습니다.

### Code(Component)

아까 만든 hook을 이제 원하는 요소에 넣어야겠죠?

```tsx
const ExampleComponent = () => {
	// 여러개의 데이터가 들어있는 데이터 리스트
	const data = ['chris', 'chris2', 'chris3', ...];
	const [ref, attribute] = useAllowTouchMove<HTMLDivElement>();
	return (
		<div ref={ref} {...attribute}>
			{data.map((v) => <span>{v}</span>)
		</div>
	)
}
```

이렇게 스크롤이 필요할 요소에 hook에서 반환된 값을 넣어주면 됩니다!

## 정리

이렇게 사용하면 IOS에서 모달이 띄워졌을 때에도 모달 내부는 스크롤이 가능하게됩니다. 사실상 라이브러리를 어떻게 사용하는가에 맞춰진 글이었습니다. 문제를 해결했지만 근본적으로 IOS에서 스타일이 적용되는 방식이 여타 다른 기기 혹은 브라우저와 어떻게 다른지 알아봐야할 것 같습니다.