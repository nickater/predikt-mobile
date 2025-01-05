import { supabase } from "@/libs/supabase";
import { QuestionType } from "@/types/question";

export const getPredictionsByQuestionId = async (questionId: QuestionType['id']) => {
        return supabase
        .from('predictions')
        .select('*')
        .eq('question_id', questionId)
        .throwOnError()
    }
