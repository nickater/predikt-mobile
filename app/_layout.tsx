import {
  CreatePrediction,
  CreateQuestion,
  Login,
  ViewPrediction,
  ViewQuestion,
} from "@/components";
import { Providers } from "@/providers";
import { SafeAreaView } from "react-native";
import "react-native-reanimated";

const question_id = "59f06889-fd36-45d1-baea-d672dfc9dec1";

export default function RootLayout() {
  return (
    <Providers>
      <SafeAreaView>
        <Login />
        <CreateQuestion />
        <CreatePrediction question_id={question_id} />
        <ViewPrediction />
        <ViewQuestion />
      </SafeAreaView>
    </Providers>
  );
}
