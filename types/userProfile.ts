import z from 'zod'
import { UserProfile, UpdateUserProfile } from './entities'

export const UserProfileSchema: z.ZodType<UserProfile> = z.object({
  id: z.string(),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
  username: z.string(),
  display_name: z.string().nullable(),
  correct_predictions: z.number().nullable(),
  prediction_count: z.number().nullable(),
  accuracy_score: z.number().nullable(),
  user_id: z.string(),
})

export type UserProfileType = z.infer<typeof UserProfileSchema>

export const UpdateUserProfileSchema: z.ZodType<UpdateUserProfile> = z.object({
  username: z.string().optional(),
})
