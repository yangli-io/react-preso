import React from 'react';

import CodeSlide from 'spectacle-code-slide';
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

export default <Slide transition={["zoom", "fade"]} bgColor="primary">
  <Heading size={2} caps fit textColor="black" textFont="primary">
    Easily Reusable
  </Heading>
  <CodePane
    lang="jsx"
    source={require("raw!../../assets/code/Reusability1.txt")}
    margin="20px auto"
  />
</Slide>