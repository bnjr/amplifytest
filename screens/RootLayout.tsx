import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Pressable, SafeAreaView } from "react-native";
import {
  Text,
  TextInput,
  Button,
  Appbar,
  FAB,
  useTheme,
  Avatar,
  Banner,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { textStyles } from "../styles/textStyles";
import { buttonStyles, fabHeight } from "../styles/buttonStyles";
import { imageStyles, iconSize } from "../styles/imageStyles";
import { containerStyles } from "../styles/containerStyles";

import { DataContext } from "../context/Context";

export const RootLayout = ({ navigation}) => {
  //const [todos, setTodos] = useState([]);
  const { todos, addTodo } = useContext(DataContext);

  const { top } = useSafeAreaInsets();
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  const initialState = { name: "", description: "" };
  const [formState, setFormState] = useState(initialState);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  return (
    <SafeAreaView style={containerStyles.fullscreen}>
      <View style={containerStyles.usablescreen}>
        <TextInput
          onChangeText={(value) => setInput("name", value)}
          style={textStyles.inputText}
          label="Name"
          value={formState.name}
          mode="outlined"
          placeholder="Type here"
        />
        <TextInput
          onChangeText={(value) => setInput("description", value)}
          style={textStyles.inputText}
          mode="outlined"
          label="Description"
          value={formState.description}
          placeholder="Type here"
        />
        <Button
          onPress={() => {
            addTodo(formState);
            setFormState( initialState );
          }}
          mode="elevated"
          style={buttonStyles.buttonContainer}
        >
          <Text style={textStyles.buttonText}>Create todo</Text>
        </Button>
        <View style={containerStyles.body}>
          {todos &&
            todos.map((todo, index) => (
              <View key={todo.id ? todo.id : index} style={containerStyles.row}>
                <Avatar.Icon size={iconSize} icon="format-list-checks" />
                <Text style={textStyles.todoName}>{todo.name}</Text>
                <Text style={textStyles.todoDescription}>
                  {todo.description}
                </Text>
              </View>
            ))}
        </View>
      </View>

    </SafeAreaView>
  );
};
