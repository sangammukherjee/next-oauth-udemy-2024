import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function Admin() {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div>
      <h1 className="text-3xl font-extrabold">
        This is only available for admin users
      </h1>
    </div>
  );
}

export default Admin;
