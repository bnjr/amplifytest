import { StyleSheet } from "react-native";

const textsm = 12;
const textmid = 16;

export const textStyles = StyleSheet.create({
  inputText: {
    //backgroundColor: '#eee',
    marginBottom: 1,
    fontSize: textsm,
    height: 30,
  },
  buttonText: { fontSize: 18 },
  todoName: {
    fontSize: textmid,
    alignSelf: "center",
    fontWeight: "bold",
    marginLeft: 5,
  },
  todoDescription: {
    fontSize: textsm,
    alignSelf: "center",
    marginLeft: 5,
  },
});