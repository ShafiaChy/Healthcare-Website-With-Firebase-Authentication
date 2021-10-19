import React, { createContext } from 'react';
import useHooks from '../Hooks/useHooks';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   const allContexts = useHooks();
   console.log('hi' ,allContexts);
    return (
        <div>
           <AuthContext.Provider value={allContexts}>
               { children }
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;