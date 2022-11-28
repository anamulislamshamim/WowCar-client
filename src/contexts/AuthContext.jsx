import React from 'react';
import { createContext } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-hot-toast";
import { useEffect } from 'react';
import { useState } from 'react';

export const authContext = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            if(result){
                toast.success("Login Successful!");
            }
        })
    };
    // call the auth state change observer api
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);
    const authInfo={ signInWithGoogle, user, loading };
    return (
        <authContext.Provider value={authInfo}>
            { children }
        </authContext.Provider>
    );
};

export default AuthContext;