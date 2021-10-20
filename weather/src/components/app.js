import React from "react";
import { Component } from "react";

import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

console.log(process.env.REACT_APP_GOOD_ENV)

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
