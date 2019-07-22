/**
 * @format
 */

//import libraries
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./App";
import AlbumList from "./src/components/AlbumList";
import { name as appName } from "./app.json";

//Make a component
const App = () => (
  <View>
    <Header headerText={"ReactNativeSampleApp"} />
    <AlbumList />
  </View>
);

//Render it to a component
AppRegistry.registerComponent(appName, () => App);
