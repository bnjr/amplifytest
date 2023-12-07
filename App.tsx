import React from "react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
//import awsconfig from "./src/aws-exports";
Amplify.configure(amplifyconfig);

import { DataProvider } from "./src/context/Context";
import ThemeProvider from "./src/styles/ThemeProvider";
import { NavigationProvider } from "./src/screens/Navigation";
import { BottomTabNavigator } from "./src/screens/BottomTabNavigator";
import { BottomTabStackNavigator } from "./src/screens/BottomTabStackNavigator";

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
