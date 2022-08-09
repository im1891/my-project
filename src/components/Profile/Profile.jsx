import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div className={classes.content}>
        <div>
            <img
                src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"/>
        </div>
        <div>
            ava + description
        </div>
       <MyPosts />
    </div>
}

export default Profile;