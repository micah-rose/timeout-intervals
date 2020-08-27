import React, {useState, useEffect} from 'react';
import classes from './Component.css';

const Interval = () => {
    const [count, startCountdown]= useState(3);
    const [isClicked, setClicked] = useState(false);

    const clicked = () => {
        setClicked(true);
    }

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
            You should expect to see the number shown countdown from 3 to 0.</p>

        <button onClick={clicked}>Click me!</button>
        <p className={classes.Message}>{count}</p>
    </div>
    )
}

export default Interval;