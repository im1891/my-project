import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message";
import {sendMessageAC, updateMessageTextAC} from "../../redux/dialogsPage-reducer";


function Dialogs(props) {

    let messageElement = React.createRef();

    let typingMessageText = (event) => {

        let messageText = event.currentTarget.value ;
        props.dispatch(updateMessageTextAC(messageText));
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea placeHolder='Введите сообщение' value={props.dialogsPage.newMessageText}
                              onInput={typingMessageText}
                              ref={messageElement}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;