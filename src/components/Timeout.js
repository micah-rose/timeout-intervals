import React, {useState} from 'react';
import classes from './Component.css'

const Timeout = () => {

    const [timeoutMessage, changeMessage]= useState("Start");

    const changeHandler = () => {
        const change = setTimeout(() => {changeMessage("End")}, 3000);
        return () => clearTimeout(change);
    }

    return (
        <div className={classes.Timeout}>
            <h1>Timeout</h1>
            <p>To demonstrate how setTimeout works, click the button below. 
                You should expect to see the text change from "Start" to "End" after a 3 second delay.</p>

            <button onClick={changeHandler}>Click me!</button>
            <p className={classes.Message}>{timeoutMessage}</p>
        </div>
    )
}

export default Timeout;