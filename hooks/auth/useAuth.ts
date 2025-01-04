import { Session } from '@supabase/supabase-js'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { SignInProps, SignUpProps } from './types'
import { useQueryClient } from '@tanstack/react-query'
import { useSupabase } from '../useSupabase'
import { prefetchPredictionsByUser } from '@/queries/prediction/getPredictionsByUser'
import { prefetchPublicQuestions } from '@/queries/question/getPublicQuestions'
import { prefetchQuestionsByUser } from '@/queries/question/getQuestionsByUser'

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const queryClient = useQueryClient()
  const supabase = useSupabase()

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
  }, [supabase])

  const signIn = async (props: SignInProps) => {
    const { email, password } = props
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      Alert.alert('Error', error.message)
      return false
    }

    if (!session) return false

    await prefetchPublicQuestions(queryClient, supabase)
    await prefetchQuestionsByUser(queryClient, supabase, session.user.id)
    await prefetchPredictionsByUser(queryClient, supabase, session.user.id)

    return true
  }

  const signUp = useCallback(
    async (props: SignUpProps) => {
      const { email, password, username } = props
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        Alert.alert('Error', error.message)
        return false
      }
      if (!data) return false

      const { user } = data

      const { error: profileError } = await supabase
        .from('profiles')
        .upsert([{ id: user.id, username }])

      if (profileError) {
        Alert.alert('Error', profileError.message)
        return false
      }

      await prefetchPublicQuestions(queryClient, supabase)

      return true
    },
    [queryClient, supabase],
  )

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut()

    queryClient.invalidateQueries()

    if (error) Alert.alert('Error', error.message)
  }, [queryClient, supabase])

  return {
    loading,
    session,
    signIn,
    signUp,
    signOut,
  }
}
