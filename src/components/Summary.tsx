import React, { ReactElement, useContext } from 'react';
import { AppContext } from './AppContext';
import {Link} from 'react-router-dom';
 
const Summary = (): ReactElement => {
    const { aboutComp, homeComp, usersComp } = useContext(AppContext);
    return (
        <div>
            <p>Your input is:</p>
            <p>{homeComp}</p>
            <p>{aboutComp}</p>
            <p>{usersComp}</p>
            <div><Link to="/">Go to Home</Link></div>
        </div>

    );
}


export default Summary;
