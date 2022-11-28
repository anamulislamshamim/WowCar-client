import React from 'react';
import { createContext } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
        return signInWithPopup(auth, googleProvider);
    };
    // logOut
    const logOut = () => {
        return signOut(auth);
    };
    // call the auth state change observer api
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);
    const authInfo={ signInWithGoogle, user, loading, logOut };
    return (
        <authContext.Provider value={authInfo}>
            { children }
        </authContext.Provider>
    );
};

export default AuthContext;