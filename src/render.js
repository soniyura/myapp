import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from "./redux/state";
import {addPost, updataNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updataNewPostText={updataNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

