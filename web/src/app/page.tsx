'use client'

import { authClient } from "@/lib/auth.client";
import { useRouter } from "next/navigation";

const HomePage = () => {

  const router = useRouter();

  return (
    <main>
      <h1>Welcome to the Velocity Dashboard</h1>
      <button onClick={async () => await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:3000/dashboard",
      }
      )}>
        Sign In with Google
      </button>
    </main>
  );
}

export default HomePage;