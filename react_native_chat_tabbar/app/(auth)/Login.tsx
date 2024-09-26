import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Login = () => {

  const router = useRouter();
  
  const navigateToIndex = () => {
    router.push("/(tabs)/");
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="G back" onPress={navigateToIndex}/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
