import { Session } from "next-auth";

function SessionInfo({ session }: { session: Session | null }) {
  if (session?.user) {
    return (
      <div className="flex flex-col gap-4 p-4 w-full bg-gray-300 rounded-sm">
        <h3 className="text-xl font-extrabold">Current Session Data</h3>
        <div className="flex flex-col rounded-md bg-neutral-50">
          <div className="p-4 font-bold">Session</div>
          <pre className="py-6 px-4 whitespace-pre-wrap break-all">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <p>
      No session data, please <em>Sign In</em> first
    </p>
  );
}

export default SessionInfo;
