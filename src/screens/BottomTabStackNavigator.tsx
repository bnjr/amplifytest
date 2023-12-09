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
import { NotificationsScreen } from "./Notifications";
import { MembersList, MembersList2, MembersList3 } from "./Members";
import { SignUp } from "./SignUp";
import { SignUpInputPhoneNumber } from "./SignUpInputPhoneNumber";
import { SignUpOTP } from "./SignUpOTP";
import { SignUpInputPhoneNumber2 } from "./SignUpInputPhoneNumber2";
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
      <FormStack.Screen
        name="ImagePickerExample"
        component={ImagePickerExample}
      />
    </StorageStack.Navigator>
  );
}

const HooksStack = createNativeStackNavigator();
function HooksStackScreen() {
  return (
    <HooksStack.Navigator>
      <HooksStack.Screen name="ToDo" component={ToDo} />
    </HooksStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Sign Up"
        component={SignUp}
        options={{ title: "Sign up" }}
      />
      <SettingsStack.Screen
        name="SignUpInputPhoneNumber"
        component={SignUpInputPhoneNumber2}
        options={{ title: "Sign up using Phone" }}
      />
      <SettingsStack.Screen
        name="SignUpOTP"
        component={SignUpOTP}
        options={{ title: "Verify" }}
      />

      <SettingsStack.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      <SettingsStack.Screen name="Members" component={MembersList3} />
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
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
              case "FormStack":
                iconName = focused ? "ios-create" : "ios-create-outline";
                break;
              case "StorageStack":
                logger.info("call button pressed");
                iconName = focused ? "ios-cloud" : "ios-cloud-outline";
                break;
              case "HookStack":
                iconName = focused ? "ios-checkbox" : "ios-checkbox-outline";
                break;
              case "SettingsStack":
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
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStackScreen}
          options={{ title: "Login" }}
        />
        <Tab.Screen
          name="FormStack"
          component={FormStackScreen}
          options={{ title: "Forms" }}
        />
        <Tab.Screen
          name="StorageStack"
          component={StorageStackScreen}
          options={{ title: "Storage" }}
        />
        <Tab.Screen
          name="HookStack"
          component={HooksStackScreen}
          options={{ title: "To Do" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
