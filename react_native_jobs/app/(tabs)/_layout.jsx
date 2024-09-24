import { Image, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import Icons, { icons } from "../../constants";
const TabsLayout = () => {
  const tabScreens = [
    {
      name: "home",
      title: "Home",
      icon: icons.home,
    },
    {
      name: "bookmark",
      title: "Bookmark",
      icon: icons.bookmark,
    },
    {
      name: "create",
      title: "Create",
      icon: icons.plus,
    },
    {
      name: "profile",
      title: "Profile",
      icon: icons.profile,
    },
  ];

  const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          style={{ color: color }}
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {tabScreens.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={tab.icon}
                  color={color}
                  name={tab.title}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
