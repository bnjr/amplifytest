import { StyleSheet } from "react-native";
import { myTheme } from "./themes/grey";
export const containerStyles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  usablescreen: {
    flex: 0,
    padding: 10,
  },
  topAppbar: {
    //position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    padding: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "left",
    backgroundColor: myTheme.colors.primaryContainer,
  },
  body: {
    justifyContent: "left",
    overflow: "hidden",
  },
  bottomAppbar: {
    //position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "left",
    backgroundColor: myTheme.colors.primaryContainer,
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
});
