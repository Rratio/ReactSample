/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import Header from "./App";
import { name as appName } from "./app.json";

//Make a component
const App = () => (
  <Header headerText={"ReactNativeSampleApp"} />
);

AppRegistry.registerComponent(appName, () => App);
