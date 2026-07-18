"use server";

import { supabase } from "@/lib/supabase/client";

export async function submitQuestion(data: {
  name: string;
  email: string;
  category: string;
  question: string;
}) {
  const { error } = await supabase.from("questions").insert({
    name: data.name,
    email: data.email,
    category: data.category,
    question: data.question,
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
    name: data.name,
    city: data.city,
    text: data.text,
    rating: data.rating,
    approved: false,
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
    name: data.name,
    city: data.city,
    age: data.age,
    story: data.story,
    email: data.email,
    status: "pending",
  });

  if (error) throw error;
  return { success: true };
}

export async function subscribeNewsletter(email: string) {
  const { error } = await supabase.from("newsletter").insert({
    email,
    active: true,
  });

  if (error) {
    if (error.message.includes("duplicate")) {
      return { success: true, message: "Email já cadastrado." };
    }
    throw error;
  }
  return { success: true };
}

export async function getApprovedTestimonials() {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPublishedQuestions() {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}
