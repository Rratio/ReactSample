import React, { Component } from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";
import Button from './Button';

const AlbumDetail = ({ data }) => {
  const { title, artist, thumbnail_image, image, url } = data;
  const {
    thumbnailStyle,
    nameContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={nameContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardItem>

      <CardItem>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardItem>
    </Card>
  );
};

const styles = {
  nameContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default AlbumDetail;
