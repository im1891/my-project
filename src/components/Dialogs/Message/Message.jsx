import React from "react";
import classes from '../Dialogs.module.css';

function Message(props) {
    return (
        <div className="message">{props.text}</div>
    )
}

export default Message;