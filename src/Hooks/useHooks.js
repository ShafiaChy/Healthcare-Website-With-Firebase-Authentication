import { useState,useEffect } from "react";
import {  getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,  signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useHooks = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
        
    //     .then(result => {
            
    // //         console.log(result.user);
            
    //  })
    //   .catch(error=>{
    //       console.log(error)
    //   }) 
     

      
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => { setIsLoading(false) });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              // ...
            } else {
              // User is signed out
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth])

    return {
        user,
        auth,
        isLoading,
        signInWithGoogle,
        logOut

    }
}

export default useHooks;