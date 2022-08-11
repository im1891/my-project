import React from "react";
import classes from './Post.module.css';

function Post(props) {
    return <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oR06hyCdxS0tijklIugprdL_yHhVPZ3wuw&usqp=CAU"/>
        {props.message}
        <div>
            <span>like {props.likesCount}</span>
        </div>

    </div>

}

export default Post;