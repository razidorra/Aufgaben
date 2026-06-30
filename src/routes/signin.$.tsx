import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "@clerk/clerk-react";

export const Route = createFileRoute("/signin/$")({
  component: SignInPage,
});

function SignInPage() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
    >
      <SignIn routing="path" path="/signin" signUpUrl="/signup" />
    </div>
  );
}
