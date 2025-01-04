import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { PropsWithChildren, useCallback, useRef } from 'react'
import { View } from 'react-native'

interface BottomSheetWrapperProps {
  children: React.ReactNode
  show: boolean
  onClose: () => void
  onOpen: () => void
}

export const BottomSheetWrapper: React.FC<
  PropsWithChildren<BottomSheetWrapperProps>
> = ({ children, show, onClose, onOpen }) => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = ['40%']

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose()
      }
    },
    [onClose],
  )

  if (show) {
    bottomSheetRef.current?.expand()
    onOpen()
  }

  if (!show) {
    bottomSheetRef.current?.close()
  }

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose
      backdropComponent={() => <View style={{ backgroundColor: 'grey' }} />}
      index={-1}
    >
      <BottomSheetView style={{ padding: 16 }}>{children}</BottomSheetView>
    </BottomSheet>
  )
}
