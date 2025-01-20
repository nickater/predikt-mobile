import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

export type FormProps<H extends UseFormReturn<any, any, undefined>> = FC<
  Pick<H, 'control' | 'formState'> & {
    onSubmit: () => void
  }
>
