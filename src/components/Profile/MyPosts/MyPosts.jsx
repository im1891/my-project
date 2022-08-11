import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {


    let postElements = props.state.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;