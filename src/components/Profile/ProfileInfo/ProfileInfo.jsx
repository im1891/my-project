import React from "react";
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img
                    src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" alt='pic'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;