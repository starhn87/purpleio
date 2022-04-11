## 📑 프로젝트 소개

음식점 목록과 상세정보를 보여주는 어플리케이션입니다.

<br>

## 🚀 실행 방법

```bash
  git clone https://github.com/starhn87/purpleio.git
  yarn install
  npx json-server -p 9000 db.json # json-server 실행
  yarn dev # Next 어플리케이션 실행
  # http://localhost:3000 이동
```

## ✨ 주요 기능

- 메인 페이지
  - 음식점 목록을 확인할 수 있습니다.
  - 음식점 아이템을 클릭하여 모달 안에서 상세정보를 볼 수 있습니다.
- About 페이지
  - 프로젝트 설명을 확인할 수 있습니다.
- 에러 페이지
  - 유효하지 않은 경로 접근시 에러 페이지를 보여주고 5초 뒤 자동으로 메인 페이지로 이동합니다.

<br>

## 🧔 메인

<br>

1-1. 메인 페이지

<img src="https://user-images.githubusercontent.com/36434219/162666740-05dc6e85-3fc2-4fb6-9c01-77ab56acb7f9.png" alt="메인 페이지" width="700px" height="400px">

<br>

1-2. 상세정보 모달

<img src="https://user-images.githubusercontent.com/36434219/162666857-c9b12949-f32b-4c79-b095-13ef4e8be0ee.png" alt="상세정보 모달" width="700px" height="400px">

<br>

2. About 페이지

<img src="https://user-images.githubusercontent.com/36434219/162667076-60f44fb0-1c10-4f64-b212-ad768dd05cbf.png" alt="about 페이지" width="700px" height="400px">

3. 에러 페이지

<img src="https://user-images.githubusercontent.com/36434219/162728056-395d649d-ee4d-4cd0-bec3-07d9a756a7f8.png" alt="에러 페이지" width="700px" height="400px">

<br>
<br>

## ⭐️ 구현한 기능 목록 및 어려웠던 점

- 구현 내용 & 방법

  - Next.js + Typescript로 구성하였습니다.
  - getStaticProps로 SSR을 적용하였습니다.
  - React query로 API 호출에 캐싱을 적용하였습니다.
  - json-server로 API 서버를 만들고 호출하여 가져왔습니다.
  - 반응형 디자인을 도입하였습니다. (데스크탑, 모바일)
  - 렌더링을 최적화하였습니다.
  - mui를 사용하여 모달창을 구현하였고 전체적인 스타일링은 emotion을 사용하였습니다.
  - Yarn berry로 의존성 깨짐 없이 zero install로 패키지를 관리하였습니다.
  - 전체적으로 컴포넌트 단위로 개발하였습니다.

- 구현하면서 어려웠던 점
  - React 18로 버전업이 되면서 React query의 QueryClientProvider와 인터페이스가 호환되지 않아서 디버깅에 시간이 소요되었습니다.
    (에러 해결 후 블로깅을 하였습니다.
    https://velog.io/@dkdlel102/Next.js-React-18-TS-React-query에서-QueryClientProvider에-IntrinsicAttributes-에러가-발생할-때-해결-방법)

<br>

## 🗂 프로젝트 구조

```
├── README.md
├── components
│   ├── Detail.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Loading.tsx
│   └── Tabs.tsx
├── db.json
├── index.d.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── 404.tsx
│   ├── _app.tsx
│   ├── about.tsx
│   ├── api
│   │   └── index.ts
│   └── index.tsx
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── tsconfig.json
└── yarn.lock
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

package manage

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

community

![Discord](https://img.shields.io/badge/DISCORD-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Apple](https://img.shields.io/badge/-APPLE-black?style=for-the-badge&logo=apple)
![Ubuntu](https://img.shields.io/badge/-UBUNTU-gray?style=for-the-badge&logo=Ubuntu)
