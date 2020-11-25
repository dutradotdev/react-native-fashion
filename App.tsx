import "react-native-gesture-handler";
import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Onboarding,
  Welcome,
  assets as authenticationAssets,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { Routes } from "./src/components/Navigation";

const assets = [...authenticationAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider {...{ theme, assets }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
