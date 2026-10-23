import { useState } from "react";
import SettingsCard from "./SettingsCard";
import SaveFooter from "./SaveFooter";
import { inputClass, labelClass } from "../ui/formStyles";

const emptyForm = { current: "", next: "", confirm: "" };

// UI only. Nothing is sent anywhere and no password is stored.
export default function SecuritySettings() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setDone(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.current || !form.next || !form.confirm) {
      setError("Fill in all password fields.");
      return;
    }
    if (form.next.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (form.next !== form.confirm) {
      setError("New password and confirmation do not match.");
      return;
    }

    // Real password change will be added with authentication.
    setForm(emptyForm);
    setDone(true);
  }

  return (
    <SettingsCard
      title="Security"
      description="Change your password."
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>Current Password</label>
            <input
              type="password"
              name="current"
              value={form.current}
              onChange={handleChange}
              autoComplete="off"
              className={inputClass}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="min-w-[200px] flex-1">
              <label className={labelClass}>New Password</label>
              <input
                type="password"
                name="next"
                value={form.next}
                onChange={handleChange}
                autoComplete="off"
                className={inputClass}
              />
            </div>
            <div className="min-w-[200px] flex-1">
              <label className={labelClass}>Confirm New Password</label>
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                autoComplete="off"
                className={inputClass}
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <SaveFooter
          label="Update Password"
          saved={done}
          message="Password form submitted. Changing passwords will work once login is added."
        />
      </form>
    </SettingsCard>
  );
}
