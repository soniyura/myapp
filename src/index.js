import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'blabla bla', likesCount: 15},
    {id: 4, message: 'ulalala', likesCount: 21}
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

let massages = [
    {id: 1, massage: 'Hi'},
    {id: 2, massage: 'How is your'},
    {id: 3, massage: 'Youuu'},
    {id: 4, massage: 'Yoy'},
    {id: 5, massage: 'Yol'},
    {id: 6, massage: 'Yoooool'},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} massages={massages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
