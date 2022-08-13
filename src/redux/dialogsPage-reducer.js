const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsPageReducer = (action, state) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id: state.messages[state.messages.length - 1].id + 1
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }

}

export const updateMessageTextAC = messageText => ({type: UPDATE_MESSAGE_TEXT, text: messageText});
export const sendMessageAC = () => ({type: SEND_MESSAGE});

export default dialogsPageReducer;