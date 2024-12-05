import { PostgrestError } from '@supabase/supabase-js'

export function mapSupabaseError(error: PostgrestError): string {
  console.log('error', error)

  switch (error.code) {
    case '23505':
      return 'Duplicate key violation'
    case '23503':
      return 'Foreign key violation'
    case '22P02':
      return 'Invalid input syntax'
    // Add more cases as needed
    default:
      return 'Unknown error'
  }
}
