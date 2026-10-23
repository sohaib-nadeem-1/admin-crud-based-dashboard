import ProfileSettings from "../components/settings/ProfileSettings";
import StoreSettings from "../components/settings/StoreSettings";
import PreferencesSettings from "../components/settings/PreferencesSettings";
import SecuritySettings from "../components/settings/SecuritySettings";

export default function SettingsPage({
  settings,
  saveProfile,
  saveStore,
  savePreferences,
}) {
  if (!settings) {
    return <p className="text-sm text-slate-500">Loading settings...</p>;
  }

  return (
    <div className="flex max-w-3xl flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
        <p className="text-sm text-slate-500">
          Manage your profile, store details and preferences.
        </p>
      </div>

      <ProfileSettings profile={settings.profile} onSave={saveProfile} />
      <StoreSettings store={settings.store} onSave={saveStore} />
      <PreferencesSettings
        preferences={settings.preferences}
        onSave={savePreferences}
      />
      <SecuritySettings />
    </div>
  );
}
