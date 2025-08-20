import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

import app from '../../firebase/firebase.console';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading]=useState(true);

  const createUserEmailOrPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };





    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
      });

      return () => unsubscribe();
    },[]);

    


      return (
        <authContext.Provider value={{ createUserEmailOrPassword ,isLoading}}>
          {children}
        </authContext.Provider>
      );
    };

export default AuthProvider;











