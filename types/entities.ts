import { Tables, TablesInsert, TablesUpdate } from './database.types'

export type Prediction = Tables<'predictions'>
export type Question = Tables<'questions'>
export type UserProfile = Tables<'profiles'>

// create types
export type CreatePrediction = TablesInsert<'predictions'>
export type CreateQuestion = TablesInsert<'questions'>
export type CreateUserProfile = TablesInsert<'profiles'>

// update types
export type UpdatePrediction = TablesUpdate<'predictions'>
export type UpdateQuestion = TablesUpdate<'questions'>
export type UpdateUserProfile = TablesUpdate<'profiles'>
