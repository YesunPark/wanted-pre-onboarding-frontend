# ๐wanted-pre-onboarding-frontend ๋ฐ์์ 


## ๐ํ๋ก์ ํธ ์ค๋ช

์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ ํ๋ก ํธ์๋ ์ธํด์ญ ์ฐธ๊ฐ๋ฅผ ์ํ ์ฌ์ ๊ณผ์ ์๋๋ค.\
๋ก๊ทธ์ธ/ ํ์๊ฐ์/ ํฌ๋๋ฆฌ์คํธ 3๊ฐ์ ํ์ด์ง๋ก ์ด๋ฃจ์ด์ ธ ์์ต๋๋ค.\
ํฌ๋๋ฆฌ์คํธ๋ ๋ก๊ทธ์ธ ํ ์ ์ ๋ง ์ฌ์ฉ๊ฐ๋ฅํ๊ธฐ ๋๋ฌธ์ ํ์๊ฐ์, ๋ก๊ทธ์ธ ํ์ ์ด์ฉํ์ค ์ ์์ต๋๋ค.

> TEST- ID: `wanted@test.com` PW: `12121212`

## ๐๊ธฐ์  ์คํ
`React`, `Javascript`, `React-Router-Dom`, `styled-components`, `styled-reset`, `fontawesome`

## ๐ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ

```
๋ ํ์งํ ๋ฆฌ ํด๋ก 
$ git clone https://github.com/YesunPark/wanted-pre-onboarding-frontend.git

๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
$ npm install

์คํ
$ npm start
```

## ๐๋ฐฐํฌ ๋งํฌ

https://wanted-pre-onboarding-frontend-yesun.netlify.app

## ๐src ํด๋ ๊ตฌ์กฐ
```
src
 โฃ components
 โ โฃ ๐Box.style.jsx
 โ โฃ ๐SignupLoginForm.style.jsx
 โ โ ๐Title.jsx
 โฃ pages
 โ โฃ login
 โ โ โ ๐Login.jsx
 โ โฃ signup
 โ โ โ ๐Signup.jsx
 โ โ todo
 โ โ โฃ components
 โ โ โ โฃ ๐ListItem.jsx
 โ โ โ โ ๐MakeTodo.jsx
 โ โ โ ๐Todo.jsx
 โฃ styles
 โ โฃ ๐global-styles.jsx
 โ โ ๐theme.jsx
 โฃ ๐App.jsx
 โ ๐index.jsx
```
>### 1. ๋ผ์ฐํฐ์ ๊ณตํต์คํ์ผ ๊ธฐ๋ฅ ๋ถ๋ฆฌ
> App.jsx์ index.jsx์์ ๊ด๋ฆฌํ๋ ๊ธฐ๋ฅ์ ๋ถ๋ฆฌํ์ฌ ์ ์ง๋ณด์๋ฅผ ์ํ ํ๊ฒ ํ  ์ ์๊ฒ ํ์ต๋๋ค.
>- **App.jsx**: ๋ผ์ฐํ์ ํด์ ๊ฒฝ๋ก๋ง๋ค ์ด๋ค ์ปดํฌ๋ํธ๊ฐ ๋ค์ด๊ฐ๋์ง ํ๋์ ๋ค์ด๊ฐ ์ ์๊ฒ ํ์ต๋๋ค.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/App.jsx#L9-L16
>- **index.jsx**: Themeprovider์ GlobalStyle์ ์ ์ฉํ์ต๋๋ค.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/index.jsx#L11-L14
>### 2. components, pages, styles ํด๋
>- **componentsํด๋**: ๋ชจ๋  ํ์ด์ง์ ๊ณตํต์ ์ผ๋ก ์ฌ์ฉ๋๋ Title์ด๋, ์ฌ๋ฌ ๊ตฐ๋ฐ ์ฌ์ฌ์ฉ๋๋ style์ปดํฌ๋ํธ๊ฐ ์์ต๋๋ค.
>- **pagesํด๋**: ๋ผ์ฐํฐ ๊ฒฝ๋ก์ ํด๋นํ๋ ํ์ด์ง๋ง๋ค ํด๋๊ฐ ์กด์ฌํ๊ณ , ๊ทธ ์์ ์ปดํฌ๋ํธ ํ์ผ์ด ์์ต๋๋ค. ๋ง์ฝ ๊ทธ ํ์ด์ง ์์์ ๊ตฌ์กฐ๊ฐ ์ปดํฌ๋ํธ๋ก ๋๋๋ค๋ฉด
>pagesํด๋ ํ์์ componentsํด๋๋ฅผ ๋ง๋ค์ด์ ๊ฐํธํ๊ฒ ์ปดํฌ๋ํธ๋ฅผ ๊ด๋ฆฌํ  ์ ์๊ฒ ํ์ต๋๋ค. 
>- **stylesํด๋**: global-styles.jsx, theme.jsx๊ฐ ์์ต๋๋ค.
>์ ์ญ์ ์ผ๋ก ๊ธฐ๋ณธ์ผ๋ก ์ค์ ๋๋ ์คํ์ผ(input ์คํ์ผ ์ด๊ธฐํ, ๊ธ์จ์ฒด ๋ฑ)์ [global-styles.jsx](https://github.com/YesunPark/wanted-pre-onboarding->frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/styles/global-styles.jsx#L1-L34)์์ ๊ด๋ฆฌํ๊ณ 
>๋ฉ์ธ์ปฌ๋ฌ, ์๋ธ์ปฌ๋ฌ, ๊ธ์จ์ปฌ๋ฌ, ์์ด์ฝ ์ margin๋ฑ ๊ณตํต์ ์ผ๋ก ์์ฃผ ์ฐ์ด๋ ์คํ์ผ์ [theme.jsx](https://github.com/YesunPark/wanted-pre-onboarding->frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/styles/theme.jsx#L1-L16)์์ exportํ ํ ํ์ํ ๊ณณ์์ props๋ก ๋ถ๋ฌ์ ์ฌ์ฉํ์ต๋๋ค.

## ๐UI ๊ตฌ์กฐ

![UI 001](https://user-images.githubusercontent.com/108933466/208832913-43024f1e-a44e-4823-b6a9-7a5e9ee439b9.jpeg)
>1. 3๊ฐ์ ํ์ด์ง ๋ ์ด์์์ ๊ฐ๊ฒ ๋ง๋ค์ด์ ์ฌ์ฌ์ฉ๊ฐ๋ฅํ๋๋ก ํ์ต๋๋ค. 
>2. ๋ก๊ทธ์ธ, ํ์๊ฐ์ ํผ์ด ๋์ผํ๊ธฐ ๋๋ฌธ์ ํ๋์ ์คํ์ผ ์ปดํฌ๋ํธ๋ก ๋ง๋ค๊ณ , ํ์๊ฐ์, ๋ก๊ทธ์ธ ๊ธ์๋ง ๋ฐ๋๋๋ก ํ์ต๋๋ค. [input ์ํ๋ฅผ ๊ด๋ฆฌํ๋ ํจ์๋ ์ฌ์ฌ์ฉ์ปดํฌ๋ํธ ๋ด์์ ๋ฐ๋](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/components/SignupLoginForm.style.jsx#L5-L20)ํ๊ธฐ ๋๋ฌธ์ ๋ก๊ทธ์ธ, ํ์๊ฐ์์์ ๊ฐ๊ฐ ๋๊ฐ์ ๋ก์ง์ ์ด์ฉํ์ง ์๊ฒ ํด ์ฝ๋์ ์ค๋ณต์ ์ค์์ต๋๋ค.
>3. Box.style.jsx๋ฅผ ์ฌ์ฌ์ฉํด ์ ๋ชฉ, ํ  ์ผ, ํ  ์ผ ์๋ ฅ์ฐฝ์ ๋ง๋ค์์ต๋๋ค.
bgColor, className, children์ prop๋ก ๋๊ฒจ ๊ณตํต์ ์ธ ์คํ์ผ ๋ด์์ ์ํ๋๋๋ก ๋ณ๊ฒฝํด์ ์ฌ์ฉํ์ต๋๋ค.
ํ์ด์ง ๊ฐ์๊ฐ ๋ง์ด ์๊ธฐ ๋๋ฌธ์ ๋ณต์กํ์ง ์๊ฒ ์ฌ์ฉํ  ์ ์์์ต๋๋ค.
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/components/Box.style.jsx#L3-L9

## ๐์ธ์ฆ, ์ธ๊ฐ
> 1. ํ์๊ฐ์์ด๋ ๋ก๊ทธ์ธ์ ํ  ๋ alert์ ํตํด ์ฌ์ฉ์์๊ฒ ๊ธฐ๋ฅ์๋์ฌ๋ถ๋ฅผ ์๋ ค์ค๋๋ค.
์ด๋ฐ ๋ํ์ผ ํ๋ํ๋๊ฐ ์ฌ์ฉ์๊ฒฝํ์ ์ข์ฐํ๋ค๊ณ  ์๊ฐํฉ๋๋ค.
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/login/Login.jsx#L31
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L24
https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L29
> 2. ํ์๊ฐ์, ๋ก๊ทธ์ธ ์์ฒญ ์ fetch๋ฌธ์ ์ฌ์ฉํ์ต๋๋ค.\
์๋๋ ํ์๊ฐ์ ์์ฒญ ์ฝ๋, ๋ก๊ทธ์ธ ์์ฒญ ์ฝ๋๋ [์ฌ๊ธฐ](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/login/Login.jsx#L17-L38)
> [https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L10-L33](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/signup/Signup.jsx#L10-L33)

## ๐ํฌ๋๋ฆฌ์คํธ CRUD
>1. READ
>๋ก๊ทธ์ธ ์ ๋ฐ๋ก ํฌ๋๋ฆฌ์คํธ๋ก ์ด๋๋๊ณ , useEffect๋ฅผ ํตํด ๋ฐ๋ก get์์ฒญ์ด ์ด๋ค์ง๋ฉฐ ํฌ๋๋ฆฌ์คํธ ๋ชฉ๋ก์ ๋ฐ์์ต๋๋ค.\
>๋ฐ์์จ ๋ฐ์ดํฐ๋ก setListArr๋ฅผ ํด์ listArr์ ์ํ๋ฅผ ๋ณ๊ฒฝํฉ๋๋ค.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/Todo.jsx#L19-L31
>2. CREATE
>ํฌ๋ ์์ฑ ์์ฒญ์ MakeToDo๋ผ๋ ์์ฑํ  ํฌ๋๋ฅผ ์๋ ฅํ๋ ์ปดํฌ๋ํธ์์ ์ด๋ค์ง๋๋ค.\ํด๋น ์ญํ ์ ๋ด๋นํ๋ ๋ถ๋ถ์์ api์์ฒญ์ด ์ด๋ค์ ธ์ผํ๋ค๊ณ  ์๊ฐํ๊ธฐ ๋๋ฌธ์ ๋ค๋ฅธ ์ปดํฌ๋ํธ๊ฐ ์๋ ํฌ๋๋ฆฌ์คํธ๋ฅผ ์์ฑํ๋ ์ปดํฌ๋ํธ์์ ์ด๋ค์ง๋๋ค.\
>post๋ก ํฌ๋๋ฅผ ์์ฑํ๊ณ , `setListArr([...listArr, { id, isCompleted, todo, userId }])`๋ฅผ ํตํด ๊ธฐ์กด์ listArr๋ฐฐ์ด์ ํด๋น ํฌ๋๋ฅผ ์ถ๊ฐํด์ ํด๋ผ์ด์ธํธ์๊ฒ๋ ์ถ๊ฐ๋ ๊ฒ์ด ๋ณด์ฌ์ง๋๋ก ํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  input ์๋ ฅ์ฐฝ์ ๋น์์ง๋๋ค.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/MakeTodo.jsx#L16-L33
>3. UPDATE, DELETE
>ํฌ๋ ์๋ฃ/๋ฏธ์๋ฃ ์์ฒญ๊ณผ ์์ , ์ญ์  ์์ฒญ์ ListItem์ด๋ผ๋ ํ๋์ ํฌ๋ ์ปดํฌ๋ํธ์์ ์ด๋ค์ง๋๋ค. 2๋ฒ๊ณผ ๋ง์ฐฌ๊ฐ์ง๋ก ํด๋น ๊ธฐ๋ฅ๊ณผ ๊ฐ์ฅ ๋ฐ์ ํ ์ฐ๊ด์ด ์๋ ์ปดํฌ๋ํธ์์ ์์ฒญ์ด ์ด๋ฃจ์ด์ ธ์ผ ํ๋ค๊ณ  ์๊ฐํด์ ์ด ๊ณณ์์ ์ด๋ค์ง๋๋ค.\
>์๋๋ ํฌ๋ ์๋ฃ/๋ฏธ์๋ฃ ์์ฒญ์ ํ๋ ์ฝ๋, ์์  ์์ฒญ ์ฝ๋๋ [์ฌ๊ธฐ](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L41-L53), ์ญ์  ์์ฒญ ์ฝ๋๋ [์ฌ๊ธฐ](https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L55-L67)
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L20-L35

## ๐์ถ๊ฐ๋ก ์ ๊ฒฝ ์ด ๋ถ๋ถ
>1. ํจ์, ๋ณ์๋ช์ ๊ฐ๋์ฑ์ ์ ๊ฒฝ์ผ์ต๋๋ค.
>- ํ์ธ์ด ๋ดค์ ๋ ํจ์์ ๋ด์ฉ์ ์ผ์ผํ ์ดํดํ๊ฑฐ๋ ๋ณ์๊ฐ ์ฌ์ฉ๋๋ ๊ณณ์ ์ฐพ์๊ฐ์ง ์๋๋ผ๋ ์ด๋ค ์ญํ ์ ํ๋ ๊ฒ์ธ์ง ๋ฐ๋ก ์ ์ ์๋๋ก ํจ์๋ช, ๋ณ์๋ช์ ์ ๊ฒฝ์ผ์ต๋๋ค.
>- ์ฃผ๋ก `์ด๋ค ๋์์ ๋ปํ๋ ๋์ฌ`+ `์์์ ์์ธํ ์๋ฏธ๋ฅผ ํฌํจํ๋ ๋ช์ฌ`๋ก ๊ตฌ๋ถํ์ต๋๋ค.
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L20
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L41
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/login/Login.jsx#L17
>https://github.com/YesunPark/wanted-pre-onboarding-frontend/blob/2ae2b9d0fd65bbc5cf65bc9b0ea24d8a7fd5740c/src/pages/todo/components/ListItem.jsx#L9-L14

