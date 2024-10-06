import { Database, Tables } from './supabase'

export type DBTables = Database['public']['Tables']

export type Question = Tables<'questions'>
export type Profile = Tables<'profiles'>
export type Friend = Tables<'friends'>
export type Prediction = Tables<'predictions'>
