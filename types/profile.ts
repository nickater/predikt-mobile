import z from 'zod'
import { UserProfile, UpdateUserProfile } from './entities'

export const UserProfileSchema: z.ZodType<UserProfile> = z.object({
  id: z.string(),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
  username: z.string(),
})

export type UserProfileType = z.infer<typeof UserProfileSchema>

export const UpdateUserProfileSchema: z.ZodType<UpdateUserProfile> = z.object({
  username: z.string().optional(),
})
