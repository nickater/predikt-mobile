import { useAuth } from "@/hooks/auth";
import { useCreateQuestion } from "@/hooks/question/useCreateQuestion";
import { StyleSheet, Text, View } from "react-native";
import { CreateQuestionForm } from "../../molecules";
import { CreateQuestionUserInput } from "./types";

export const CreateQuestion = (): React.JSX.Element => {
  const { mutate } = useCreateQuestion();
  const { session } = useAuth();

  const user = session?.user;

  const handleCreateQuestion = async ({ text }: CreateQuestionUserInput) => {
    if (!user) return;

    mutate({
      text,
      user_id: user?.id,
    });
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
