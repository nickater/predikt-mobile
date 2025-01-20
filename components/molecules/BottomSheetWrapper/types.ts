import { PropsWithChildren } from 'react'

export type BottomSheetWrapperProps = PropsWithChildren<{
  show: boolean
  onClose?: () => void
  onOpen?: () => void
}>
