import React, { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "../api/users";
import { LoginDTO, RegisterDTO, UserResponse } from "../types";
import { getUser, removeUser, setLocalStorage } from "../utils/storage";

interface AuthContextProps {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
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
  const [user, setUser] = useState<UserResponse | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user: UserResponse | null = getUser();
    if (user.role && user.token) {
      setUser(user);
    } else {
      setUser(null);
    }
    setIsReady(true);
  }, []);

  const handleUserLogin = (user: UserResponse) => {
    setLocalStorage(user);
    setUser(user);
  };

  const login = async (data: LoginDTO) => {
    const userResponse: UserResponse = await loginRequest(data);
    handleUserLogin(userResponse);
  };

  const register = async (data: RegisterDTO) => {
    const userResponse = await registerRequest(data);
    handleUserLogin(userResponse);
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
