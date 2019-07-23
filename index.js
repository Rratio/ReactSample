/**
 * @format
 */

//import libraries
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";
import { name as appName } from "./app.json";

//Make a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={"ReactNativeSampleApp"} />
    <AlbumList />
  </View>
);

//Render it to a component
AppRegistry.registerComponent(appName, () => App);
