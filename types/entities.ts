import { Tables, TablesInsert, TablesUpdate } from './database.types'

export type Prediction = Tables<'predictions'>
export type Question = Tables<'questions'>
export type UserProfile = Tables<'user_profiles'>

// create types
export type CreatePrediction = TablesInsert<'predictions'>
export type CreateQuestion = TablesInsert<'questions'>
export type CreateUserProfile = TablesInsert<'user_profiles'>

// update types
export type UpdatePrediction = TablesUpdate<'predictions'>
export type UpdateQuestion = TablesUpdate<'questions'>
export type UpdateUserProfile = TablesUpdate<'user_profiles'>
