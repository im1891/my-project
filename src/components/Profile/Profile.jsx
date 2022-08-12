import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPostText={props.addPostText} typingPostText={props.typingPostText}/>
        </div>)
}

export default Profile;