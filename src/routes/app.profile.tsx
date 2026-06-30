import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div>
      <h1>Profil</h1>
      <p>Hier stehen deine Profil-Informationen.</p>
    </div>
  );
}
