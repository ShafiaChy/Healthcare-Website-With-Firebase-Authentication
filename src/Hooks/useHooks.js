import { useState,useEffect } from "react";
import {  getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useHooks = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            
            console.log(result.user);
      })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user); 
            } 
          });
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut

    }
}

export default useHooks;