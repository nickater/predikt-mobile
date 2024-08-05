import { createQuestion } from "@/queries/question/createQuestion";
import { CreateQuestionType } from "@/types/question";
import { useMutation } from "@tanstack/react-query";
import { useSupabase } from "../useSupabase";

export function useCreateQuestion() {
  const client = useSupabase();

  const mutationFn = async (question: CreateQuestionType) => {
    const createQuestionResult = await createQuestion(client, question);
    return createQuestionResult.data;
  };

  return useMutation({ mutationFn });
}
