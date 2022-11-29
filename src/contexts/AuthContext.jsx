import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
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
    // create user with email and password:
    const registerWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login with email and password:
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // update user profile like add displayName and phtoURL
    const profileUpdate = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:image
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
    const authInfo={ signInWithGoogle, user, loading, logOut, registerWithEmailAndPassword, loginWithEmailAndPassword, profileUpdate };
    return (
        <authContext.Provider value={authInfo}>
            { children }
        </authContext.Provider>
    );
};

export default AuthContext;