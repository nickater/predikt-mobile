import {
  profilesRowSchema,
  profilesInsertSchema,
  profilesRelationshipsSchema,
  profilesUpdateSchema,
} from './schemas'

export const profileSchema = profilesRowSchema

export type ProfileType = (typeof profileSchema)['_output']

export const createProfileSchema = profilesInsertSchema

export type CreateProfileType = (typeof createProfileSchema)['_output']

export const updateProfileSchema = profilesUpdateSchema

export type UpdateProfileType = (typeof updateProfileSchema)['_output']

export const profileRelationshipsSchema = profilesRelationshipsSchema

export type ProfileRelationshipsType =
  (typeof profileRelationshipsSchema)['_output']
