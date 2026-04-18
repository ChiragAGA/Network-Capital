"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewContact() {
  const supabase = createClient();
  const router = useRouter();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    company: ""
  });

  async function save() {
    await supabase.from("contacts").insert(form);
    router.push("/contacts");
  }

  return (
    <div className="p-4 space-y-2">
      <input placeholder="First name" onChange={e => setForm({ ...form, first_name: e.target.value })} />
      <input placeholder="Last name" onChange={e => setForm({ ...form, last_name: e.target.value })} />
      <input placeholder="Company" onChange={e => setForm({ ...form, company: e.target.value })} />

      <button onClick={save} className="bg-black text-white px-4 py-2">
        Save
      </button>
    </div>
  );
}
