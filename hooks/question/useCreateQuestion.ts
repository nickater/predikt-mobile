import { createQuestion } from "@/queries/question/createQuestion";
import { CreateQuestionType } from "@/types/question";
import { useMutation } from "@tanstack/react-query";
import { useSupabase } from "../useSupabase";

export function useCreateQuestion() {
  const client = useSupabase();

  const mutationFn = async (question: CreateQuestionType) => {
    const { data, error } = await createQuestion(client, question);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  return useMutation({ mutationFn });
}
