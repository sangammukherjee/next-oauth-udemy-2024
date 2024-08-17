import { auth } from "@/auth";
import Client from "@/components/client";
import { SessionProvider } from "next-auth/react";

async function ClientExamplePage() {
  const session = await auth();

  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider session={session}>
      <Client />
    </SessionProvider>
  );
}

export default ClientExamplePage;
