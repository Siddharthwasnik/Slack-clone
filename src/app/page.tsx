"use client";

import { AuthScreen } from "@/features/auth/components/auth-screen"
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  return (
    <div>
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </main>
    </div>
  )
}