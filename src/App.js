import React from "react";
import classes from './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {typingMessageText} from "./redux/state";


function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route excat path='/profile'
                           element={<Profile profilePage={props.state.profilePage}
                                             addPostText={props.addPostText}
                                             typingPostText={props.typingPostText}
                           />}
                    />
                    <Route exact path='/dialogs'
                           element={<Dialogs dialogsPage={props.state.dialogsPage}
                                             typingMessageText={props.typingMessageText}
                                             addNewMessageText={props.addNewMessageText}
                           />}
                    />
                </Routes>
            </div>
        </div>


    )

}

export default App;
