import { createContext, useReducer, useState } from 'react';
import { AuthContextType } from '../@types/auth';
import AuthReducer from '../reducers/authReducer';

const initialAuthContext: AuthContextType = {
  isAuthenticated: false,
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

export interface AuthContextProviderProps {
  children: React.ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthContext);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
