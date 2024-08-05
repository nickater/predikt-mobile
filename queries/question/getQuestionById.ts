import { SupabaseClient } from "@/supabase";

export function getQuestionById(
  client: SupabaseClient,
  questionId: number,
) {
  return client
    .from("questions")
    .select("*")
    .eq("id", questionId)
    .throwOnError()
    .single();
}
