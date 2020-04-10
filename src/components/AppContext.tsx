import React, { createContext, useState } from 'react';



// Create contex with defaulft values
const defaultContex = {
    homeComp: '',
    sethomeComp: (s: string) => { },
    aboutComp: '',
    setAboutComp: (s: string) => { },
    usersComp: '',
    setUsersComp: (s: string) => { }
}

export const AppContext = createContext(defaultContex);

// Create a Contex Provider
type Props = {
    children: React.ReactNode
};

export const AppContextWrapper = ({ children }: Props) => {
    const [homeComp, sethomeComp] = useState('');
    const [aboutComp, setAboutComp] = useState('');
    const [usersComp, setUsersComp] = useState('')

    return (
        <AppContext.Provider value={{
            homeComp,
            sethomeComp,
            aboutComp,
            setAboutComp,
            usersComp,
            setUsersComp
        }}>
            {children}
        </AppContext.Provider>
    );
};



