import React from 'react';
import ReactDOM from 'react-dom';
import state from "./redux/state";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, updataNewPostText} from "./redux/state";



let rerenderEntireTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updataNewPostText={updataNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

// eslint-disable-next-line no-undef
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
