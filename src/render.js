import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPostText, typingPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>

                <App state={state} addPostText={addPostText} typingPostText={typingPostText}/>

            </React.StrictMode>
        </BrowserRouter>
    );
};



