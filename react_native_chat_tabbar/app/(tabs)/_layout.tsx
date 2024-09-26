import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{ headerTitleAlign: "center", title: "Home" }}
        />
        <Tabs.Screen name="explore" options={{ title: "Explore" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </>
  );
};

export default TabLayout;
