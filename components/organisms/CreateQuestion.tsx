import { useCreateQuestion } from "@/hooks/question/useCreateQuestion";
import { useAuth } from "@/hooks/useAuth";
import { Button, Text, View } from "react-native";

export const CreateQuestion = (): React.JSX.Element => {
  const { mutate } = useCreateQuestion();
  const { user } = useAuth();

  const handleCreateQuestion = async () => {
    console.log("CreateQuestion", user);
    if (!user) return;
    try {
      mutate({
        text: "What is the capital of France?",
        user_id: user?.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>CreateQuestion</Text>

      <Button title="CREATE" onPress={handleCreateQuestion} />
    </View>
  );
};
