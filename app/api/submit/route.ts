import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    const supabase = createClient(supabaseUrl, supabaseKey);

    let result;

    switch (type) {
      case "newsletter":
        result = await supabase.from("newsletter").insert({
          email: data.email,
        });
        break;

      case "question":
        result = await supabase.from("questions").insert({
          name: data.name,
          email: data.email,
          category: data.category,
          question: data.question,
        });
        break;

      case "testimonial":
        result = await supabase.from("testimonials").insert({
          name: data.name,
          city: data.city,
          text: data.text,
          rating: data.rating,
        });
        break;

      case "diary":
        result = await supabase.from("diaries").insert({
          name: data.name,
          city: data.city,
          age: data.age,
          story: data.story,
          email: data.email,
        });
        break;

      case "especialista":
        result = await supabase.from("specialists").insert({
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          registration: data.registration,
          whatsapp: data.whatsapp,
          city: data.city,
          linkedin: data.linkedin,
          atendimento: data.atendimento,
          message: data.message,
        });

        // Send notification email to site owner
        if (!result?.error) {
          try {
            await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "https://filhocuidador.com.br"}/api/notify-specialist`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
          } catch (emailErr) {
            console.error("Failed to send notification:", emailErr);
          }
        }
        break;

      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    if (result?.error) {
      console.error("Supabase error:", result.error);
      if (result.error.code === "23505") {
        return NextResponse.json({ success: true, message: "Já cadastrado." });
      }
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
