import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

function Message(props) {
    return (
        <div className="message">{props.text}</div>
    )
}


function Dialogs(props) {

    let dialogs = [
        {name: 'Anya', id: 1},
        {name: 'Pasha', id: 2},
        {name: 'Sasha', id: 3},
        {name: 'Igor', id: 4},
    ]

    let messages = [
        {message: 'Hello', id: 1},
        {message: 'How are you?', id: 2},
        {message: 'What are you doing?', id: 3},
    ]

    let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message text={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs;