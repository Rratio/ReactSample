import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardItem>
        <View></View>
        <View style={styles.nameContentStyle}>
          <Text>{props.data.title}</Text>
          <Text>{props.data.artist}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  nameContentStyle: {
    flexDirection:'column',
    justifyContent: "space-around"
  }
};

export default AlbumDetail;
