import { createContext, useState } from "react";
import * as authService from "../services/authService";

export const AuthContext = createContext(null);

// Holds the logged-in user for the whole app.
export function AuthProvider({ children }) {
  // Read the saved session once, before the first render,
  // so a refresh does not flash the login page.
  const [session, setSession] = useState(() => authService.getStoredSession());

  async function login(credentials, remember) {
    const newSession = await authService.login(credentials);
    authService.saveSession(newSession, remember);
    setSession(newSession);
  }

  function logout() {
    authService.logout();
    setSession(null);
  }

  const value = {
    user: session ? session.user : null,
    isAuthenticated: Boolean(session),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
