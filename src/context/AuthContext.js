'use client'

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup,signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import firebase from "../Auth";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const googleSignIn = () =>{
        setLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .finally(() => setLoading(false));
    }

    const signOut = () => {
        setLoading(true);
        return firebase.auth().signOut()
            .finally(() => setLoading(false));
      };

    const signUp = (email, password) => {
        setLoading(true);
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .finally(() => setLoading(false));
      };

    const signInWithGoogle = () => {
        setLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .finally(() => setLoading(false));
    };

    const signIn = (email, password) => {
        setLoading(true);
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .finally(() => setLoading(false));
    };

    return (
        <AuthContext.Provider value={{user,loading , googleSignIn, signUp, signOut, signIn, signInWithGoogle}}>
            {children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}