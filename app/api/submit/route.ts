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
          "e-mail": data.email,
        });
        break;

      case "question":
        result = await supabase.from("questions").insert({
          nome: data.name,
          pergunta: data.question,
        });
        break;

      case "testimonial":
        result = await supabase.from("testimonials").insert({
          nome: data.name,
          texto: data.text,
        });
        break;

      case "diary":
        result = await supabase.from("diaries").insert({
          nome: data.name,
          história: data.story,
          "e-mail": data.email,
        });
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
