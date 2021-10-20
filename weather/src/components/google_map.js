import { Loader } from "@googlemaps/js-api-loader";
import React, { Component } from "react";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const loader = new Loader({
  apiKey: API_KEY,
  version: "weekly"
});

class GoogleMap extends Component {
  componentDidMount() {
    loader.load().then(() => {
      new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
          lat: this.props.lat,
          lng: this.props.lon
        }
      })
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
