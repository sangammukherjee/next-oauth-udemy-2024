"use client";

import { useEffect, useState } from "react";

function RouteHandlerPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch("/api/protected");
    const result = await response.json();

    if (result) {
      setData(result);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return <h1 className="text-xl font-bold">Loading! Please wait</h1>;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-extrabold">Route handler example</h1>
      <p>This page fetch data from route handler</p>

      <pre className="py-6 px-4 whitespace-pre-wrap break-all">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default RouteHandlerPage;
