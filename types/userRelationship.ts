import { z } from 'zod'
import {
  CreateUserRelationship,
  UserRelationship,
  UpdateUserRelationship,
} from './entities'

export const userRelationshipSchema: z.ZodType<UserRelationship> = z.object({
  id: z.string(),
  following_id: z.string(),
  follower_id: z.string(),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
})

export type UserRelationshipType = z.infer<typeof userRelationshipSchema>

export const createUserRelationshipSchema: z.ZodType<CreateUserRelationship> =
  z.object({
    following_id: z.string(),
    follower_id: z.string(),
  })

export type CreateUserRelationshipType = z.infer<
  typeof createUserRelationshipSchema
>

export const updateUserRelationshipSchema: z.ZodType<UpdateUserRelationship> =
  z.object({
    following_id: z.string().optional(),
    follower_id: z.string().optional(),
  })

export type UpdateUserRelationshipType = z.infer<
  typeof updateUserRelationshipSchema
>
