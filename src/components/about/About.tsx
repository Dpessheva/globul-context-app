import React, { ReactElement , useContext} from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../AppContext';


const About = (): ReactElement =>{
    const {aboutComp, setAboutComp} = useContext(AppContext);
    return (
        <div>
            <div>
            <Link to="/">Go to Home page</Link>

            </div>
            <div>

            <Link to="/users">Go to Users page</Link>
            </div>
            <div>

            <Link to="/summary">Go to Summary page</Link>
            </div>
            <div>

            <input value={aboutComp} onChange={e=> setAboutComp(e.target.value)} />
             </div>
        </div>

    );

}

export default About;

