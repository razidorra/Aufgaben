import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <SignIn fallbackRedirectUrl="/app/dashboard" />
    </div>
  );
}

export default Login;
