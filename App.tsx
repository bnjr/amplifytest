import React from "react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import ThemeProvider from "./styles/ThemeProvider";
import { RootLayout } from "./screens/RootLayout";

// retrieves only the current value of 'user' from 'useAuthenticator'
// const userSelector = (context) => [context.user];

const App = () => {
  return (
    <ThemeProvider>
      <RootLayout />
    </ThemeProvider>
  );
};

// export default withAuthenticator(App)
export default App;
