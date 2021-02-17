// React uses webpack under the hood, that's why you can use import
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // you can import css files in React apps
import App from './App.js';
import CardList from './CardList.js';
import { robots } from './robots';
import 'tachyons' // react styling

// The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
// The purpose of the function is to display the specified HTML code inside the specified HTML element.
ReactDOM.render(
  <React.StrictMode> {/* helps find potential errors */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);