import { useState } from "react";
import SettingsCard from "./SettingsCard";
import SaveFooter from "./SaveFooter";
import { inputClass, labelClass } from "../ui/formStyles";

export default function ProfileSettings({ profile, onSave }) {
  const [form, setForm] = useState(profile);
  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    // Temporary preview URL (dummy). A real upload comes with the backend.
    setForm({ ...form, image: URL.createObjectURL(file) });
    setSaved(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSave(form);
    setSaved(true);
  }

  return (
    <SettingsCard
      title="Profile Settings"
      description="Your name, email and profile picture."
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {form.image ? (
              <img
                src={form.image}
                alt="Profile"
                className="h-16 w-16 rounded-full border border-slate-200 object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-semibold text-white">
                {form.name.charAt(0).toUpperCase() || "A"}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <label className={labelClass}>Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border file:border-slate-300 file:bg-white file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-50"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="min-w-[200px] flex-1">
              <label className={labelClass}>Admin Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="min-w-[200px] flex-1">
              <label className={labelClass}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <SaveFooter saved={saved} />
      </form>
    </SettingsCard>
  );
}
