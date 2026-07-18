"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitQuestion(data: {
  name: string;
  email: string;
  category: string;
  question: string;
}) {
  const { error } = await supabase.from("questions").insert({
    nome: data.name,
    "e-mail": data.email,
    categoria: data.category,
    pergunta: data.question,
    status: "pending",
  });

  if (error) throw error;
  return { success: true };
}

export async function submitTestimonial(data: {
  name: string;
  city: string;
  text: string;
  rating: number;
}) {
  const { error } = await supabase.from("testimonials").insert({
    nome: data.name,
    cidade: data.city,
    texto: data.text,
    avaliação: data.rating,
    aprovado: false,
  });

  if (error) throw error;
  return { success: true };
}

export async function submitDiary(data: {
  name: string;
  city: string;
  age: number;
  story: string;
  email: string;
}) {
  const { error } = await supabase.from("diaries").insert({
    nome: data.name,
    cidade: data.city,
    idade: data.age,
    história: data.story,
    "e-mail": data.email,
    status: "pending",
  });

  if (error) throw error;
  return { success: true };
}

export async function subscribeNewsletter(email: string) {
  const { error } = await supabase.from("newsletter").insert({
    "e-mail": email,
    ativo: true,
  });

  if (error) {
    if (error.message.includes("duplicate") || error.message.includes("unique") || error.code === "23505") {
      return { success: true, message: "Email já cadastrado." };
    }
    console.error("Newsletter error:", error);
    throw error;
  }
  return { success: true };
}

export async function getApprovedTestimonials() {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("aprovado", true)
    .order("criado_em", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPublishedQuestions() {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("status", "published")
    .order("criado_em", { ascending: false });

  if (error) throw error;
  return data;
}
