import React, { ReactElement, useContext } from 'react';
import {Link} from 'react-router-dom';
import {AppContext}  from '../AppContext';



const Home = (): ReactElement => {
    const {homeComp, sethomeComp} = useContext(AppContext);

return(
    <div>
        <div>
            <Link to="/about">Go to About page</Link>

        </div>
        <div>
            <Link to="/users">Go to Users page</Link>

        </div>
        <div>
            <Link to="/summary">Go to Summary page</Link>

        </div>
        <div>
        <input value={homeComp} onChange={e => sethomeComp(e.target.value)}/>

        </div>
    </div>
)
}

export default Home;
