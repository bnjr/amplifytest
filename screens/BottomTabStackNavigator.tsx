import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ToDo } from "./ToDo";
import { DetailsScreen } from "./Details";
import { SettingsScreen } from "./Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { myTheme } from "../styles/themes/grey";
import { ProfileScreen } from "./ProfileScreen";

import { ConsoleLogger } from "aws-amplify/utils";
import ReactHookForm from "./ReactHookForm";
import ImagePickerExample from "./ImagePicker";
const logger = new ConsoleLogger("foo");

const FormStack = createNativeStackNavigator();
function FormStackScreen() {
  return (
    <FormStack.Navigator>
      <FormStack.Screen name="Form" component={ReactHookForm} />
    </FormStack.Navigator>
  );
}

const StorageStack = createNativeStackNavigator();
function StorageStackScreen() {
  return (
    <StorageStack.Navigator>
      <FormStack.Screen name="Details" component={ImagePickerExample} />
    </StorageStack.Navigator>
  );
}

const HooksStack = createNativeStackNavigator();
function HooksStackScreen() {
  return (
    <HooksStack.Navigator>
      <HooksStack.Screen name="Home" component={ToDo} />
    </HooksStack.Navigator>
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
              case "Form":
                iconName = focused ? "ios-create" : "ios-create-outline";
                break;
              case "Storage":
                logger.info("call button pressed");
                iconName = focused ? "ios-cloud" : "ios-cloud-outline";
                break;
              case "ToDo":
                iconName = focused ? "ios-checkbox" : "ios-checkbox-outline";
                break;
              case "Settings":
                iconName = focused ? "ios-settings" : "ios-settings-outline";
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
        <Tab.Screen name="Form" component={FormStackScreen} />
        <Tab.Screen name="Storage" component={StorageStackScreen} />
        <Tab.Screen name="ToDo" component={HooksStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
