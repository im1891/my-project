import React from "react";
import classes from './Dialogs.module.css';

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className='dialog'>
                    Anya
                </div>
                <div className='dialog'>
                    Pasha
                </div>
                <div className='dialog'>
                    Dima
                </div>
                <div className='dialog'>
                    Viktor
                </div>
            </div>
            <div className={classes.messages}>
                <div className="message">Hello</div>
                <div className="message">How are you?</div>
                <div className="message">What are you doing?</div>
            </div>
        </div>
    )

}

export default Dialogs;