import { getPredictionById } from "@/queries/prediction/getPrediction";
import { PredictionType } from "@/types/prediction";
import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "../useSupabase";

export function useFetchPredictions(predictionId: PredictionType["id"]) {
  const client = useSupabase();
  const queryKey = ["profile", predictionId];

  const queryFn = async () => {
    const questionResult = await getPredictionById(client, predictionId);
    return questionResult.data;
  };

  return useQuery({ queryKey, queryFn });
}
