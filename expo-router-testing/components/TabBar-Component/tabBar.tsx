import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabIcon from "./tabIcon";

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const primaryColor = "#0891b2";
  const greyColor = "#737373";

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            <View style={[isFocused ? styles.iconIsFocused : null]}>
              <TabIcon isFocused={isFocused} routeName={route.name} />
            </View>
            <Text
              style={[
                {
                  color: greyColor,
                  fontSize: 14, // Increase size if focused
                  textAlign: "center", // Center the text
                },
              ]}
            >
              {isFocused ? null : label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black", // iOS
    shadowOffset: { width: 0, height: 10 }, // iOS
    shadowRadius: 10, // iOS
    shadowOpacity: 0.3, // iOS (adjusted for better visibility)
    elevation: 10, // Android
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconIsFocused: {
    position: "absolute",
  },
});
