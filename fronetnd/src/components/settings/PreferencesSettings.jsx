import { useState } from "react";
import SettingsCard from "./SettingsCard";
import SaveFooter from "./SaveFooter";
import Toggle from "./Toggle";

function PreferenceRow({ title, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-medium text-slate-900">{title}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <Toggle checked={checked} onChange={onChange} label={title} />
    </div>
  );
}

export default function PreferencesSettings({ preferences, onSave }) {
  const [form, setForm] = useState(preferences);
  const [saved, setSaved] = useState(false);

  function handleToggle(name, value) {
    setForm({ ...form, [name]: value });
    setSaved(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSave(form);
    setSaved(true);
  }

  return (
    <SettingsCard
      title="Preferences"
      description="Choose which notifications you want to receive."
    >
      <form onSubmit={handleSubmit}>
        <div className="divide-y divide-slate-100">
          <PreferenceRow
            title="Email notifications"
            description="Get store updates and news by email."
            checked={form.emailNotifications}
            onChange={(value) => handleToggle("emailNotifications", value)}
          />
          <PreferenceRow
            title="Order notifications"
            description="Get notified when a new order is placed."
            checked={form.orderNotifications}
            onChange={(value) => handleToggle("orderNotifications", value)}
          />
        </div>

        <SaveFooter saved={saved} />
      </form>
    </SettingsCard>
  );
}
