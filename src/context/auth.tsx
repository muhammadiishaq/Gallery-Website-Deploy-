
import { createContext, FC, ReactElement, useEffect, useState } from "react";
import { auth } from "../firebase/config.ts";




interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
}

interface AuthContextTypes {
  user: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextTypes>({
  user: null,
  isLoading: false,
});

interface AuthProviderProps {
  children: ReactElement;   
}


export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  


useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged((User) => {
    //   setUser(User);
    //   setLoading(false);
    // });
    const unsubscribe = auth.onAuthStateChanged((User) => {
      if (User) {
        const user: User = {
          uid: User.uid,
          email: User.email || "",
          displayName: User.displayName || "",
          photoURL: User.photoURL || "",
        };
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Return the unsubscribe function to clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const value = { user, isLoading };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading &&children}
    </AuthContext.Provider>
  ); 
}
