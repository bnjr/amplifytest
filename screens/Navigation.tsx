import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootLayout } from "./ToDo";
import { DetailsScreen } from "./Details";
const Stack = createNativeStackNavigator();
export const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={RootLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
