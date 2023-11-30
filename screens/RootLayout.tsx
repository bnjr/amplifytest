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
  Checkbox,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { textStyles } from "../styles/textStyles";
import { buttonStyles, fabHeight } from "../styles/buttonStyles";
import { imageStyles, iconSize } from "../styles/imageStyles";
import { containerStyles } from "../styles/containerStyles";

import { DataContext } from "../context/Context";

export const RootLayout = ({ navigation }) => {
  const { todos, addTodo, removeTodo } = useContext(DataContext);
  const [localTodos, setLocalTodos] = useState(
    todos.map((todo) => ({ ...todo, checked: false }))
  );
  const [killList, setkillList] = useState([]);
  useEffect(() => {
    // Update localTodos whenever the todos from context change
    setLocalTodos(todos.map((todo) => ({ ...todo, checked: false })));
    setkillList([]);
  }, [todos]);

  useEffect(() => {
    // Update killlist whenever the localtodos from context change
    //console.log("-----------killist", killList);
    //console.log("-----------localTodo");
    //localTodos.map((i) => {console.log(i.name, i.checked);})
    ;
  }, [localTodos, killList]);

  const { top } = useSafeAreaInsets();
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  const initialState = { name: "", description: "" };
  const [formState, setFormState] = useState(initialState);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  const toggleChecked = (todoId) => {
    setLocalTodos(
      localTodos.map((i) =>
        i.id === todoId ? { ...i, checked: !i.checked } : i
      )
    );

    if (killList.includes(todoId)) {
      setkillList(killList.filter((id) => id !== todoId));
    } else {
      setkillList([...killList, todoId]);
    }
  };

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
            setFormState(initialState);
          }}
          mode="elevated"
          style={buttonStyles.button}
        >
          <Text style={textStyles.buttonText}>Create todo</Text>
        </Button>
      </View>
      <View style={containerStyles.usablescreen}>
        <View style={containerStyles.body}>
          {localTodos &&
            localTodos
              .sort((a, b) => {
                return a.name.localeCompare(b.name);
              })
              .map((i, index) => (
                <View key={i.id ? i.id : index} style={containerStyles.row}>
                  <Checkbox
                    status={i.checked ? "checked" : "unchecked"}
                    onPress={() => toggleChecked(i.id)}
                  />
                  <Text style={textStyles.todoName}>{i.name}</Text>
                  <Text style={textStyles.todoDescription}>
                    {i.description}
                  </Text>
                </View>
              ))}
        </View>
        <Button
          onPress={() => {
            removeTodo(killList);
            //setFormState(initialState);
          }}
          mode="elevated"
          style={buttonStyles.button}
        >
          <Text style={textStyles.buttonText}>Delete todo</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
