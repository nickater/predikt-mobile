import { Database } from './database.types'

export type ProfileType = Database['public']['Tables']['profiles']['Row']

export type CreateProfileType =
  Database['public']['Tables']['profiles']['Insert']

export type UpdateProfileType =
  Database['public']['Tables']['profiles']['Update']

export type ProfileRelationshipsType =
  Database['public']['Tables']['profiles']['Relationships']
