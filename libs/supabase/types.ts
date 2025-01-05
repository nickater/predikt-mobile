import { Database } from '@/types/database.types'
import { createClient } from '@supabase/supabase-js'

export type SupabaseClient = ReturnType<typeof createClient<Database>>
