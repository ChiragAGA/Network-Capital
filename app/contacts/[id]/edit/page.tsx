"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function EditContact({ params }: any) {
  const supabase = createClient();
  const router = useRouter();

  const [form, setForm] = useState<any>({});

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .eq("id", params.id)
      .single();

    setForm(data);
  }

  async function update() {
    await supabase.from("contacts").update(form).eq("id", params.id);
    router.push("/contacts");
  }

  return (
    <div className="p-4 space-y-2">
      <input
        value={form.first_name || ""}
        onChange={e => setForm({ ...form, first_name: e.target.value })}
      />

      <button onClick={update}>Update</button>
    </div>
  );
}
