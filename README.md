# 🍋wanted-pre-onboarding-frontend 박예선
### 목차

[1. 프로젝트 설명](🍋프로젝트-설명)\
[2. 기술 스택](🍋기술-스택)\
[3. 프로젝트 실행 방법](🍋프로젝트-실행-방법)\
[4. 배포 링크](🍋배포-링크)\
[5. src 폴더 구조](🍋src-폴더-구조)\
[6. UI 구조](🍋UI-구조)\
[7. 인증, 인가](🍋인증,-인가)\
[8. 투두리스트 CRUD](🍋투두리스트-CRUD)\
[8. 추가로 신경 쓴 부분](🍋추가로-신경-쓴-부분)

## 🍋프로젝트 설명

원티드 프리온보딩 프론트엔드 인턴십 참가를 위한 사전과제입니다.\
로그인/ 회원가입/ 투두리스트 3개의 페이지로 이루어져 있습니다.\
투두리스트는 로그인 한 유저만 사용가능하기 때문에 회원가입, 로그인 후에 이용하실 수 있습니다.

## 🍋기술 스택
`React`, `Javascript`, `React-Router-Dom`, `styled-components`, `styled-reset`, `fontawesome`

## 🍋프로젝트 실행 방법

```
레파지토리 클론
$ git clone https://github.com/YesunPark/wanted-pre-onboarding-frontend.git

라이브러리 설치
$ npm install

실행
$ npm start
```

## 🍋배포 링크

https://wanted-pre-onboarding-frontend-yesun.netlify.app

## 🍋src 폴더 구조
```
src
 ┣ components
 ┃ ┣ 📜Box.style.jsx
 ┃ ┣ 📜SignupLoginForm.style.jsx
 ┃ ┗ 📜Title.jsx
 ┣ pages
 ┃ ┣ login
 ┃ ┃ ┗ 📜Login.jsx
 ┃ ┣ signup
 ┃ ┃ ┗ 📜Signup.jsx
 ┃ ┗ todo
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ 📜ListItem.jsx
 ┃ ┃ ┃ ┗ 📜MakeTodo.jsx
 ┃ ┃ ┗ 📜Todo.jsx
 ┣ styles
 ┃ ┣ 📜global-styles.jsx
 ┃ ┗ 📜theme.jsx
 ┣ 📜App.jsx
 ┗ 📜index.jsx
```
>### 1. 라우터와 공통스타일 기능 분리
> App.jsx와 index.jsx에서 관리하는 기능을 분리하여 유지보수를 원할하게 할 수 있게 했습니다.
>- **App.jsx**: 라우팅을 해서 경로마다 어떤 컴포넌트가 들어가는지 한눈에 들어갈 수 있게 했습니다.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/App.jsx#L9-L16
>- **index.jsx**: Themeprovider와 GlobalStyle을 적용했습니다.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/index.jsx#L11-L14
>### 2. components, pages, styles 폴더
>- **components폴더**: 모든 페이지에 공통적으로 사용되는 Title이나, 여러 군데 재사용되는 style컴포넌트가 있습니다.
>- **pages폴더**: 라우터 경로에 해당하는 페이지마다 폴더가 존재하고, 그 안에 컴포넌트 파일이 있습니다. 만약 그 페이지 안에서 구조가 컴포넌트로 나뉜다면
>pages폴더 하위에 components폴더를 만들어서 간편하게 컴포넌트를 관리할 수 있게 했습니다. 
>- **styles폴더**: global-styles.jsx, theme.jsx가 있습니다.
>전역적으로 기본으로 설정되는 스타일(input 스타일 초기화, 글씨체 등)은 [global-styles.jsx](https://github.com/YesunPark/wanted-pre-onboarding->frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/styles/global-styles.jsx#L1-L34)에서 관리하고
>메인컬러, 서브컬러, 글씨컬러, 아이콘 옆 margin등 공통적으로 자주 쓰이는 스타일은 [theme.jsx](https://github.com/YesunPark/wanted-pre-onboarding->frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/styles/theme.jsx#L1-L16)에서 export한 후 필요한 곳에서 props로 불러와 사용했습니다.

## 🍋UI 구조

![UI 001](https://user-images.githubusercontent.com/108933466/208832913-43024f1e-a44e-4823-b6a9-7a5e9ee439b9.jpeg)
>1. 3개의 페이지 레이아웃을 같게 만들어서 재사용가능하도록 했습니다. 
>2. 로그인, 회원가입 폼이 동일하기 때문에 하나의 스타일 컴포넌트로 만들고, 회원가입, 로그인 글자만 바뀌도록 했습니다. [input 상태를 관리하는 함수도 재사용컴포넌트 내에서 발동](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/components/SignupLoginForm.style.jsx#L5-L20)하기 때문에 로그인, 회원가입에서 각각 똑같은 로직을 이용하지 않게 해 코드의 중복을 줄였습니다.
>3. Box.style.jsx를 재사용해 제목, 할 일, 할 일 입력창을 만들었습니다.
bgColor, className, children을 prop로 넘겨 공통적인 스타일 내에서 원하는대로 변경해서 사용했습니다.
페이지 개수가 많이 않기 때문에 복잡하지 않게 사용할 수 있었습니다.
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/components/Box.style.jsx#L3-L9

## 🍋인증, 인가
> 1. 회원가입이나 로그인을 할 때 alert을 통해 사용자에게 기능작동여부를 알려줍니다.
이런 디테일 하나하나가 사용자경험을 좌우한다고 생각합니다.
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/login/Login.jsx#L31
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L24
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L29
> 2. 회원가입, 로그인 요청 시 fetch문을 사용했습니다.\
아래는 회원가입 요청 코드, 로그인 요청 코드는 [여기](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/login/Login.jsx#L17-L38)
> [https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L10-L33](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L10-L33)

## 🍋투두리스트 CRUD
>1. READ
>로그인 시 바로 투두리스트로 이동되고, useEffect를 통해 바로 get요청이 이뤄지며 투두리스트 목록을 받아옵니다.\
>받아온 데이터로 setListArr를 해서 listArr의 상태를 변경합니다.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/Todo.jsx#L19-L31
>2. CREATE
>투두 생성 요청은 MakeToDo라는 생성할 투두를 입력하는 컴포넌트에서 이뤄집니다.\해당 역할을 담당하는 부분에서 api요청이 이뤄져야한다고 생각하기 때문에 다른 컴포넌트가 아닌 투두리스트를 생성하는 컴포넌트에서 이뤄집니다.\
>post로 투두를 생성하고, `setListArr([...listArr, { id, isCompleted, todo, userId }])`를 통해 기존의 listArr배열에 해당 투두를 추가해서 클라이언트에게도 추가된 것이 보여지도록 합니다. 그리고 input 입력창은 비워집니다.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/MakeTodo.jsx#L16-L33
>3. UPDATE, DELETE
>투두 완료/미완료 요청과 수정, 삭제 요청은 ListItem이라는 하나의 투두 컴포넌트에서 이뤄집니다. 2번과 마찬가지로 해당 기능과 가장 밀접한 연관이 있는 컴포넌트에서 요청이 이루어져야 한다고 생각해서 이 곳에서 이뤄집니다.\
>아래는 투두 완료/미완료 요청을 하는 코드, 수정 요청 코드는 [여기](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L41-L53), 삭제 요청 코드는 [여기](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L55-L67)
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L20-L35

## 🍋추가로 신경 쓴 부분
>1. 함수, 변수명의 가독성을 신경썼습니다.
- 타인이 봤을 때 함수의 내용을 일일히 이해하거나 변수가 사용되는 곳을 찾아가지 않더라도 어떤 역할을 하는 것인지 바로 알 수 있도록 함수명, 변수명을 신경썼습니다.
- 주로 `어떤 동작을 뜻하는 동사`+ `요소의 자세한 의미를 포함하는 명사`로 구분했습니다.
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L20
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L41
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/login/Login.jsx#L17
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L9-L14

