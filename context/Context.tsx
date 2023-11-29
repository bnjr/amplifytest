import React, { useEffect, useState, createContext } from "react";

// --- AWS Amplify ----
import { generateClient } from "aws-amplify/api";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";
import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";

const client = generateClient();

//initialize context outside the component to pass deeply. The actual values are passed in the provider
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);

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
    async function addTodo(formState){
    try {
        if (!formState.name || !formState.description) {
            return;
        };
      const todo = { ...formState };
      setTodos([...todos, todo]);
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
    <DataContext.Provider value={{ todos, addTodo }}>
      {children}
    </DataContext.Provider>
  );
};
