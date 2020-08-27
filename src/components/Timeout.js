import React, {useState} from 'react';

//This import is done by using CSS Modules
import classes from './Component.css'

const Timeout = () => {

    //Since this is a functional component, we need to use React hooks in order to manipulate the state.
    //Below are examples of using useState to set our timeoutMessage and the function that will change the
    //message after a 3 second delay.
    const [timeoutMessage, changeMessage]= useState("Start");

    //Here is where setTimeout is called. I call the changeMessage function within the setTimeout so the
    //page knows what action to perform after the 3 second delay (3000 ms). I then return clearTimeout 
    //for some clean up.
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