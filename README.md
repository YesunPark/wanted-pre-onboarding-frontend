# wanted-pre-onboarding-frontend 박예선

## 프로젝트 설명

원티드 프리온보딩 프론트엔드 인턴십 참가를 위한 사전과제입니다.\
로그인/ 회원가입/ 투두리스트 3개의 페이지로 이루어져 있습니다.\
투두리스트는 로그인 한 유저만 사용가능하기 때문에 회원가입, 로그인 후에 이용하실 수 있습니다.

## 기술 스택
`React`, `Javascript`, `React-Router-Dom`, `styled-components`, `styled-reset`, `fontawesome`

## 프로젝트 실행 방법

```
레파지토리 클론
$ git clone https://github.com/YesunPark/wanted-pre-onboarding-frontend.git

라이브러리 설치
$ npm install

실행
$ npm start
```

## 배포 링크

https://wanted-pre-onboarding-frontend-yesun.netlify.app

## src 폴더 구조

src\
 ┣ components\
 ┃ ┣ 📜Box.style.jsx\
 ┃ ┣ 📜SignupLoginForm.style.jsx\
 ┃ ┗ 📜Title.jsx\
 ┣ pages\
 ┃ ┣ login\
 ┃ ┃ ┗ 📜Login.jsx\
 ┃ ┣ signup\
 ┃ ┃ ┗ 📜Signup.jsx\
 ┃ ┗ todo\
 ┃ ┃ ┣ components\
 ┃ ┃ ┃ ┣ 📜ListItem.jsx\
 ┃ ┃ ┃ ┗ 📜MakeTodo.jsx\
 ┃ ┃ ┗ 📜Todo.jsx\
 ┣ styles\
 ┃ ┣ 📜global-styles.jsx\
 ┃ ┗ 📜theme.jsx\
 ┣ 📜App.jsx\
 ┗ 📜index.jsx
