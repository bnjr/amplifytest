import { StyleSheet } from "react-native";
import { myTheme } from "./themes/grey";
export const buttonStyles = StyleSheet.create({
  button: {
    //padding: 1,
    margin: 5,
    height: 40,
    width: 200,
  },
  fab: {
    position: "absolute",
    right: 16,
    backgroundColor: myTheme.colors.primary,
    color:myTheme.colors.onPrimary
  },
});

export const fabHeight = 20;
