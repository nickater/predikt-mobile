import { BottomSheetContext } from '@/providers/BottomSheetProvider'
import { useContext } from 'react'

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext)
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider')
  }
  return context
}
