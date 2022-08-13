import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostAC, typingPostTextAC} from "../../../redux/store";


function MyPosts(props) {

    let postElement = React.createRef();

    let typingPostText = () => {
        let postText = postElement.current.value;

        props.dispatch(typingPostTextAC(postText));
    }
    let addPost = () => {


        props.dispatch(addPostAC());

    }

    let postElements = props.profilePage.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={postElement} value={props.profilePage.newPostText} onInput={typingPostText}
                              placeholder='Введите текст поста'/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;