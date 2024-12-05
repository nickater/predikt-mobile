import { supabase } from '@/supabase'
import { Session } from '@supabase/supabase-js'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { SignInProps, SignUpProps } from './types'

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)

      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = useCallback(async (props: SignInProps) => {
    const { email, password } = props
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) Alert.alert('Error', error.message)
  }, [])

  const signUp = useCallback(async (props: SignUpProps) => {
    const { email, password, username } = props
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) Alert.alert('Error', error.message)

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ username })
      .match({ email })

    if (updateError) Alert.alert('Error', updateError.message)
  }, [])

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut()

    if (error) Alert.alert('Error', error.message)
  }, [])

  return {
    loading,
    session,
    signIn,
    signUp,
    signOut,
  }
}
