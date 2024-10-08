import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Settings = () => {
  return (
    <View>
      <Link href={"/(tabs)/"}>settings</Link>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
