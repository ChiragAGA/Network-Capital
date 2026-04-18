"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function ContactsPage() {
  const supabase = createClient();

  const [contacts, setContacts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const { data } = await supabase.from("contacts").select("*");
    setContacts(data || []);
  }

  const filtered = contacts.filter(c => {
    const q = search.toLowerCase();

    return (
      c.first_name.toLowerCase().includes(q) ||
      c.last_name.toLowerCase().includes(q) ||
      c.company?.toLowerCase().includes(q) ||
      c.skills?.join(" ").toLowerCase().includes(q) ||
      c.qualifications?.join(" ").toLowerCase().includes(q) ||
      c.current_city?.toLowerCase().includes(q) ||
      c.hometown?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="p-4">
      <input
        placeholder="Search people..."
        className="border p-2 w-full mb-4"
        onChange={e => setSearch(e.target.value)}
      />

      {filtered.map(c => (
        <div key={c.id} className="border p-3 rounded mb-2">
          <div className="font-medium">
            {c.first_name} {c.last_name}
          </div>
          <div className="text-sm text-gray-500">
            {c.company} · {c.role}
          </div>
        </div>
      ))}
    </div>
  );
}
