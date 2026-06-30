import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div>
      <h1>Einstellungen</h1>
      <p>Hier kannst du deine Einstellungen anpassen.</p>
    </div>
  );
}
