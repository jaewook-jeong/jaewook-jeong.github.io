---
title: "about"
category: "about"
date: 2024-9-24 23:04:13
---

# 정재욱

<div align="right"><sub><i>Last updated: 2024.09.24</i></sub></div>

**저는 `______` 사람입니다.**

1. 대화가 좋은
2. 문서화하는
3. 이상과 현실을 구분하는

**저는 `______` 개발자입니다.**

1. 결과물을 제시간에 만들어내는
2. 비즈니스에 관심이 많은
3. 개발 문화에 관심이 많은

|             |                                    |
| :---------: | ---------------------------------- |
| **GitHub**  | <https://github.com/jaewook-jeong> |
|  **Blog**   | <https://jaewook-jeong.github.io>  |
| **Contact** | <dnrlwo11@gmail.com>               |

<br />

# Experiences

## [비바리퍼블리카](https://www.toss.im)

|              |                                                                   |
| -----------: | ----------------------------------------------------------------- |
|   **period** | 23.06 ~ current                                                   |
| **position** | Frontend Engineer                                                 |
| **projects** | 내부 정산 플랫폼(Business-one) / 인터널 앱                        |
|       _tech_ | React, Next.js, TypeScript, react-query, react-hook-form, emotion |

### 비즈니스원

- 토스 정산 플랫폼 개발

### 인터널 앱(Web app)

- 인터널앱에서 커피 주문

## [Nextunicorn](https://www.nextunicorn.kr)

|              |                                                                                                                                                              |
| -----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   **period** | 21.02 ~ 23.04                                                                                                                                                |
| **position** | Frontend Engineer                                                                                                                                            |
| **projects** | [메인페이지](https://nextunicorn.kr) / [파인더](https://nextunicorn.kr/finder) / [지원프로그램](https://nextunicorn.kr/support-programs) / 채팅기능 / nu-pro |
|       _tech_ | React, Next.js, TypeScript, react-query, react-hook-form, emotion, zustand, redux                                                                            |

### nextunicorn-package 오픈소스 관리

- [Utils](https://www.npmjs.com/package/@nextunicorn/utils)
- [UI](https://www.npmjs.com/package/@nextunicorn/ui)

### 동적 신청 폼 개발(23.02 ~ 23.03)

- 다양한 input 타입(text, number, phone, file, selection 등)에 대응 가능한 form admin 기능 개발
- 동적으로 만들어진 form 접수 기능 개발
  - 임시저장 및 다날 결제
  - navigation block modal

### 지원프로그램 통합(22.11 ~ 23.01)

- 국가주도 스타트업 지원 프로그램 큐레이션 및 SEO 최적화
  - 기존의 자사 스타트업 지원 프로그램과 통합
- 자사 스타트업 지원 프로그램 어드민 개발

### 메신저 채팅 개발(22.08 ~ 22.09)

- stomp를 이용한 spring서버와 소켓 연결
- css `overflow-anchor`의 사파리 미지원으로 인한 자체 구현
  - resizeObserver의 활용
- `intersectionObserver`를 사용한 상단 무한 스크롤 구현
- PC, TABLET, MOBILE(IOS)에 대한 대응
- 유저의 화면 visible 상태에 따른 소켓 재연결
- 메시지에 url이 포함될 경우 OG태그 처리

### [NU-pro](https://pro.nextunicorn.kr/) 페이지(22.06 ~ 22.07)

- 103개의 정보를 볼 수 있는 리스트(테이블) 구현
- 화면에 보이는 영역만 렌더링하여 수많은 데이터에도 성능 유지
- 테이블의 column 사이즈 조절 및 고정 등의 기능 구현

### [파인더](https://www.nextunicorn.kr/finder) 페이지 (22.01 ~ 22.03)

- 스타트업, 투자기관, 채용정보를 통합된 페이지 내에서 확인
- 반응형 기업카드 설계 및 구현
  - `clamp`등을 활용한 반응형 설계
  - 여타 다른 페이지에서 활용 가능하도록 인터페이스 구성

### 기존의 React에서 Next.js로 마이그레이션 (21.12 ~ 계속)

- 기존의 react app에서 next.js로 마이그레이션
- react-query의 도입
- DX를 고려한 SSR HoC 설계 및 개발
- rest api에서 GQL로 변경에 따른 대응
- analytics(amplitude, sentry, hotjar)
- Authentication 로그인 체계 구성

### 메인 페이지 개선 (21.03 ~ 계속)

- 페이지 접근성 개선하여 Alexa SEO 등급 상승
- 기업(스타트업 및 투자기관) 북마크 기능 추가

### 회원가입 개선 (21.06 ~ 21.09)

- 일반유저에 관한 회원 권한 추가
- 회원가입 전반에 대한 플로우 수정
- 본인인증 PASS도입

### 디자인시스템 개선 (21.06 ~ 21.09)

- 프로덕트 디자이너와 디자인시스템 개선
- ref의 접근성 개선 및 compounded component 구현
- DX를 고려한 컴포넌트 설계

### 글로벌 투자기업 유저를 위한 다국어 페이지 (21.05 ~ 21.06)

- 창진원 글로벌사업와 협력하여 해외 투자기업 유저의 넥스트유니콘 이용
- 유저는 기업을 북마크기능 구현
- 기업의 IR자료 및 정보 접근
- i18n을 활용한 다국어 처리

### 기업 프로필 개선 (21.03 ~ 21.11)

- 기존에 formik form에서 react-hook-form으로 개선
  - 장문의 기업소개 작성시 유저 경험 개선
- 기업프로필 편집 페이지 UI/UX 개선
  - 정보 수정중 페이지 이탈시 Modal 노출
- 기존 스타트업과 투자기관의 분리된 프로필 UI 통합

<br />

_감사합니다._

<br/>

<sub><sup>Front-End Engineer, <a href="https://github.com/jaewook-jeong">@정재욱</a></sup></sub>

</div>
