import React from 'react';

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
  <CodePane
    lang="jsx"
    source={require("raw!../../assets/code/LikeButton2.txt")}
    margin="20px auto"
  />
</Slide>