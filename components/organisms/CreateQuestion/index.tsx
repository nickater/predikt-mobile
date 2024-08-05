import { useCreateQuestion } from "@/hooks/question/useCreateQuestion";
import { useAuth } from "@/hooks/useAuth";
import { StyleSheet, Text, View } from "react-native";
import { CreateQuestionForm } from "../../molecules";
import { CreateQuestionUserInput } from "./types";

export const CreateQuestion = (): React.JSX.Element => {
  const { mutate } = useCreateQuestion();
  const { user } = useAuth();

  const handleCreateQuestion = async ({ text }: CreateQuestionUserInput) => {
    if (!user) return;
    try {
      mutate({
        text,
        user_id: user?.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>CreateQuestion</Text>

      <View style={styles.createQuestionFormContainer}>
        <CreateQuestionForm onSubmit={handleCreateQuestion} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createQuestionFormContainer: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
});
