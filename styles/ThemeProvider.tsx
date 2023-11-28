import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

import { myTheme } from "./themes/grey";

const theme = {
  ...DefaultTheme,
  colors: {
    //...DefaultTheme.colors,
    ...myTheme.colors,
    //primary: "tomato",
    //secondary: "yellow",
    //background: "#ddd",
  },
};

const ThemeProvider = ({ children }) => {
  return (
      <PaperProvider theme={theme}>
          {children}
      </PaperProvider>
  );
};

// export default withAuthenticator(App)
export default ThemeProvider;
