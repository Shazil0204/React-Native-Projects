import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
      <Link href={{ pathname: "/(auth)/settings" }}>Go to settings</Link>
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
    fontWeight: "condensedBold",
  },
});
