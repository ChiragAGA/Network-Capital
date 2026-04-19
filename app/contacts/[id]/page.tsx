import { createServerSupabase } from "@/lib/supabase-server";

export default async function ContactPage({ params }: any) {
    const supabase = await createServerSupabase();

  const { data } = await supabase
    .from("contacts")
    .select("*")
    .eq("id", params.id)
    .single();

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">
        {data.first_name} {data.last_name}
      </h1>

      <p>{data.company}</p>
      <p>{data.current_city}</p>

      <div className="mt-4">
        {data.skills?.map((s: string) => (
          <span key={s} className="mr-2 text-sm">
            #{s}
          </span>
        ))}
      </div>
    </div>
  );
}
