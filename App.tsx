import React from "react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import { DataProvider } from "./context/Context";
import ThemeProvider from "./styles/ThemeProvider";
import { NavigationProvider } from "./screens/Navigation";
import { BottomTabNavigator } from "./screens/BottomTabNavigator";
import { BottomTabStackNavigator } from "./screens/BottomTabStackNavigator";

// retrieves only the current value of 'user' from 'useAuthenticator'
// const userSelector = (context) => [context.user];


const App = () => {
  return (
    <DataProvider>
      <ThemeProvider>
        <BottomTabStackNavigator />
      </ThemeProvider>
    </DataProvider>
  );
};

// export default withAuthenticator(App)
export default App;
