import { useAuth } from "@/hooks/auth";
import React from "react";
import { View } from "react-native";
import { Text } from "../../atoms";
import { SignUpForm, SignUpFormUserInput } from "../../molecules";

export const SignUp = () => {
  const { signUp } = useAuth();

  const handleOnSubmit = async (data: SignUpFormUserInput) => {
    await signUp(data);
  };

  return (
    <View>
      <Text variant="header1" position="center">Sign Up</Text>

      <SignUpForm onSubmit={handleOnSubmit} />
    </View>
  );
};
