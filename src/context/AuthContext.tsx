import { createContext, useEffect, useState, ReactNode } from "react";
import authService from "../services/authService";

const AuthContext = createContext<any>(undefined); 

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const signup = async (userData: any): Promise<any> => {
    try {
      const userDataResponse = await authService.signup(userData);
      setUser(userDataResponse);
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  };

  const signin = async (userData: any): Promise<any> => {
    try {
      const userDataResponse = await authService.signin(userData);
      setUser(userDataResponse);
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    signup,
    signin,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Export as both named and default export
export { AuthContext };
export default AuthContext;
