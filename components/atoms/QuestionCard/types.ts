import { FnVoid } from '@/types/general'

export type QuestionCardProps = {
  id: string
  authorId: string
  title: string
  deadline: string
  predictionCount: number | null
  predictionExists: boolean
  isSelected: boolean
  onSelect: FnVoid<string>
}
