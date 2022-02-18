import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addMessageChat, addPost} from "./redux/state";




export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessageChat={addMessageChat}/>
        </BrowserRouter>,

        document.getElementById('root')
    );
}

