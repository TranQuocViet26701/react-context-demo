import { createContext, useState } from 'react';
import { AuthContextInterface } from '../@types/auth';

const defaultAuthContext: AuthContextInterface = {
  isAuthenticated: false,
};

export const AuthContext =
  createContext<AuthContextInterface>(defaultAuthContext);

export interface AuthContextProviderProps {
  children: React.ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [auth, setAuth] = useState(defaultAuthContext);

  const onToggleAuth = () => {
    setAuth((prev) => ({
      ...prev,
      isAuthenticated: !prev.isAuthenticated,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...auth, onToggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
