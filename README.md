# reactjs-hooks-typescript-practice
An simple skeleton to use hooks, typescript in a reactjs app

## Run the project
  1. Run `yarn install`
  2. Run `yarn start`
  
## features
- [x] Add package into package.json and use react-app-rewire to initialize project folder
- [x] Set eslint, prettier, typescript, pre-commit hooks to achieve better code style and avoid errors
- [x] Create a home page called `App.tsx` and add page layout
- [x] Create routes using `useRoutes()` in `App.tsx` to declare all pages
- [x] Create a `useLogin` hook to mock the authentication process
- [x] Add unit tests `useLogin` using react-testing-library/hooks
- [x] Create a `Login` Page containing two inputs and two buttons 
  - [x] Add loading support
  - [x] Show success/error messages  
- [x] Add unit tests for `Login` page using react-testing-library


## todo
- [ ] Add ErrorPage.tsx and Loading.tsx
- [ ] Add BasicLayout.tsx to the page
- [ ] Login.less: prevent break encapsulation
- [ ] Login.tsx: Clear the inputs after login success

