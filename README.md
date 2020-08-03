# React app using the SpaceX API

This app is based on Traversy Media's tutorial on [GraphQL with React and Apollo](https://www.youtube.com/playlist?list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx), **with some additions**:

- The [SpaceX API version 4](https://github.com/r-spacex/SpaceX-API) is used instead of version 3.
- React Hooks are used to manage state and context, namely `useState` and `useContext`, as well as Apollo queries `useQuery`.
- Launches list is filtered by launch date.
- The option to filter launches by success or fail property.
- Use of `createContext` to manage the filter options.

The app is deployed to heroku [here](https://still-mesa-29562.herokuapp.com/).
