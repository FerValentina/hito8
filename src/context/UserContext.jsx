import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        alert(data.message || "Login incorrecto");
        return { success: false };
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        alert(data.message || "Error al registrar");
        return { success: false };
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setEmail(data.email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
