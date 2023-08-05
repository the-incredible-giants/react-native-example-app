# React Native Example App

Hello there 👋

* The application fetches data from dummyjson.com with RTK Query
* Data is managed with the Redux Toolkit
* Users are displayed in a list (FlatList)
* I used custom hooks to reduce the size of the components and improve code readability
* You can search for a user using input (no debounce as it's local state, maybe I'll add it later just as possible solution)
* You can navigate to the user's page and view their details (React Navigation)
* The application includes unit tests (Jest, React Native Testing Library)

Todo
- [ ] Debounce for search field
- [ ] More tests (custom hooks, slice)
- [ ] Move styles to separate files
- [ ] Awesome UX/UI 😉

It's standard way to use the project 🚀 

  ```sh
  npm i
  npx react-native run-android
  npx react-native run-ios
  npm test
  ```