import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

interface AddTodoProps {
  submitHandler: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val: string) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button color="coral" onPress={pressHandler} title="add todo" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
