import React, { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "../api/auth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LoginDTO, RegisterDTO, User } from "../types";

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (data: LoginDTO) => Promise<void>;
  logout: () => void;
  register: (data: RegisterDTO) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {},
  register: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { getItem, setItem, removeItem } = useLocalStorage();

  useEffect(() => {
    const currentUserStr = getItem("user");
    if (currentUserStr) {
      const currentUser: User = JSON.parse(currentUserStr);
      setUser(currentUser);
    } else {
      setUser(null);
    }
  }, []);

  const handleUserLogin = (user: User) => {
    setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const login = async (data: LoginDTO) => {
    const userResponse = await loginRequest(data);
    handleUserLogin(userResponse);
  };

  const register = async (data: RegisterDTO) => {
    const userResponse = await registerRequest(data);
    handleUserLogin(userResponse);
  };

  const logout = () => {
    removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
