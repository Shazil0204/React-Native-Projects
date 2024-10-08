import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Header = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.text} href="/(auth)/settings">
        Go to
      </Link>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 50,
    color: "green",
    fontWeight: "bold",
  },
});
