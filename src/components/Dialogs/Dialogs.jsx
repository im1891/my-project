import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

function Message(props) {
    return (
        <div className="message">{props.text}</div>
    )
}
function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <Dialog name='Anya' id='1'/>
                <Dialog name='Pasha' id='2'/>
                <Dialog name='Sasha' id='3'  />
            </div>

            <div className={classes.messages}>

                <Message text='Hello'/>
                <Message text='How are you?'/>
                <Message text='What are yoy doing?'/>
            </div>
        </div>
    )

}

export default Dialogs;