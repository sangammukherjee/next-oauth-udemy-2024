import { signOut } from "@/auth";
import { Button } from "../ui/button";

function LogoutButton() {
  async function handleLogout() {
    "use server";

    await signOut({
      redirectTo: "/",
    });
  }

  return (
    <form action={handleLogout}>
      <Button size="lg">Logout</Button>
    </form>
  );
}

export default LogoutButton;
