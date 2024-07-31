import z from "zod";
import { Question } from "./entities";

export const QuestionSchema: z.ZodType<Question> = z.object({
  id: z.string(),
  created_at: z.string(),
  text: z.string(),
  user_id: z.string(),
});

export type QuestionType = z.infer<typeof QuestionSchema>;
