# Namaste React 

# Parcel
 - Dev Build
 - Local Server
 - HMR - Hot Module Replacement
 - File Watching Algorithm - written in C++
 - Caching - Faster Builds
 - Image Optimization
 - Bundling
 - Compress
 - Consistent Hashing
 - Code splitting
 - Differential Bundling - support older browsers
 - Diagnostic
 - Error Handling
 - HTTPs
 - Tree Shaking - remove unused code

# Two types of Export/Import

  - Default Export/Import

  export default Component
  import Component from "path"

  -Named Export/Import
  export const Component
  import {Component} from "path"


# React Hooks
Normal JS utility function
useState() - Superpowerful state variable
useEffect()

# Types routing in web apps
 - Client Side Routing
 - Server Side Routing

# Redux Tool Kit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - Selector

# Types of testing (developer)
 - Unit testing
 - Intergation testing
 - End to end testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed Jest
 - Installed Babel dependencies 
 - Configure Babel
 - Configure Parcel config file to disable default babel transpilation
 - Jest - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom