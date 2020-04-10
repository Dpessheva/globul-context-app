import React, { ReactElement, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Users = (): ReactElement => {
    const {usersComp, setUsersComp } = useContext(AppContext);
    return (
        <div>
            <div>
                <Link to="/">Go to Home page</Link>
            </div>
            <div>
                <Link to="/about">Go to About page</Link>
            </div>
            <div>
                <Link to="/summary">Go to Summary page</Link>
            </div>
            <input value={usersComp} onChange={e => setUsersComp(e.target.value)} />
        </div>
    );
}

export default Users;