import { CreatePrediction, Login, ViewPrediction } from "@/components";
import { CreateQuestion } from "@/components/organisms/CreateQuestion";
import { ViewQuestion } from "@/components/organisms/ViewQuestion";
import { Providers } from "@/providers";
import { SafeAreaView } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Providers>
      <SafeAreaView>
        <Login />
        <CreateQuestion />
        <ViewQuestion />
        <CreatePrediction />
        <ViewPrediction />
      </SafeAreaView>
    </Providers>
  );
}
