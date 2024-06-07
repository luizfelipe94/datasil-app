import { createContext, useEffect, useMemo, useState } from "react";
import api from "@/services/api";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (token && user) {
      console.log(token, user);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
    } else {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [token, user]);

  const signin = async (email: string, password: string) => {
    const { data, status } = await api.post<{ token: string }>("/auth/login", { email, password });
    if (status === 200) {
      setToken(data.token);
      setUser(JSON.stringify(jwtDecode(data.token)));
    }
  };

  const signout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const contextValue = useMemo(() => ({ token, isAuthenticated: !!token, signin, signout, user: JSON.parse(user || "{}") }), [token, user]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );

};