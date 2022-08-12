let rerenderEntireTree = () => {
    console.log('State was changed');
}




let state = {
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


}

    export const subscribe = (observer) => {
        rerenderEntireTree = observer;
    }
    export let typingPostText = (text) => {
        state.profilePage.newPostText = text;
        rerenderEntireTree(state);
    }

    export let addPostText = (postMessage) => {
        let newPost = {
            id: state.profilePage.posts[state.profilePage.posts.length - 1].id + 1,
            message: state.profilePage.newPostText,
            likesCount: 0
        };
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);


    }

    export let typingMessageText = (text) => {
        state.dialogsPage.newMessageText = text;
        rerenderEntireTree(state);
    }

    export let addNewMessageText = () => {
        let newMessage = {
            message: state.dialogsPage.newMessageText,
            id: state.dialogsPage.messages[state.dialogsPage.messages.length - 1].id + 1
        };
        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = '';
        rerenderEntireTree(state);
    }

    export default state;

    window.state = state;