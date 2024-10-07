import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window"); // Get the device width

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: width * 0.1,
    fontFamily: "caveat-bold",
    color: "#fff",
    textAlign: "center",
    lineHeight: 110, // Adjust as necessary
  },
});
