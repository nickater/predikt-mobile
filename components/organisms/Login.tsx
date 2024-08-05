import { useAuth } from "@/hooks/useAuth";
import { useCallback } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Text } from "../atoms/Text";

export const Login = () => {
  const { signIn, signOut, signUp } = useAuth();

  const handleSignIn = useCallback(async () => {
    try {
      await signIn("nick@mail.com", "password");
    } catch (error) {
      console.error(error);
    }
  }, [signIn]);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  }, [signOut]);

  const handleSignUp = useCallback(async () => {
    try {
      await signUp("nick@mail.com", "password");
    } catch (error) {
      console.error(error);
    }
  }, [signUp]);

  return (
    <View>
      <Text variant="header1">Login</Text>
      <Button
        title="Sign In"
        onPress={handleSignIn}
      />
      <Button
        title="Sign Out"
        onPress={handleSignOut}
      />
      <Button
        title="Sign Up"
        onPress={handleSignUp}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
