import { createPrediction } from "@/queries/prediction/createPrediction";
import { CreatePredictionType } from "@/types/prediction";
import { useMutation } from "@tanstack/react-query";
import { useSupabase } from "../useSupabase";

export function useCreatePrediction(prediction: CreatePredictionType) {
  const client = useSupabase();

  const mutationFn = async () => {
    const questionResult = await createPrediction(client, prediction);
    return questionResult.data;
  };

  return useMutation({ mutationFn });
}
