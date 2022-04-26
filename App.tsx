/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import {createStackNavigator} from '@react-navigation/stack';
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MainPageContainer } from "./src/components/containers/MainPage/MainPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MapPageView } from "./src/components/views/MapPage/MapPage";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="signIn" component={SignInPageContainer} /> */}
        {/* <Stack.Screen name="signUp" component={SignUpPageContainer} /> */}
        <Stack.Screen
          name="main"
          component={MainPageContainer}
          options={{
            headerTitle: "Main",
            // headerLeft:'Button',
            headerStyle: {
              backgroundColor: "#F3F6F9",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "900",
              fontSize: 24,
            },
          }}
        />
        {/* <Stack.Screen
          name="register"
          component={MainPageContainer}
          options={{ title: "Options" }}
        /> */}
        <Stack.Screen
          name="map"
          component={MapPageView}
          options={{
            headerTitle: "Location",
            // headerLeft:'Button',
            headerStyle: {
              backgroundColor: "#F3F6F9",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "900",
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
