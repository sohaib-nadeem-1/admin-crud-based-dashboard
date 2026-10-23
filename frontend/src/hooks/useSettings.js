import { useEffect, useState } from "react";
import {
  getSettings,
  updateProfile,
  updateStore,
  updatePreferences,
} from "../services/settingsService";

export default function useSettings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    getSettings().then(setSettings);
  }, []);

  async function saveProfile(data) {
    const profile = await updateProfile(data);
    setSettings((prev) => ({ ...prev, profile }));
  }

  async function saveStore(data) {
    const store = await updateStore(data);
    setSettings((prev) => ({ ...prev, store }));
  }

  async function savePreferences(data) {
    const preferences = await updatePreferences(data);
    setSettings((prev) => ({ ...prev, preferences }));
  }

  return { settings, saveProfile, saveStore, savePreferences };
}
