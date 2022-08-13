const TYPING_POST_TEXT= 'TYPING-POST-TEXT';
const ADD_POST_TEXT= 'ADD-POST-TEXT';
const TYPING_MESSAGE_TEXT= 'TYPING-MESSAGE-TEXT';
const ADD_MESSAGE_TEXT= 'ADD-MESSAGE-TEXT';


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: "It's my first post", likesCount: 10},
            ],

            newPostText: '',
        },

        dialogsPage: {
            dialogs: [
                {name: 'Anya', id: 1},
                {name: 'Pasha', id: 2},
                {name: 'Sasha', id: 3},
                {name: 'Igor', id: 4},
            ],
            messages: [{message: 'Hello', id: 1},
                {message: 'How are you?', id: 2},
                {message: 'What are you doing?', id: 3},
            ],

            newMessageText: '',
        },


    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        if (action.type === TYPING_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST_TEXT) {
            let newPost = {
                id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === TYPING_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE_TEXT) {
            let newMessage = {
                message: this._state.dialogsPage.newMessageText,
                id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }

    }
}


export default store;

export const typingPostTextAC = postText =>  ({type: TYPING_POST_TEXT, text: postText});

export const addPostAC = () => ({type: ADD_POST_TEXT});

export const typingMessageTextAC = messageText => ({type: TYPING_MESSAGE_TEXT , text: messageText});

export const addMessageAC = () => ({type: ADD_MESSAGE_TEXT});


window.store = store;