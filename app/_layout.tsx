import { supabase } from "@/supabase";
import { useEffect } from "react";
import { Text } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  useEffect(() => {
    supabase.auth.signUp({
      email: "nick@mail.com",
      password: "password",
    });
  });

  return <Text>Hello</Text>;
}
