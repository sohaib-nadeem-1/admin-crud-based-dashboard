import { useState } from "react";
import SettingsCard from "./SettingsCard";
import SaveFooter from "./SaveFooter";
import { inputClass, labelClass } from "../ui/formStyles";

export default function StoreSettings({ store, onSave }) {
  const [form, setForm] = useState(store);
  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSave(form);
    setSaved(true);
  }

  return (
    <SettingsCard
      title="Store Settings"
      description="Basic details about your store."
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>Store Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="min-w-[200px] flex-1">
              <label className={labelClass}>Store Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="min-w-[200px] flex-1">
              <label className={labelClass}>Store Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Store Address</label>
            <textarea
              name="address"
              rows={2}
              value={form.address}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <SaveFooter saved={saved} />
      </form>
    </SettingsCard>
  );
}
