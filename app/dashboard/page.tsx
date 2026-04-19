import { createServerSupabase } from "@/lib/supabase-server";

export default async function Dashboard() {
const supabase = await createServerSupabase();

  const { data: contacts } = await supabase.from("contacts").select("*");

  const total = contacts?.length || 0;

  const birthdays = contacts?.filter(c => c.birthday) || [];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="bg-white p-4 rounded-xl border">
        <p>Total Contacts: {total}</p>
      </div>

      <div className="bg-white p-4 rounded-xl border">
        <h2 className="font-medium">Upcoming Birthdays</h2>
        {birthdays.slice(0, 5).map(c => (
          <div key={c.id}>
            {c.first_name} {c.last_name}
          </div>
        ))}
      </div>
    </div>
  );
