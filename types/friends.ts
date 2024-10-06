import z from 'zod'
import { Friend } from './entities'

export const FriendSchema: z.ZodType<Friend> = z.object({
  created_at: z.string(),
  friend_id: z.string(),
  id: z.string(),
  status: z.string(),
  user_id: z.string(),
})

export type QuestionType = z.infer<typeof FriendSchema>
