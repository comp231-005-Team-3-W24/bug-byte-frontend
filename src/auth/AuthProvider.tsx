import React, { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "../api/users";
import { LoginDTO, RegisterDTO, User } from "../types";
import { getUser, removeUser, setLocalStorage } from "../utils/storage";

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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user: User | null = getUser();
    if (user?.role && user?.token) {
      setUser(user);
    } else {
      setUser(null);
    }
    setIsReady(true);
  }, []);

  const handleUserLogin = (user: User) => {
    setLocalStorage(user);
    setUser(user);
  };

  const login = async (data: LoginDTO) => {
    const user: User = await loginRequest(data);
    handleUserLogin(user);
  };

  const register = async (data: RegisterDTO) => {
    const authResponse = await registerRequest(data);
    handleUserLogin(authResponse);
  };

  const logout = () => {
    removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};
