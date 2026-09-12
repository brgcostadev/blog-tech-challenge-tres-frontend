import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(() => {
    return localStorage.getItem("autenticado") === "true";
  });

  function login() {
    localStorage.setItem("autenticado", "true");
    setAutenticado(true);
  }

  function logout() {
    localStorage.removeItem("autenticado");
    setAutenticado(false);
  }

  return (
    <AuthContext.Provider
      value={{
        autenticado,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
