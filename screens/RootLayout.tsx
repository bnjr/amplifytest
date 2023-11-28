import React, { useEffect, useState } from "react";
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

// --- AWS Amplify ----
import { generateClient } from "aws-amplify/api";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";
import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";

// retrieves only the current value of 'user' from 'useAuthenticator'

const userSelector = (context) => [context.user];

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);

  return (
    <Button onPress={signOut} style={buttonStyles.buttonContainer}>
      <Text style={textStyles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Button>
  );
};
const initialState = { name: "", description: "" };
const client = generateClient();

export const RootLayout = () => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const { top } = useSafeAreaInsets();
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos,
      });
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await client.graphql({
        query: createTodo,
        variables: {
          input: todo,
        },
      });
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <SafeAreaView style={containerStyles.fullscreen}>
      {/* <SignOutButton /> */}
      <Appbar.Header
        style={containerStyles.topAppbar}
        safeAreaInsets={{ top }}
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action
          icon="calendar"
          color="blue"
          disabled
          size={iconSize}
          onPress={() => {
            console.log("pressed calendar");
          }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
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
          onPress={addTodo}
          mode="elevated"
          style={buttonStyles.buttonContainer}
        >
          <Text style={textStyles.buttonText}>Create todo</Text>
        </Button>
        <View style={containerStyles.body}>
          {todos.map((todo, index) => (
            <View key={todo.id ? todo.id : index} style={containerStyles.row}>
              <Avatar.Icon size={iconSize} icon="folder" />
              <Text style={textStyles.todoName}>{todo.name}</Text>
              <Text style={textStyles.todoDescription}>{todo.description}</Text>
              <Avatar.Image
                style={imageStyles.icon}
                size={iconSize}
                source={require("../assets/images/aryaman.jpg")}
              />
              <Avatar.Text
                style={imageStyles.icon}
                size={iconSize}
                label="AB"
              />
            </View>
          ))}
        </View>
      </View>
      <Appbar style={containerStyles.bottomAppbar} safeAreaInsets={{ bottom }}>
        <Appbar.Action icon="archive" onPress={() => {}} />
        <Appbar.Action icon="email" onPress={() => {}} />
        <Appbar.Action icon="label" onPress={() => {}} />
        <Appbar.Action icon="delete" onPress={() => {}} />
        <FAB
          mode="elevated"
          size="small"
          icon="plus"
          onPress={() => {}}
          style={buttonStyles.fab}
          color="white"
        />
      </Appbar>
    </SafeAreaView>
  );
};
