"use client";

import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const supabase = createClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google"
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4">Network Capital</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
