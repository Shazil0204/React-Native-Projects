import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface TodoItemProps {
  pressHandler: (key: string) => void; // Function takes a string (key) and returns void
  item: {
    key: string; // Assuming the key is a string, adjust if it's numeric
    text: string; // The text to display in the item
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ pressHandler, item }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    color: "white",
    fontSize: 20,
    borderColor: "#18ffff",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
  },
});

export default TodoItem;
