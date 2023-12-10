import { StyleSheet } from "react-native";
import { myTheme } from "./themes/grey";
export const containerStyles = StyleSheet.create({
  statusbar: {
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  fullscreen: {
    flex: 1,
  },
  usablescreen: {
    flex: 0,
    padding: 10,
  },
  usableScreenCentered: {
    flex: 1,
    padding: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchBar: {
    //position: "absolute",
    height: 40,
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  infoCard: {
    //position: "absolute",
    marginVertical: 10,
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
  redbox: {
    height: 100,
    backgroundColor: "#ff0000",
    borderRadius: 20,
    marginVertical: 64,
  },
  card: {
    margin: 1,
  },
  spacer: { height: 20 },
  borderBox: {
    flex: 0,
    flexDirection: "row",
    marginRight: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
  reviewcard: {
    margin: 10,
    width: 300,
    height: 150,
    borderRadius: 20,
    elevation: 15, // for shadow on Android
    shadowColor: "#000", // for shadow on iOS
    shadowOffset: { width: 12, height: 14 },
    shadowOpacity: 0.9, //iOs only
    shadowRadius: 3, //iOs only
  },
  separator: {
    height: 1,
    marginLeft: 30,
    backgroundColor: "#e0e0e0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    padding: 1,
  },
  column: {
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 1,
  },
  rating: {
    flexDirection: "row",
    marginBottom: 8,
  },
  OTPContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
