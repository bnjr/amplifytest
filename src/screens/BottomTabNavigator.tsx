import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ToDo } from "./ToDo";
import { DetailsScreen } from "./Details";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { myTheme } from "../styles/themes/grey";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "ToDo") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: myTheme.colors.primary,
          tabBarInactiveTintColor: myTheme.colors.tertiary,
        })}
      >
        <Tab.Screen name="ToDo" component={ToDo} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
