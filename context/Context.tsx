import React, { useEffect, useState, createContext } from "react";

// --- AWS Amplify ----
import { generateClient } from "aws-amplify/api";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";
import { createTodo, deleteTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";

const client = generateClient();

//initialize context outside the component to pass deeply. The actual values are passed in the provider
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoUpdated, setTodoUpdated] = useState(false);
  useEffect(() => {
    fetchTodos();
    setTodoUpdated(false);
  }, [todoUpdated]);

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
  async function addTodo(formState) {
    setTodoUpdated(true);

    try {
      if (!formState.name || !formState.description) {
        return;
      }
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
  async function removeTodo(killList) {
    // Check if killList is empty and return if true
    if (killList.length === 0) {
      console.log("killList is empty, no todos to delete");
      return;
    }

    try {
      setTodoUpdated(true);
      for (const todoId of killList) {
        const deletedTodo = await client.graphql({
          query: deleteTodo,
          variables: {
            input: {
              id: todoId,
            },
          },
        });
        setTodos(todos.filter((id) => id != todoId));

        console.log("Deleted todo:", deletedTodo.data.deleteTodo.name);
      }
    } catch (error) {
      console.error("Error deleting todos:", error);
      // Handle errors as needed
    }
  }

  return (
    <DataContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </DataContext.Provider>
  );
};
