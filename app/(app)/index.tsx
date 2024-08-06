import { CustomSafeAreaView } from "@/components";
import { useAuth } from "@/hooks/auth";
import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet } from "react-native";

export default () => {
  const { signOut } = useAuth();

  const handleNavigateToPrediction = () => {
    router.navigate("prediction");
  };

  const handleNavigateToQuestion = () => {
    router.navigate("question");
  };

  return (
    <CustomSafeAreaView>
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Prediction" onPress={handleNavigateToPrediction} />
      <Button title="Question" onPress={handleNavigateToQuestion} />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({});
