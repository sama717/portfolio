import type { Metadata } from "next";
import { cacheLife } from "next/cache";

export const metadata: Metadata = {
  title: "Health check",
  robots: { index: false },
};

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getHealthData(): Promise<Post | null> {
  "use cache";
  cacheLife("minutes");

  const url = process.env.HEALTH_API_URL;
  if (!url) return null;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function Health() {
  const data = await getHealthData();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
      <h1 className="text-3xl font-semibold sm:text-5xl">Health check</h1>

      {data ? (
        <div className="mt-8 rounded-lg bg-panel p-6">
          <p className="font-mono text-sm text-text/60">post #{data.id}</p>
          <h2 className="mt-2 text-xl font-semibold">{data.title}</h2>
          <p className="mt-2 text-text/70">{data.body}</p>
        </div>
      ) : (
        <p className="mt-8 text-text/60">
          Could not load data. Check that HEALTH_API_URL is set.
        </p>
      )}
    </div>
  );
}