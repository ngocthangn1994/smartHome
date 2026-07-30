import { createContext, useContext, useState, type ReactNode } from "react";
import api from "../api/api";
import type { IUser } from "../types";
import { useEffect } from "react";
type AuthContextType = {
  user: IUser | null;
  login: (email: string, passWord: string) => Promise<void>;
  register: (email: string, passWord: string, name: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};
type AuthProviderProps = {
  children: ReactNode;
};

const authConText = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        const response = await api.getMe();

        // Your backend getMe returns the user directly inside data
        setUser(response.data as IUser);
      } catch (error) {
        console.error("Unable to restore logged-in user:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadCurrentUser();
  }, []);

  const register = async (email: string, passWord: string, name: string) => {
    const response = await api.register(name, email, passWord);
    setUser((response.data as IUser) ?? null);
  };

  const login = async (email: string, passWord: string) => {
    const response = await api.login(email, passWord);

    const loginData = response.data as {
      user: IUser;
      token: string;
    };
    setUser(loginData.user);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <authConText.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </authConText.Provider>
  );
}

export function useAuth() {
  const context = useContext(authConText);
  if (!context) {
    throw new Error("Should include useAuth inside provider.");
  }
  return context;
}
