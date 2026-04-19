import { createServerSupabase } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export default async function Home() {
const supabase = await createServerSupabase();
const { data } = await supabase.auth.getUser();

  if (data.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
