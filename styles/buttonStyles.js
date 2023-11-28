import { StyleSheet } from "react-native";
import { myTheme } from "./themes/grey";
export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    //padding: 1,
    margin: 1,
    height:40,
  },
  fab: {
    position: "absolute",
    right: 16,
    backgroundColor: myTheme.colors.primary,
    color:myTheme.colors.onPrimary
  },
});

export const fabHeight = 20;
