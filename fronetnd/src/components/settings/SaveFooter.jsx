import { primaryButtonClass } from "../ui/formStyles";

// Save button + small "saved" message at the bottom of a section.
export default function SaveFooter({ label = "Save Changes", saved, message }) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-4">
      {saved && <p className="text-sm text-green-600">{message || "Changes saved."}</p>}
      <button type="submit" className={primaryButtonClass}>
        {label}
      </button>
    </div>
  );
}
