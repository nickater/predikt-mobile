import { useAdjustColor, useThemeColor } from '@/hooks'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { PropsWithChildren, useCallback, useRef } from 'react'
import { View } from 'react-native'

interface BottomSheetWrapperProps {
  children: React.ReactNode
  show: boolean
  onClose?: () => void
  onOpen?: () => void
}

export const BottomSheetWrapper: React.FC<
  PropsWithChildren<BottomSheetWrapperProps>
> = ({ children, show, onClose, onOpen }) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const theme = useThemeColor()
  const background = useAdjustColor(theme.background, 2)

  const snapPoints = ['60%']

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
      backdropComponent={() => <View style={{ backgroundColor: 'grey' }} />}
      enablePanDownToClose
      enableOverDrag={false}
      handleIndicatorStyle={{ backgroundColor: theme.textPrimary }}
      handleStyle={{ backgroundColor: background }}
      index={-1}
    >
      <BottomSheetView
        style={{ padding: 16, backgroundColor: background, flex: 1 }}
      >
        {children}
      </BottomSheetView>
    </BottomSheet>
  )
}
