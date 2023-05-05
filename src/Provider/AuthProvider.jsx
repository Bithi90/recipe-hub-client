import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
     
    const user = null;

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)  =>{
        return signInWithEmailAndPassword(auth , email , password);
    }
     
    const updateProfile =  (email, password) =>{
        return updateProfile(auth.currentUser);
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        updateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;