import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login/Login";
import Register from "./src/components/Register/Register";
import { Button, Text } from "react-native";
import StartPage from "./src/components/Start/StartPage";
import Home from "./src/components/Home/Home";
import ForgotPassword from "./src/components/ForgotPassword/ForgotPassword";
import ResetPasswordPage from "./src/components/ForgotPassword/ResetPasswordPage";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          title: "",
          cardStyle: {
            backgroundColor: "#dce5df",
          },
          headerTitleStyle: {
            color: "#dce5df",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{
            headerStyle: {
              backgroundColor: "#dce5df",
            },

            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: "#dce5df",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: "#dce5df",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#dce5df",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ForgotPasswordPage"
          component={ForgotPassword}
          options={{
            headerStyle: {
              backgroundColor: "#dce5df",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ResetPasswordPage"
          component={ResetPasswordPage}
          options={{
            headerStyle: {
              backgroundColor: "#dce5df",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
