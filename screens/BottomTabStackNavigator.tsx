import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootLayout } from "./RootLayout";
import { DetailsScreen } from "./Details";
import { SettingsScreen } from "./Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { myTheme } from "../styles/themes/grey";
import { ProfileScreen } from "./ProfileScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={RootLayout} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export const BottomTabStackNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Feed":
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                break;
              case "Calls":
                iconName = focused ? "call" : "call-outline";
                break;
              case "Chats":
                iconName = focused ? "chatbox" : "chatbox-outline";
                break;
              case "Settings":
                iconName = focused ? "ios-list" : "ios-list-outline";
                break;
              // Add additional cases for other routes as needed
              default:
                iconName = ""; // Default icon or some fallback
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: myTheme.colors.primary,
          tabBarInactiveTintColor: myTheme.colors.tertiary,
        })}
      >
        <Tab.Screen name="Feed" component={SettingsStackScreen} />
        <Tab.Screen name="Calls" component={SettingsStackScreen} />
        <Tab.Screen name="Chats" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
