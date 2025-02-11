import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('AuthContext:', context);  // This will help you see when it’s null

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};