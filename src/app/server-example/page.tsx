import { auth } from "@/auth";
import SessionInfo from "@/components/session-info";

async function ServerExamplePage() {
  const session = await auth();

  console.log(session, "session");

  return (
    <div>
      <h1>React server component usage</h1>
      <p>
        This is example of server component using <code>auth()</code>
      </p>
      <SessionInfo session={session} />
    </div>
  );
}

export default ServerExamplePage;
