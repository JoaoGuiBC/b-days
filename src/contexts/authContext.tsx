import { createContext, ReactNode, useEffect, useState } from "react";

import { auth, firebase } from '../services/firebase';

interface User {
  id: string;
  name: string;
};

interface AuthContextType {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

interface AuthContextProviderProps {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, uid } = user;

        if (!displayName) {
          throw new Error('Missing information from Google account.');
        }

        setUser({
          id: uid,
          name: displayName,
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, uid } = result.user;

      if (!displayName) {
        throw new Error('Missing information from Google account.');
      };

      setUser({
        id: uid,
        name: displayName,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}