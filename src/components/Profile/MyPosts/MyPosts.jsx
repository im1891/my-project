import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {message: 'Hi, how are you?', id: 1, likesCount: 3},
        {message: "It's my first post", likesCount: 10},
    ]

    let postElements = posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>)

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