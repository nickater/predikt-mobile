import { SupabaseClient } from "@/supabase";
import { PredictionType } from "@/types/prediction";

export function getPredictionById(
  client: SupabaseClient,
  predictionId: PredictionType["id"],
) {
  return client
    .from("predictions")
    .select("*")
    .eq("id", predictionId)
    .throwOnError()
    .single();
}
