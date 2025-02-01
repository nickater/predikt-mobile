import { Handle } from '@/components'
import { useThemeColor } from '@/hooks'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { StyleSheet, View } from 'react-native'

type BottomSheetContextValue = {
  expand: (options: BottomSheetProps) => void
  collapse: () => void
}

export const BottomSheetContext = createContext<
  BottomSheetContextValue | undefined
>(undefined)

export const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const [options, setOptions] = useState<BottomSheetProps | null>(null)
  const snapPoints = useMemo(() => options?.snapPoints || [0], [options])
  const theme = useThemeColor()

  useEffect(() => {
    if (options) {
      bottomSheetRef.current?.expand()
    } else {
      bottomSheetRef.current?.collapse()
    }
  }, [options])

  const collapseBottomSheet = useCallback(() => setOptions(null), [])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === 0) {
        collapseBottomSheet()
      }
    },
    [collapseBottomSheet],
  )

  const bottomSheetContext: BottomSheetContextValue = useMemo(
    () => ({
      expand: setOptions,
      collapse: collapseBottomSheet,
    }),
    [collapseBottomSheet],
  )

  return (
    <BottomSheetContext.Provider value={bottomSheetContext}>
      {children}

      {options && (
        <BottomSheet
          index={-1}
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          handleComponent={Handle}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              {...props}
              style={[
                { backgroundColor: 'rgba(0, 0, 0, 1)' },
                StyleSheet.absoluteFillObject,
              ]}
            />
          )}
          onChange={handleSheetChanges}
          enablePanDownToClose
        >
          <BottomSheetView
            style={{
              backgroundColor: theme.background,
              paddingHorizontal: 16,
              flexGrow: 1,
            }}
          >
            {options.children}
          </BottomSheetView>
        </BottomSheet>
      )}
    </BottomSheetContext.Provider>
  )
}
