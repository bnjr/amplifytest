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
  headingText: { fontSize: 24 },
  searchText: { fontSize: 12 },
  fineprint: {
    fontSize: 12,
    color: "#999999",
    width: 300,
    padding: 20,
    alignSelf: "center",
  },
  descriptionText: {
    fontSize: 12,
    fontSize: textsm,
    height: 14,
    borderWidth: 0,
    color: "#666666",
    marginBottom: 25,
  },
  displayText: { fontSize: 12, fontSize: textsm, height: 16, borderWidth: 0 },
  urlText: {
    fontSize: 12,
    fontSize: textsm,
    height: 16,
    borderWidth: 0,
    color: "blue",
  },
  displayTitle: { fontSize: 18, backgroundColor: "#e0e0e0" },
  displayTextLeftPad: { fontSize: 12, paddingHorizontal: 30 },
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

  OTPInput: {
    width: 40,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
});
