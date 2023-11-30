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
  buttonText: { fontSize: 12 },
  searchText: { fontSize: 12 },
  todoName: {
    fontSize: textmid,
    alignSelf: "center",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  todoDescription: {
    fontSize: textsm,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});
