import React, { Component } from "react";

import ThemeProvider from "../ThemeProvider";

import LandingPageHero from "./LandingPageHero";
import LandingPageFeatures from "./LandingPageFeatures";
import LandingPageAbout from "./LandingPageAbout";
import NavBar from "../plans/navbar";

class LandingPage extends Component {
  componentDidMount() {
    document.title = "TravelX"
  }
  
  render() {
    return (
      <div>
        <NavBar/>
        <LandingPageHero />
        <LandingPageFeatures />
        <LandingPageAbout />
        <div>Footer</div>
      </div>
    );
  }
}

export default ThemeProvider(LandingPage);
