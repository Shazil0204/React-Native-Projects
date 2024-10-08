import React, { useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabIcon from "./tabIcon";

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const greyColor = "#737373";
  const animations = useRef(new Animated.Value(state.index)).current;

  useEffect(() => {
    Animated.timing(animations, {
      toValue: state.index,
      duration: 250, // Duration of the animation
      useNativeDriver: false, // Set to true if animating transform properties
    }).start();
  }, [state.index]);

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
            <Animated.Text
              style={{
                color: greyColor,
                fontSize: 14,
                textAlign: "center",
                opacity: isFocused ? 0 : 1, // Show when focused, hide otherwise
              }}
            >
              {label} {/* Show label for the focused tab */}
            </Animated.Text>
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
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 10,
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
