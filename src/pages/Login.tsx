import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoginDTO } from "../types";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [loginData, setLoginData] = useState<LoginDTO>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(loginData);
      navigate("/");
    } catch (e) {
      setError("Invalid username or password");
    }
  };

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleData}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleData}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
