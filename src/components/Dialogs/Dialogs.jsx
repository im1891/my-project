import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message";
import {addMessageAC, typingMessageTextAC} from "../../redux/store";


function Dialogs(props) {

    let messageElement = React.createRef();

    let typingMessageText = () => {

        let messageText = messageElement.current.value;
        props.dispatch(typingMessageTextAC(messageText));
    }

    let addMessage = () => {
        props.dispatch(addMessageAC());
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea placeHolder='Введите сообщение' value={props.dialogsPage.newMessageText}
                              onInput={typingMessageText}
                              ref={messageElement}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;