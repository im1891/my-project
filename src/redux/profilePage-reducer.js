const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profilePageReducer = (action, state) => {

    switch (action.type) {
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_POST:
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
        default:
            return state;
    }


}

export const updatePostTextAC = postText => ({type: UPDATE_POST_TEXT, text: postText});
export const addPostAC = () => ({type: ADD_POST});

export default profilePageReducer;