import { createFileRoute } from "@tanstack/react-router";
import { SignUp } from "@clerk/clerk-react";

export const Route = createFileRoute("/signup/$")({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
    >
      <SignUp routing="path" path="/signup" signInUrl="/signin" />
    </div>
  );
}
