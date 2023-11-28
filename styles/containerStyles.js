import { StyleSheet } from "react-native";
export const containerStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    margin: 1,
    padding: 1,
  },
  column: {
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 1,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
