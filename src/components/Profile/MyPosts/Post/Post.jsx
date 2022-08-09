import React from "react";
import classes from './Post.module.css';

function Post() {
    return <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oR06hyCdxS0tijklIugprdL_yHhVPZ3wuw&usqp=CAU"/>
        Post 1
        <div>
            <span>like</span>
        </div>

    </div>

}

export default Post;