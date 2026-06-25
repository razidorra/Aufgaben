import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

type RequireAuthProps = {
  children: ReactNode;
};

export function RequireAuth({ children }: RequireAuthProps) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/signin/$" params={{ _splat: "" }} replace />
      </SignedOut>
    </>
  );
}
