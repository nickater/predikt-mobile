import { Providers } from '@/providers'
import { supabase } from '@/supabase'
import { Session } from '@supabase/supabase-js'
import { Slot } from 'expo-router'
import { useEffect, useState } from 'react'
import 'react-native-reanimated'
import Auth from './auth'

export default () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  return <Providers>{session ? <Slot /> : <Auth />}</Providers>
}
