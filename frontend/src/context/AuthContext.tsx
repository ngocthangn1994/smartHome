import { createContext, useContext, useState, type ReactNode } from "react";
import api from "../api/api";
import type { IUser } from "../types";

type AuthContextType = {
  user: IUser | null;
  login: (email: string, passWord: string) => Promise<void>;
  register: (email: string, passWord: string, name: string) => Promise<void>;
  logout: () => void;
};
type AuthProviderProps = {
  children: ReactNode;
};

const authConText = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  const register = async (email: string, passWord: string, name: string) => {
    const response = await api.register(email, passWord, name);
    setUser((response.data as IUser) ?? null);
  };

  const login = async (email: string, passWord: string) => {
    const response = await api.login(email, passWord);

    const loginData = response.data as {
      user: IUser;
      token: string;
    };
    setUser(loginData.user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <authConText.Provider value={{ user, login, register, logout }}>
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
