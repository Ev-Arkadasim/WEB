import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./src/components/Home/Homepage";
import Login from "./src/components/Login/Login";
import Register from "./src/components/Register/Register";
import { Button, Text } from "react-native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
          name="Home"
          component={Homepage}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
