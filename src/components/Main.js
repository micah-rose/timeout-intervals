import React from 'react';
import classes from './Component.css'
import Timeout from './Timeout';
import Interval from './Interval';

const Main = () => {
    return (
        <div className = {classes.Main}>
            <Timeout />
            <br />
            <br />
            <Interval />
        </div>
    )
}

export default Main;