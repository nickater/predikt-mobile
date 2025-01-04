import { supabase } from '@/libs/supabase.config'
import { useMemo } from 'react'

export function useSupabase() {
  const client = useMemo(() => supabase, [])

  return client
}
