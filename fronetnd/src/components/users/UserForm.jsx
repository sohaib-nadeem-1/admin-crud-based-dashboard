import { useState } from "react";
import { userRoles, userStatuses } from "../../data/users";
import {
  inputClass,
  labelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "../ui/formStyles";

// Used for both Add User and Edit User.
// Pass `user` to fill the form with existing data (Edit).
// No password field on purpose: authentication comes later.
export default function UserForm({ user, submitLabel, onSubmit, onCancel }) {
  const [form, setForm] = useState(
    user
      ? { name: user.name, email: user.email, role: user.role, status: user.status }
      : { name: "", email: "", role: "Customer", status: "Active" }
  );
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSubmit({
      name: form.name.trim(),
      email: form.email.trim(),
      role: form.role,
      status: form.status,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className={labelClass}>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Sarah Johnson"
          className={inputClass}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="name@example.com"
          className={inputClass}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="min-w-[140px] flex-1">
          <label className={labelClass}>Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className={inputClass}
          >
            {userRoles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-[140px] flex-1">
          <label className={labelClass}>Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className={inputClass}
          >
            {userStatuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
        <button type="button" onClick={onCancel} className={secondaryButtonClass}>
          Cancel
        </button>
        <button type="submit" className={primaryButtonClass}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
