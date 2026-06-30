import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Willkommen im geschützten Bereich.</p>
    </div>
  );
}
