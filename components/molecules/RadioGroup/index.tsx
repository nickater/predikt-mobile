import { RadioButton } from '@/components/atoms'
import { FC } from 'react'
import { RadioGroup as BaseRadioGroup, View } from 'react-native-ui-lib'

type RadioGroupProps = {
  initialValue: string
  onValueChange: (value: string) => void
  buttonData: { label: string; value: string }[]
}

export const RadioGroup: FC<RadioGroupProps> = ({
  onValueChange,
  initialValue,
  buttonData,
}) => {
  return (
    <BaseRadioGroup
      initialValue={initialValue}
      onValueChange={onValueChange}
      marginT-16
    >
      {buttonData.map(({ label, value }) => (
        <View key={value} marginB-16>
          <RadioButton label={label} value={value} />
        </View>
      ))}
    </BaseRadioGroup>
  )
}
