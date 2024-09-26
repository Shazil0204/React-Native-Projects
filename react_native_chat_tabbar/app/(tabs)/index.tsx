import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter(); // Hook to handle navigation

  const navigateToLogin = () => {
    router.push("/(auth)/Login");
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Login" onPress={navigateToLogin} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
