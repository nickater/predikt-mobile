import { useAuth } from '../auth'
import { useFetchQuestionsByUser } from './useFetchQuestionsByUser'

export function useFetchOwnQuestions() {
  const { session } = useAuth()
  const userId = session?.user?.id

  return useFetchQuestionsByUser(userId)
}
