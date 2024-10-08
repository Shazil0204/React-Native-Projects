import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar-Component/tabBar";

const AuthLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="settings" options={{ title: "Settings" }} />
        <Tabs.Screen name="description" options={{ title: "Description" }} />
        <Tabs.Screen name="contact" options={{ title: "Contact" }} />
      </Tabs>
    </>
  );
};

export default AuthLayout;
