// import libraries to use this functionality
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>SampleApp</Text>
    </View>
  );
};

//for Giving Styles
const styles = {
  viewStyle: {
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    color: "#ffffff",
    fontSize: 30
  }
};

export default Header;
