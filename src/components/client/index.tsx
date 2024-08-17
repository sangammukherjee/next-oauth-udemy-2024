"use client";

import { useSession } from "next-auth/react";
import SessionInfo from "../session-info";

function Client() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-extrabold">Client component example</h1>
      <p>
        This page fetch session data client side using the{" "}
        <code>useSession()</code> react hook
      </p>

      {status === "loading" ? (
        <div>Loading...Please wait</div>
      ) : (
        <SessionInfo session={session} />
      )}
    </div>
  );
}

export default Client;
