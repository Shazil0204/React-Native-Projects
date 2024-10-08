import { Ionicons } from "@expo/vector-icons";

interface TabIconProps {
  isFocused: boolean;
  routeName: string;
}

const TabIcon: React.FC<TabIconProps> = ({ isFocused, routeName }) => {
  let iconName: React.ComponentProps<typeof Ionicons>["name"];

  switch (routeName) {
    case "index":
      iconName = isFocused ? "home" : "home-outline";
      break;
    case "create":
      iconName = isFocused ? "add-circle" : "add-circle-outline";
      break;
    case "explore":
      iconName = isFocused ? "search" : "search-outline";
      break;
    case "profile":
      iconName = isFocused ? "person" : "person-outline";
      break;
    case "settings":
      iconName = isFocused ? "settings" : "settings-outline";
      break;
    case "contact":
      iconName = isFocused ? "mail" : "mail-outline";
      break;
    case "description":
      iconName = isFocused ? "document-text" : "document-text-outline";
      break;

    default:
      iconName = "home"; // Fallback icon
  }

  return (
    <Ionicons
      name={iconName}
      size={isFocused ? 40 : 24}
      color={isFocused ? "#0891b2" : "#737373"}
    />
  );
};

export default TabIcon;
