// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Intro from './Slides/1.Intro';
import WhyReact from './Slides/2.WhyReact';
import Companies from './Slides/3.Companies';
import WhatReact from './Slides/4.WhatReact';
import LikeButton1 from './Slides/5.LikeButton1';
import PropsAndStates from './Slides/6.PropsAndStates';
import LikeButton2 from './Slides/7.LikeButton2';
import Reusability from './Slides/8.Reusability';
import UnitTesting from './Slides/9.UnitTesting';
import ServerRendering from './Slides/10.ServerRendering';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#00DCFF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          {Intro}
          {WhyReact}
          {Companies}
          {WhatReact}
          {LikeButton1[0]}
          {LikeButton1[1]}
          {PropsAndStates}
          {LikeButton2}
          {Reusability}
          {UnitTesting[0]}
          {UnitTesting[1]}
          {ServerRendering}
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              React Native Demo!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
