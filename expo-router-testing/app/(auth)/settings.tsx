import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Link style={{ fontSize: 30 }} href={"/(tabs)/"}>
        settings
      </Link>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
