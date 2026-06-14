import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    // Yahan aap wo state define karein jo pure app mein share karni hai
    const [user, setUser] = React.useState(null);

    return (
        // .Provider component ke value prop mein data pass karein
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;