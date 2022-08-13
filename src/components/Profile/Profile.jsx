import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>)
}

export default Profile;