import React from "react";
import classes from './Profile.module.css';

function Profile() {
    return <div className={classes.content}>
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
            <div className={classes.posts}>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
                <div className={classes.item}>Post 3</div>
                <div className={classes.item}>Post 4</div>
                <div className={classes.item}>Post 5</div>
            </div>
        </div>
    </div>
}

export default Profile;