// Settings data access (mock data for now).
// Later, replace each function body with the fetch() call in the comment.
//
// const API_URL = "http://localhost:5000";

import { initialSettings } from "../data/settings";

let settings = { ...initialSettings };

// GET /settings
export async function getSettings() {
  // const res = await fetch(`${API_URL}/settings`);
  // return res.json();
  return { ...settings };
}

// PATCH /settings/profile
export async function updateProfile(data) {
  settings = { ...settings, profile: data };
  return settings.profile;
}

// PATCH /settings/store
export async function updateStore(data) {
  settings = { ...settings, store: data };
  return settings.store;
}

// PATCH /settings/preferences
export async function updatePreferences(data) {
  settings = { ...settings, preferences: data };
  return settings.preferences;
}

// Password change is UI only for now. It needs real authentication first.
