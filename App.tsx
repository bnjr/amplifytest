import React from "react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import ThemeProvider from "./styles/ThemeProvider";
import { RootLayout } from "./screens/RootLayout";
import { DataProvider } from "./context/Context";

// retrieves only the current value of 'user' from 'useAuthenticator'
// const userSelector = (context) => [context.user];

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider>
        <RootLayout />
      </ThemeProvider>
    </DataProvider>
  );
};

// export default withAuthenticator(App)
export default App;
