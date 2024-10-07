import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What's Low?</Text>
      <TouchableOpacity>
        <Entypo name="user" size={24} style={styles.icon} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Vertically center items
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16, // Add some horizontal padding
  },
  text: {
    fontSize: 30,
    fontFamily: "caveat-bold",
    color: "#fff",
    flexShrink: 1, // Prevent the text from growing too large
  },
  icon: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
