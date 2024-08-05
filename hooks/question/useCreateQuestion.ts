import { createQuestion } from "@/queries/question/createQuestion";
import { CreateQuestionType } from "@/types/question";
import { mapSupabaseError } from "@/utils/supabase/mapError";
import { PostgrestError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { useSupabase } from "../useSupabase";

export function useCreateQuestion() {
  const client = useSupabase();

  const mutationFn = async (question: CreateQuestionType) => {
    const { data } = await createQuestion(client, question);

    return data;
  };

  const onError = (error: Error) => {
    const postgrestError = error as unknown as PostgrestError;
    const message = mapSupabaseError(postgrestError);

    console.error("useCreatePrediction", message);
  };

  return useMutation({ mutationFn, onError });
}
