import React, {  } from 'react'
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { Amplify } from 'aws-amplify'
import amplifyconfig from './src/amplifyconfiguration.json'
import { RootLayout } from './src/RootLayout'
Amplify.configure(amplifyconfig)

// retrieves only the current value of 'user' from 'useAuthenticator'

const userSelector = (context) => [context.user]

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <RootLayout />
      </PaperProvider>
    </SafeAreaView>
  );
}

// export default withAuthenticator(App)
export default App

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { fontSize: 20 },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 },
})
