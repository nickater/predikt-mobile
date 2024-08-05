import { createPrediction } from "@/queries/prediction/createPrediction";
import { CreatePredictionType } from "@/types/prediction";
import { useMutation } from "@tanstack/react-query";
import { useSupabase } from "../useSupabase";

export function useCreatePrediction() {
  const client = useSupabase();

  const mutationFn = async (prediction: CreatePredictionType) => {
    const { data, error } = await createPrediction(client, prediction);

    console.table({ data, error });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  return useMutation({ mutationFn });
}
