import React, {useState, useEffect} from 'react';

//This import is done by using CSS Modules
import classes from './Component.css';

const Interval = () => {

    //Since this is a functional component, we need to use React hooks in order to manipulate the state.
    //Below are examples of using useState to set our count, the function that will trigger the countdown, 
    //whether or not the button was clicked, and change the state of the button click to true or false.
    const [count, startCountdown]= useState(3);
    const [isClicked, setClicked] = useState(false);

    const clicked = () => {
        setClicked(true);
    }

    //In order to get the page to re-render, I had to use the useEffect hook. This allowed for me to use the
    //isClicked to control when my count down started and when I needed it to stop. By using useEffect I was
    //able to get the countdown to continue after the state initially changed when the page rendered. Without
    //it the countdown would either only go down by 1 or would just keep going into infinity.
    useEffect(() => {
        let countdown = null;
        if (isClicked && count > 0) {
            countdown = setInterval(() => {startCountdown(count => count - 1)}, 
            1000);
        } else if (isClicked && count === 0){
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    }, [isClicked, count])
    

    return (
        <div className={classes.Interval}>
        <h1>Interval</h1>
        <p>To demonstrate how setInterval works, click the button below. 
            You should expect to see the number shown count down from 3 to 0.</p>

        <button onClick={clicked}>Click me!</button>
        <p className={classes.Message}>{count}</p>
    </div>
    )
}

export default Interval;