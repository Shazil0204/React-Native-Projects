import Header from "@/components/header";
import { Tabs } from "expo-router";
import { View } from "react-native";

const _layout = () => {
  return (
    <>
      <View>
        <Header />
      </View>
      <Tabs screenOptions={{ headerShown: false }} />
    </>
  );
};

export default _layout;
