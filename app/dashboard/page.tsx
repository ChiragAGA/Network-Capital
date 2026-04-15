import { createServerSupabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">
        Welcome, {data.user.user_metadata?.full_name || "User"}
      </h1>

      <p className="text-gray-500 mt-2">
        Your network dashboard will live here.
      </p>
    </div>
  );
}
