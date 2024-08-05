import { createPrediction } from "@/queries/prediction/createPrediction";
import { CreatePredictionType } from "@/types/prediction";
import { mapSupabaseError } from "@/utils/supabase/mapError";
import { PostgrestError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { useSupabase } from "../useSupabase";

export function useCreatePrediction() {
  const client = useSupabase();

  const mutationFn = async (prediction: CreatePredictionType) => {
    const { data } = await createPrediction(client, prediction);

    return data;
  };

  const onError = (error: Error) => {
    const postgrestError = error as unknown as PostgrestError;
    const message = mapSupabaseError(postgrestError);

    console.error("useCreatePrediction", message);
  };

  return useMutation({ mutationFn, onError });
}
