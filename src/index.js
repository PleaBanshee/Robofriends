// React uses webpack under the hood, that's why you can use import
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // you can import css files in React apps
import Hello from './Hello.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons' // react styling

// The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
// The purpose of the function is to display the specified HTML code inside the specified HTML element.

ReactDOM.render(
  <React.StrictMode>
    {/* greeting is a prop, passed on to the Hello component */}
    <Hello greeting={`React Ninja`}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
