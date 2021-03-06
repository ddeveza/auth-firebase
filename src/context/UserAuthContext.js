import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, crea } from "firebase/auth";
import { auth } from "../firebase";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  const googleSignIn = () => {
    const googleAutProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAutProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <userContext.Provider value={{ signup, user, login, logOut, googleSignIn }}>{children}</userContext.Provider>;
};

export function useUserAuth() {
  return useContext(userContext);
}
