import { CreatePredictionType } from "@/types/prediction";
import { FC } from "react";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { TextInput } from "../../atoms";

type Inputs = Pick<CreatePredictionType, "text">;

type CreatePredictionFormProps = {
  onSubmit: (data: Inputs) => void;
};

export const CreatePredictionForm: FC<CreatePredictionFormProps> = (
  { onSubmit },
) => {
  const { control, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      text: "",
    },
  });

  const onValidSubmission = (data: Inputs) => {
    onSubmit(data);
    console.log(data);
  };

  const onInvalidSubmission: SubmitErrorHandler<Inputs> = (errors) => {
    console.error(errors);
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Prediction"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="text"
      />
      {errors.text && <Text>This is required.</Text>}

      <Button
        title="Submit"
        onPress={handleSubmit(onValidSubmission, onInvalidSubmission)}
      />
    </View>
  );
};
