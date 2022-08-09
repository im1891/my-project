import React from "react";
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                        <div>Post 3</div>
                        <div>Post 4</div>
                        <div>Post 5</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
