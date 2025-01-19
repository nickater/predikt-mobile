export function getTimeRemaining(deadline: string): string | null {
  if (!deadline) return null

  const deadlineDate = new Date(deadline)
  const now = new Date()
  const diff = deadlineDate.getTime() - now.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days > 1) return `${days} days remaining`

  if (days === 1) return '1 day remaining'

  if (days === 0) return 'Today'

  return 'Completed'
}
