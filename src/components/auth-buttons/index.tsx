import { auth } from "@/auth";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

async function AuthButtons() {
  const session = await auth();

  if (!session?.user) return <LoginButton />;

  return <LogoutButton />;
}

export default AuthButtons;
