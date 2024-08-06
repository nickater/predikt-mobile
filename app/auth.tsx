import { Button, SignIn, SignUp } from "@/components";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default () => {
  const [shouldShowRegistration, setShouldShowRegistration] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {shouldShowRegistration ? <SignUp /> : <SignIn />}
        <Button
          title={shouldShowRegistration ? "Sign In" : "Register"}
          onPress={() => setShouldShowRegistration(!shouldShowRegistration)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
