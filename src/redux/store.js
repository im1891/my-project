import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";



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

        this._state.profilePage = profilePageReducer(action, this._state.profilePage);
        this._state.dialogsPage = dialogsPageReducer(action, this._state.dialogsPage);

        this._callSubscriber(this._state);
    }

}
    export default store;




    window.store = store;