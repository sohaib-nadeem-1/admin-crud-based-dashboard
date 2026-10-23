// All authentication logic lives in this file (frontend-only for now).
// The UI never reads or writes storage directly. It only uses these functions.
//
// When the Express API is ready, replace the body of login() with the
// fetch() call in the comment and keep everything else the same.
//
// const API_URL = "http://localhost:5000";

const STORAGE_KEY = "shopadmin_auth";

// Demo account for the mock login. Delete this when the real API exists.
const DEMO_ADMIN = {
  email: "admin@shopadmin.com",
  password: "admin123",
  name: "Admin",
  role: "Admin",
};

export const DEMO_CREDENTIALS = {
  email: DEMO_ADMIN.email,
  password: DEMO_ADMIN.password,
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// POST /auth/login
// Returns { token, user } or throws an Error with a message.
export async function login({ email, password }) {
  // const res = await fetch(`${API_URL}/auth/login`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email, password }),
  // });
  // if (!res.ok) throw new Error("Invalid email or password");
  // return res.json(); // { token, user }

  await wait(800); // pretend the network is slow

  const emailMatches = email.trim().toLowerCase() === DEMO_ADMIN.email;
  const passwordMatches = password === DEMO_ADMIN.password;

  if (!emailMatches || !passwordMatches) {
    throw new Error("Invalid email or password");
  }

  return {
    token: "demo-token",
    user: {
      name: DEMO_ADMIN.name,
      email: DEMO_ADMIN.email,
      role: DEMO_ADMIN.role,
    },
  };
}

// Remember Me ON  -> localStorage (stays after the browser is closed)
// Remember Me OFF -> sessionStorage (stays after refresh, ends with the tab)
export function saveSession(session, remember) {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function getStoredSession() {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const session = JSON.parse(raw);
    // Basic check that the saved data looks right
    if (!session || !session.token || !session.user) return null;
    return session;
  } catch {
    return null;
  }
}

// POST /auth/logout (when the API needs it)
export function logout() {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
}
