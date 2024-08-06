import { CustomSafeAreaView } from "@/components";
import { useAuth } from "@/hooks/auth";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";

export default () => {
  const { signOut } = useAuth();

  return (
    <CustomSafeAreaView>
      <Text>Logged In</Text>
      <Button title="Sign Out" onPress={signOut} />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({});
