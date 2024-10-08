import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar-Component/tabBar";
import Header from "@/components/header";
// import TabBar from "@/components/tabBar";

const _layout = () => {
  return (
    <>
      <Header />
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
