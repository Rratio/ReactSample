// import libraries
import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbum() {
    return this.state.albums.map(album => (
      <AlbumDetails key={album.title} data={album} />
    ));
  }
  render() {
    console.log(this.state);
    return <ScrollView>{this.renderAlbum()}</ScrollView>;
  }
}

export default AlbumList;
